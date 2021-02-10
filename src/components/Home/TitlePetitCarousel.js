import { Component } from 'react';

class TitlePetitCarousel extends Component {
    state = {
      homes: []
    };

    getHome = () => {
      fetch('http://localhost:5000/home/')
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            homes: data
          });
        });
    };

    componentDidMount () {
      this.getHome();
    }

    render () {
      const { homes } = this.state;

      return (
        <div className="block-carousel-event">
            <h2 className="home-title-carouselEvent">{homes.length !== 0 && homes[4].title}</h2>
            <h3 className="home-subtitle">{homes.length !== 0 && homes[4].subtitle}</h3>
        </div>
      );
    }
}

export default TitlePetitCarousel;
