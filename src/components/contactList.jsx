import React, {useState, useEffect} from "react";


export function ContactList(props) {


  return (
    <div className="contact">
      <h2>You've got Contacts</h2>
      {props.contacts.map((contact) => (
        <div className="contact">
          email: {contact.email} <br></br>
          likes: {contact.likes} <br></br>
          dislikes: {contact.dislikes} <br></br>
          professional: {contact.professional} <br></br>
          family: {contact.family} <br></br>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}