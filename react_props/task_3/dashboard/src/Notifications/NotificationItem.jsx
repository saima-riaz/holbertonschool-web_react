import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  if (html) {
    return (
      <li 
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li data-notification-type={type}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string
};

export default NotificationItem;