import React from 'react';
import PropTypes from 'prop-types';

import './Question.css';

class Question extends React.Component {
  state = {
    show: false
  };

  onChange = () => {
    this.setState({ show: !this.state.show });
  };

  render (props) {
    return (
      <div className='block-questions'>
        <h2 className="question-style">{this.props.question}</h2>
        <p onClick={this.onChange} className="arrow-down"></p>
        <p className={!this.state.show ? 'hide' : 'display'}>
          {this.props.response}
        </p>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired
};

export default Question;
