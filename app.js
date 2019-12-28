const express = require('express');
const path = require('path');
const app = express();
const front = `C:/Users/sjl8r/Desktop/Coding/my-portfolio/frontend`;
let port = process.env.PORT;


app.use(express.static(path.join(front, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(front, 'build', 'index.html'));
});


if (port == null || port == "") {
  port = 9000;
}

app.listen(port, () => {
  console.log(`Server has started successfully on ${port}`);
});