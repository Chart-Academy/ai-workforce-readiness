#!/usr/bin/env bash
# Builds the "download all" zips in public/data/. Every lesson or work-order
# folder with more than one file gets <folder>-files.zip containing its files.
# Runs in the Pages workflow and before `npm start`; the zips are not committed.
set -euo pipefail

DATA="$(cd "$(dirname "$0")/../public/data" && pwd)"

# Files a folder needs from another folder (paths relative to public/data).
# WO-04 and WO-05 reuse the WO-03 résumé and job posting.
shared() {
  case "$1" in
    wo04|wo05)
      echo work-orders/wo03/wo03-resume-messy.docx
      echo work-orders/wo03/wo03-job-posting-warehouse.docx
      ;;
  esac
}

for dir in "$DATA"/lessons/*/ "$DATA"/work-orders/*/; do
  id="$(basename "$dir")"
  out="$dir$id-files.zip"
  rm -f "$out"

  files=()
  while IFS= read -r f; do files+=("$f"); done < <(
    find "$dir" -maxdepth 1 -type f ! -name '*.zip' ! -name '.*' | sort
    shared "$id" | sed "s#^#$DATA/#"
  )

  if (( ${#files[@]} > 1 )); then
    zip -q -j -X "$out" "${files[@]}"
    echo "built ${out#$DATA/} (${#files[@]} files)"
  fi
done
