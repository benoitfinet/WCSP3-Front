import Navbar from './Navbar';
import Carousel from './Carouselhome';
import Button from './Button';
import HomeEvent from './HomeEvent';
import Footer from '../Footer/Footer';
import Indexcards from './Indexcards';
import Textparc from './Textparc';

import './Home.css';

function Home () {
  return (
    <div>
      <Navbar title="Eveil tes sens"/>
      <Textparc className="textparc"/>
      <Carousel className="carousel" />
      <Button className="button" />
      <Indexcards />
      <HomeEvent />
      <Footer />
    </div>
  );
}

export default Home;
