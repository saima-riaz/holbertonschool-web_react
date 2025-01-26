import React, { PureComponent } from 'react';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends PureComponent {
  render() {
    const { displayDrawer, notifications, markAsRead } = this.props;

    return (
      <div className="notifications-container">
        {!displayDrawer && <div>Your notifications</div>}
        {displayDrawer && (
          <div className="Notifications">
            <button
              className="close-button"
              onClick={() => console.log('Close button has been clicked')}
              aria-label="Close"
            >
              <img src={closeIcon} alt="Close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {notifications.length === 0 && (
                <li>No new notification for now</li>
              )}
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
  markAsRead: (id) => console.log(`Notification ${id} has been marked as read`),
};

export default Notifications;
