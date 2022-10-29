import React, {useState, useEffect} from "react";
import ReactDOM  from 'react-dom';
import './styles.scss';
import { EmailForm } from './components/emailForm.jsx'
import { ContactList } from './components/contactList.jsx'
import axios from 'axios';


const App = () => {

  let [contacts, getContacts] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get("/contacts")
      .then((response) => getContacts(response.data));
  }, []);

  return <div>
    <h1>WhosIt</h1>
    <EmailForm />
    <ContactList contacts={contacts}/>
  </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);