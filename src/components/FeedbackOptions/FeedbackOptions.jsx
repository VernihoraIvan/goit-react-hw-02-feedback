import PropTypes from 'prop-types';
import { Component } from "react"
import css from './FeedbackOptions.module.css'



class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props
        return (
            <div className={css.buttons_list}>
                {options.map(option => (
                    <button
                        key={option}
                        className={css.button}
                        onClick={() => onLeaveFeedback(option)}>{option}</button>
                ))}
            </div>
        )
    }
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}