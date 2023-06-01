import { Component } from "react";
import FeedbackBtns from "./FeedbackBtns/FeedbackBtns";
// import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 10,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(); 

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
        <FeedbackBtns
          onHandleFeedback={this.handleFeedback}
          feedbacks={{ good, neutral, bad }} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad} />
      </div>
    );
  }
};
