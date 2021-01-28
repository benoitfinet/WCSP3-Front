import React from 'react';

import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import './RulesPages.css';

class Mentions extends React.Component {
  state = {
    users: []
  };

  getUser = () => {
    fetch('http://localhost:5000/info/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data[0]
        });
        console.log(data[0]);
      });
  };

  componentDidMount () {
    this.getUser();
  }

  render () {
    const { users } = this.state;

    return (
    <div>
        <Navbar title="Mentions légales"/>
        <div className="pagesBody">
            <div className="pagesContent">
            {users.description}
            </div>
        </div>
        <Footer />
    </div>
    );
  }
}
export default Mentions;
