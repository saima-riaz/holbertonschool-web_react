import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    fontSize: '14px',
    margin: '10px 0',
  },
  urgent: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '10px 0',
  },
});

function NotificationItem({ type = 'default', value }) {
  return (
    <li className={css(type === 'urgent' ? styles.urgent : styles.default)}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
