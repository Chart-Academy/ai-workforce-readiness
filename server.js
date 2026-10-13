const path = require('path');
const express = require("express");

const app = express();
const local_port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views'), {
  extensions: ['html']
}));

app.listen(local_port, () => {
  console.log(`running on http://localhost:${local_port}`);
});
