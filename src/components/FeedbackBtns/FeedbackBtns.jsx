// import PropTypes from 'prop-types';
import { Component } from "react"
// import css from './FeedbackBtns.module.css'



class FeedbackBtns extends Component {
     render() {
        const {feedbacks, onHandleFeedback} = this.props
        console.log(feedbacks.good)
        return (
            <div>
                <h2>Please leave feedback</h2> 
                    {/* {feedbacks.map(feedback => (
                        <button
                        onClick={() => onHandleFeedback(feedback)}>{feedback}</button>
                    ))} */}
                    <button type='button' onClick={this.props.onHandleFeedback(feedbacks.good)}>Good</button>
                    <button type='button'>Neutral</button>
                    <button type='button'>Bad</button> 
            </div>
        )
    }
}

export default FeedbackBtns