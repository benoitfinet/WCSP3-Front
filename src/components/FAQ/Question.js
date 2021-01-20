import React from 'react';
import PropTypes from 'prop-types';

import './Question.css';

class Faq extends React.Component {
  render (props) {
    return (
      <div
        onClick={() => {
          this.props.handleShow(this.props.question.id);
        }}
        className="block-questions"
      >
        <div className="block-questions-arrows">
          <h2 className="question-style">{this.props.question.question}</h2>
          <p
            className={this.props.question.arrow ? 'arrow-right' : 'arrow-down'}>
            </p>
        </div>
          <p className={!this.props.question.show ? 'hide' : 'display'}>
            {this.props.question.response}
          </p>
      </div>
    );
  }
}

Faq.propTypes = {
  question: PropTypes.object,
  response: PropTypes.string,
  handleShow: PropTypes.func
};

export default Faq;
