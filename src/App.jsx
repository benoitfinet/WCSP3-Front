import AllQuestions from './components/AllQuestions';
import HomeEvent from './components/HomeEvent';
import CarouselPage from './components/carouselhome';
import Button from './components/button';
import Navbar from './components/navbar';
import Footer from './components/Footer';

import './App.css';
import Cards from './Components/Cards';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <AllQuestions />
        </header>
        <Navbar />
        <CarouselPage />
        <Button />
        <HomeEvent />
        <Footer />
        <Cards/>
    </div>
  );
}

export default App;
