import React from 'react';
import axios from 'axios';
import { ContactForm } from './contactForm.jsx';


export class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    value: '',
    show:false


  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('verifying email: ' + this.state.value);
    axios.post('/', {
      email: this.state.value
    })
    .then(function (response) {
      console.log('this is the response: ', response.data)
    })
    .then(() => {this.setState({show:!this.state.show})
    })
    .catch(function (error) {
      alert('invalid email, try again!')
      console.log(error);
    });
    event.preventDefault();
  }

  render(){
    return (
<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Verify Email:
          <input type="text" value={this.state.value} onChange={this.handleChange}>
          </input>
        </label>
        <input type="submit" value="Submit">
        </input>
      </form>
      <div>
      {
          this.state.show?
          <div>
            <h1>Email Valid!</h1>
            <ContactForm />
            <h1>Contact Form</h1>
          </div> : null
      }
  </div>
  </div>

    )
  }
}

