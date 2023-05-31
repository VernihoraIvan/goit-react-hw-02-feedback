// import PropTypes from 'prop-types';
import { Component } from "react"
// import css from './FeedbackBtns.module.css'

class FeedbackBtns extends Component {
    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <ul>
                    <li><button type='button'>Good</button></li>
                    <li><button type='button'>Neutral</button></li>
                    <li><button type='button'>Bad</button></li>
                </ul>
            </div>
        )
    }
}

export default FeedbackBtns