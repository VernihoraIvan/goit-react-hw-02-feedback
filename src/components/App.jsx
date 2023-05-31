import { Component } from "react";
import FeedbackBtns from "./FeedbackBtns/FeedbackBtns";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
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
        <FeedbackBtns />
        <Statistics />
      </div>
    );
  }
};
