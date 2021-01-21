import React from 'react';
import { Frame } from 'framer';
import './SecondNavbar.css';

const variants = {
  default: {
    y: -2,
    shadow: '0px 2px 0px #89CBDF'
  },
  hover: {
    y: -4,
    shadow: '0px 4px 0px #89CBDF'
  },
  active: {
    y: 0,
    shadow: '0px 0px 0px #89CBDF'
  }
};

function SecondNavbar () {
  return (
    <div>
      <div id="testnavsec">
    <Frame
      color="white"
      variants={variants}
      width={100}
      height={100}
      borderRadius={3}
      backgroundColor="#0079B8"
      whileHover="hover"
      whileTap="active"
      animate="default"
    >
      Action
    </Frame>
    <Frame
      color="white"
      variants={variants}
      width={100}
      height={100}
      borderRadius={3}
      backgroundColor="#0079B8"
      whileHover="hover"
      whileTap="active"
      animate="default"
    >
      Action
    </Frame>
    <Frame
      color="white"
      variants={variants}
      width={100}
      height={100}
      borderRadius={3}
      backgroundColor="#0079B8"
      whileHover="hover"
      whileTap="active"
      animate="default"
    >
      Action
    </Frame>
    <Frame
      color="white"
      variants={variants}
      width={100}
      height={100}
      borderRadius={3}
      backgroundColor="#0079B8"
      whileHover="hover"
      whileTap="active"
      animate="default"
    >
      Action
    </Frame>
    </div>
    </div>
  );
}

export default SecondNavbar;
