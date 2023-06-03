import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0
    },
    isHidden: true,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      // console.log(prevState)
      console.log(option)

      // return {
      //   [option]: prevState.feedback[option] + 1,
      // }

      // const newOptionValue = prevState.feedback[option] + 1;
      // const newState = {...prevState, feedback: {...prevState.feedback, [option]: newOptionValue}}
      // console.log(newState);

      // return newState;

      return { ...prevState, feedback: { ...prevState.feedback, [option]: prevState.feedback[option] + 1 } }



    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedback;
    return good + neutral + bad;
  };


  countPositiveFeedback = () => {
    const { good } = this.state.feedback;
    return Math.round(good / this.countTotalFeedback() * 100)
  }

  render() {

    const { good, neutral, bad } = this.state.feedback;
    const totalFeedback = this.countTotalFeedback();

    let percentage = this.countPositiveFeedback();
    percentage = isNaN(percentage) ? undefined : percentage;

    const isHidden = totalFeedback === 0;

    return (
      <div className="container"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={Object.keys(this.state.feedback)} />
        </Section>
        <Section title="Statistics">
          {isHidden
            ? <Notification message="There is no feedback" />
            : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={percentage}
            />}
        </Section>
      </div>
    );
  }
};
