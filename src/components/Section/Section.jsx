import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOption';
import Notification from 'components/Notification/Notification';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css'

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  onLeaveFeedback = options => {
    this.setState({
      [options]: this.state[options] + 1,
    });

    console.log('click');
  };
  render() {
    return (
      <>
        <h1 className={css.feedBack}>Please leave feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <h2 className={css.feedBack}>{this.props.title}</h2>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        )}
      </>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string
};