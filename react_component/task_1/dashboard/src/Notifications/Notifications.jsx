import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends Component {
  static propTypes = {
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        html: PropTypes.shape({
          __html: PropTypes.string,
        }),
      })
    ).isRequired,
  };


  // markAsRead method now accepts an id and logs a message to the console
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);  // Fixed interpolation here
  };

  render() {
    const { notifications } = this.props;

    return (
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.map(notification => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
              markAsRead={this.markAsRead}  // Passing markAsRead function as prop
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Notifications;
