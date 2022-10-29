import React,  { useState } from "react";
import axios from 'axios';

export function ContactForm() {
  const [contactInfo, setContactInfo] = useState({ email: "", impression: 0, family: "", likes: "", dislikes: "", professional: ""});

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value});
  };

  const handleContactSubmit= (event) => {
    console.log('this is the contact info', contactInfo)
    axios.post('/contactform', {
      contactInfo
    })
    .then(function (response) {
      console.log(response);
    })
    .then(() => {
      axios.get('/');

    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <form onSubmit={handleContactSubmit}>
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" onChange={handleChange} />
      <label htmlFor="impression">Impression: </label>
      <input type="number" name="impression" onChange={handleChange} />
      <label htmlFor="family">Family: </label>
      <input type="text" name="family" onChange={handleChange} />
      <label htmlFor="likes">Likes: </label>
      <input type="text" name="dislikes" onChange={handleChange} />
      <label htmlFor="proffesional">Professional: </label>
      <input type="text" name="professional" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}