import Carousel from 'react-multi-carousel';
import { Image } from 'semantic-ui-react';

import Photo1 from '../../img/photos atout branches/laser game.jpeg';
import Photo2 from '../../img/photos atout branches/parcours.jpg';
import Photo3 from '../../img/photos atout branches/parcours2.JPG';
import Photo4 from '../../img/photos atout branches/escalade.jpeg';
import Photo5 from '../../img/photos atout branches/team.JPG';
import Photo6 from '../../img/photos atout branches/tyro.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  Photo1, Photo2, Photo3, Photo4, Photo5, Photo6
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
// eslint-disable-next-line react/prop-types
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map(image => {
        return (
          <Image
          key="image"
            draggable={false}
            style={{ width: '100%', height: '100%' }}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;
