import Navbar from './Navbar';
import Carousel from './Carouselhome';
import Button from './Button';
import HomeEvent from './HomeEvent';
import Footer from '../Footer/Footer';
import Cards from './Cards';

import './Home.css';

function Home () {
  return (
        <div>
            <Navbar />
            <Carousel className="carousel" />
            <Button className="button" />
            <Cards />
            <HomeEvent />
            <Footer />
        </div>
  );
}

export default Home;
