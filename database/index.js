const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WhosIt');

let contactSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  impression:  Number,
  family: String,
  likes: Number,
  dislikes: String,
  professional: String
});

let Contacts = mongoose.model('Contacts', contactSchema);

let save = (result) => {
console.log('save func is iterating over this submitted data,', result);
  var contact = new Contacts({
    email: result.email,
    impression: result.impression,
    family: result.family,
    likes: result.likes,
    dislikes: result.dislikes,
    professional: result.professional
  })

  contact.save((function (err) {
    if (err) throw (err)
    else console.log('mongo success');
  })
  );
}

let ContactsGetter = () => {
  return Contacts.find();
}

let singleContactGetter = (email) => {
  Contacts.findOne({ email: `${email}` }, function (err, adventure) {});
}



module.exports.contactsGetter = ContactsGetter;
module.exports.save = save;