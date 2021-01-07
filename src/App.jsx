import HomeEvent from './components/HomeEvent';
import CarouselPage from './components/carouselhome';
import Button from './components/button';
import Navbar from './components/navbar';

import './App.css';

function App () {
  return (      
    <div className="App">
      <Navbar />
      <CarouselPage />
      <Button />
      <HomeEvent />
    </div>
  );
}

export default App;
