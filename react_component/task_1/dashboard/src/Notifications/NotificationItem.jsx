import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, value, html } = this.props;

    return (
      <li data-notification-type={type} onClick={this.handleClick}>
        {value || (html && <span dangerouslySetInnerHTML={html} />)}
      </li>
    );
  }
}

export default NotificationItem;
