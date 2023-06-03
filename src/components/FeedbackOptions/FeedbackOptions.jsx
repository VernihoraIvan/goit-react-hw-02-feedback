// import PropTypes from 'prop-types';
import { Component } from "react"
// import css from './FeedbackOptions.module.css'



class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props
        return (
            <div>
                {options.map(option => (
                    <button
                        key={option}
                        onClick={() => onLeaveFeedback(option)}>{option}</button>
                ))}
            </div>
        )
    }
}

export default FeedbackOptions