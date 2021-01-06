import React from 'react';
import PropTypes from 'prop-types';

import Faq from './Question';
import questions from './Faq';

import './AllQuestions.css';

class AllQuestions extends React.Component {
  state = {
    questions: questions
  };

  componentDidMount () {
    const newQuestion = this.state.questions.map((question) => {
      question.show = false;
      question.arrow = true;
      return question;
    });
    this.setState({ questions: newQuestion });
  }

  handleShow = (id) => {
    const newQuestion = this.state.questions.map((question) => {
      if (question.id === id) {
        if (question.show === true && question.arrow === false) {
          question.show = false;
          question.arrow = true;
          return question;
        }
        question.show = true;
        question.arrow = false;
        return question;
      } else {
        question.show = false;
        question.arrow = true;
        return question;
      }
    });
    this.setState({ questions: newQuestion });
  };

  render () {
    return (
      <div className="block-faq">
        {this.state.questions.map((question) => (
          <Faq question={question} handleShow={this.handleShow} key={this.question} />
        ))}
      </div>
    );
  }
}

AllQuestions.propTypes = {
  question: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  handleShow: PropTypes.string.isRequired
};

export default AllQuestions;
