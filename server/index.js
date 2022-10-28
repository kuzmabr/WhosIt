const express = require('express');
// var bodyparser = require('body-parser');
// var urlencodedparser = bodyparser.urlencoded({extended:false});
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
const axios = require("axios");



const DIST_DIR = path.join(__dirname, '../dist');
// const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));


app.post('/',function (req, res) {
  var email = req.body.email;
  const options = {
    method: 'GET',
    url: 'https://email-validator18.p.rapidapi.com/email/validate',
    params: {email: email},
    headers: {
      'X-RapidAPI-Key': 'e48fdef6d3msh6a668c7ca726306p14d3a0jsnefb62d1f73ad',
      'X-RapidAPI-Host': 'email-validator18.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data.success)
    if (response.data.success === 'good') {
      res.send(response.data.success);
    }
  }).catch(function (error) {
    console.error(error);
  })
});


app.listen(port, () => {
  console.log(`WhosIt app listening on port ${port}`)
})