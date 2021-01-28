import React from 'react';

import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import './RulesPages.css';

class Politique extends React.Component {
  state = {
    users: []
  };

  getUser = () => {
    fetch('http://localhost:5000/info?id=1')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data[1]
        });
        console.log(data);
      });
  };

  componentDidMount () {
    this.getUser();
  }

  render () {
    const { users } = this.state;
    return (
    <div>
        <Navbar title="Politique de confidentialité"/>
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
export default Politique;
