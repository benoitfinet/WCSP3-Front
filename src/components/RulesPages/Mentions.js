import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import './RulesPages.css';

import axios from 'axios';

function Mentions () {
  async function makeGetRequest () {
    const res = await axios.get('http://localhost:5000/info');
    const data = res.data;
    console.log(data);
  }
  makeGetRequest();
  return (
    <div>
        <Navbar title="Mentions légales"/>
        <div className="pagesBody">
            <div className="pagesContent">
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Mentions;
