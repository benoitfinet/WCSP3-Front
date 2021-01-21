import React from 'react';

// eslint-disable-next-line react/prop-types
const Section = ({ children }) => {
  return (
    <section
      style={{
        margin: '20px 0 20px 0'
      }}
    >
      {children}
    </section>
  );
};

export default Section;
