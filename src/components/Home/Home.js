import Nav from '../Nav/Navbar.js';
import Carousel from './Carouselhome';
import HomeEvent from './HomeEvent';
import Footer from '../Footer/Footer';
import CarouselEvent from './CarouselEvent';
import Textparc from './Textparc';
import Photo1 from '../Nav/img/backgroundhome.jpeg';

import './Home.css';

function Home () {
  return (
    <div>
      <Nav imgbanner={Photo1}/>
      <Textparc className="textparc"/>
      <Carousel className="carousel" />
      <CarouselEvent />
      <HomeEvent />
      <Footer />
    </div>
  );
}

export default Home;
