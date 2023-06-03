// import PropTypes from 'prop-types';
import { Component } from "react"
// import css from './Notification.module.css'

class Notification extends Component {
    render() {
        const { message } = this.props
        return <div>{message}</div>
    }
}

export default Notification