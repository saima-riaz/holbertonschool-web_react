import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: '10px',
    borderBottom: '1px solid #e6e6e6',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src="/logo.png" alt="Logo" className={css(styles.logo)} />
      <h1>Header Content</h1>
    </header>
  );
}

export default Header;
