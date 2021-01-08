import HomeEvent from './components/HomeEvent';
import CarouselPage from './components/carouselhome';
import Button from './components/button';
import Navbar from './components/navbar';
import Footer from './components/Footer';

import './App.css';

function App () {
  return (
    <div className="App">
      <Navbar />
      <CarouselPage />
      <Button />
      <HomeEvent />
      <Footer />
    </div>
  );
}

export default App;
