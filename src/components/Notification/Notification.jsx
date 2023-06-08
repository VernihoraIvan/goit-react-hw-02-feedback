import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => (
  <div className={css.notification_title}>{message}</div>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
