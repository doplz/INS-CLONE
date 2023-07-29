const express = require('express')

//create a web server
const app = express();

const port = 8000;

//127.0.0.1 = local host
app.listen(8000, () => {
  console.log('server is running on https://localhost:8000')
})