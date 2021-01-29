import Navbar from './Navbar';
import Carousel from './Carouselhome';
import Button from './Button';
import HomeEvent from './HomeEvent';
import Footer from '../Footer/Footer';
import CarouselEvent from './CarouselEvent';
import Textparc from './Textparc';

import './Home.css';

function Home () {
  return (
    <div>
      <Navbar title="Eveille tes sens"/>
      <Textparc className="textparc"/>
      <Carousel className="carousel" />
      <Button className="button" />
      <CarouselEvent />
      <HomeEvent />
      <Footer />
    </div>
  );
}

export default Home;
