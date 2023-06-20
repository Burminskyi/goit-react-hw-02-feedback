import { Component } from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section } from './Section/Section.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((100 / (good + neutral + bad)) * good);
  };

  handleBtnClick = e => {
    this.setState(prev => ({ [e.target.name]: prev[e.target.name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.state}
          handleBadClick={this.handleBadClick}
          handleNeutralClick={this.handleNeutralClick}
          handleGoodClick={this.handleGoodClick}
          onLeaveFeedback={this.handleBtnClick}
        />
        <h3>Statistics</h3>
        {total === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedbacks={positiveFeedbacks}
          />
        )}
      </Section>
    );
  }
}
