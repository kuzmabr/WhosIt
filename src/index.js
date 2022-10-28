import React from 'react';
import ReactDOM  from 'react-dom';
import './styles.scss';
import { EmailForm } from './components/emailForm.jsx'
import { ContactList } from './components/contactList.jsx'


const App = () => {
  return <div>
    <h1>WhosIt</h1>
    <EmailForm />
    <ContactList />
  </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);