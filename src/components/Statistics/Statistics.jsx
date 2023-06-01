// import PropTypes from 'prop-types';
import { Component } from 'react'
// import css from './Statistics.module.css'

class Statistics extends Component { 
     render() {
        const {good, neutral, bad} = this.props
        // console.log( {good, neutral, bad})
        return (
            <div>
                <h2>Statistics</h2>
                <ul>
                    <li>Good:{good}</li>
                    <li>Neutral:{neutral}</li>
                    <li>Bad:{bad}</li>
                </ul>
            </div>
        )
    }
}

export default Statistics