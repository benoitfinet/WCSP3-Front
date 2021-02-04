import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/background-activite.jpg';
import Faq from './Question';
import questions from './Faq';
import Footer from '../Footer/Footer';

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
      <div>
        <Navbar imgbanner={PhotoBanner} textbanner="Orgniser votre journée" />
        <div className="Activites">
            <div className="Activitespadding">
              <div className="Activites-content">
              <div id="ancre-faq"></div>
                <div className="block-faq">
                  {this.state.questions.map((question) => (
                    <Faq question={question} handleShow={this.handleShow} key={question.question} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

AllQuestions.propTypes = {
  questions: PropTypes.object,
  response: PropTypes.string,
  handleShow: PropTypes.func
};

export default AllQuestions;
