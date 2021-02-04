import NavbarHome from './NavHome/NavbarHome.js';
import Carousel from './Carouselhome';
import HomeEvent from './HomeEvent';
import Footer from '../Footer/Footer';
import CarouselEvent from './CarouselEvent';
import Textparc from './Textparc';
import Photo1 from './NavHome/img/backgroundhome.jpeg';

import './Home.css';

function Home () {
  return (
    <div>
      <NavbarHome imgbanner={Photo1}/>
      <Textparc className="textparc"/>
      <Carousel className="carousel" />
      <CarouselEvent />
      <HomeEvent />
      <Footer />
    </div>
  );
}

export default Home;
