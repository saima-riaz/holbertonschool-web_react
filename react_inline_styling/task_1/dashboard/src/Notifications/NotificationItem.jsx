import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    width: '300px',
    padding: '10px',
  },
});

function Notifications() {
  return <div className={css(styles.notifications)}>Notification Content</div>;
}

export default Notifications;
