import PropTypes from 'prop-types';
import { Component } from "react"
import css from './Notification.module.css'

class Notification extends Component {
    render() {
        const { message } = this.props
        return <div className={css.notification_title}>{message}</div>
    }
}

export default Notification

Notification.propTypes = {
    message: PropTypes.string.isRequired
}