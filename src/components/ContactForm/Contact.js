import React from 'react';
import Navbar from '../Nav/Navbar';
import Form from './Form';
import Footer from '../Footer/Footer';

class Contact extends React.Component {
  state = {
    photo: []
  };

  getInfo = () => {
    fetch('http://localhost:5000/photo/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          photo: data
        });
      });
  };

  componentDidMount () {
    this.getInfo();
  }

  render () {
    const { photo } = this.state;
    return (
        <div className='contactPage'>
            <Navbar imgbanner={photo.length !== 0 && photo[0].location} textbanner="Contactez nous" />
            <Form/>
            <Footer/>
        </div>
    );
  }
}
export default Contact;
