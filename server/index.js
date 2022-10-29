const express = require('express');
// var bodyparser = require('body-parser');
// var urlencodedparser = bodyparser.urlencoded({extended:false});
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
const axios = require("axios");

const {save} = require('../database/index.js');
const {contactsGetter} = require('../database/index.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WhosIt');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


const DIST_DIR = path.join(__dirname, '../dist');

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
    res.send(error);
    console.error(error);
  })
});


app.post('/contactform',function (req, res) {
  console.log('this is the req', req.body.contactInfo);
  save(req.body.contactInfo)
  .then(()=>{contactsGetter})
  .then((data)=> console.log('this is the db data: ', data))

});

app.get('/contacts', (req, res) => {
  console.log('contacts are requested')
  contactsGetter()
    .then((contacts) => {res.send(contacts)});
})


app.listen(port, () => {
  console.log(`WhosIt app listening on port ${port}`)
})