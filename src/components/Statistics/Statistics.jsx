// import PropTypes from 'prop-types';
import { Component } from 'react'
// import css from './Statistics.module.css'

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props
        if (total > 0) {
            
        //   console.log(neutral)
        return (
            <div> 
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    {positivePercentage
                    ?<li>Total positive: {positivePercentage} %</li>
                    : ''
                    } 
                </ul>
            </div>
        )} 
    }
}

export default Statistics