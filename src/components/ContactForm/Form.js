import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

export default class Form extends Component {
    state={
      name: '',
      lastname: '',
      email: '',
      message: '',
      sent: false
    }

    handleName = (e) => {
      this.setState({
        name: e.target.value
      });
    }

    handleLastname = (e) => {
      this.setState({
        lastname: e.target.value
      });
    }

    handleEmail = (e) => {
      this.setState({
        email: e.target.value
      });
    }

    handleMessage = (e) => {
      this.setState({
        message: e.target.value
      });
    }

    formSubmit=(e) => {
      e.preventDefault();

      const data = {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        message: this.state.message
      };

      axios.post('/Contact', data)
        .then(res => {
          this.setState({
            sent: true
          }, this.resetForm());
        })
        .catch(() => {
          console.log('message not sent');
        });
    }

    resetForm = () => {
      this.setState({
        name: '',
        lastname: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        this.setState({
          sent: false
        });
      }, 3000);
    }

    render () {
      return (
          <div>
              <div className='formPage'>
                <div className='formContainer'>
                  <form onSubmit={this.formSubmit}>
                    <div className='singleItem'>
                      <label htmlFor='name'>Nom</label>
                      <input
                      type='text'
                      name='name'
                      className='name'
                      placeholder='nom'
                      value={this.state.name}
                      onChange={this.handleName}/>
                    </div>
                    <div className='singleItem'>
                      <label htmlFor='lastname'>Prénom</label>
                      <input
                      type='text'
                      name='lastname'
                      className='lastname'
                      placeholder='prénom'
                      value={this.state.lastname}
                      onChange={this.handleLastname}/>
                    </div>
                    <div className='singleItem'>
                      <label htmlFor='email'>Email</label>
                      <input
                      type='text'
                      name='email'
                      className='email'
                      placeholder='adresse email'
                      value={this.state.email}
                      onChange={this.handleEmail}
                      required
                      />
                    </div>
                    <div className='textArea singleItem'>
                      <label htmlFor='message'>Message</label>
                      <textarea
                      name='message'
                      id='' cols='30'
                      rows='5'
                      placeholder='message'
                      value={this.state.message}
                      onChange={this.handleMessage}></textarea>
                    </div>
                    <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Message envoyé</div>
                    <div className='ctcBtn'>
                      <button type='submit'>Envoyer</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
      );
    }
}
