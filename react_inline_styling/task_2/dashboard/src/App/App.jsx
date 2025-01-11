import React, { Component } from 'react';
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';


class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    logOut: () => {},
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: getLatestNotification() }
    ];

    const coursesList = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const LoginWithLogging = WithLogging(Login);
    const CourseListWithLogging = WithLogging(CourseList);

    return (
      <>
        <Notifications notifications={notificationsList} displayDrawer={true} />
        <Header />
        {
          !isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={coursesList} />
            </BodySectionWithMarginBottom>
          )
        }
        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
        <Footer />
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  footer: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    borderTop: '1px solid #e6e6e6',
    paddingTop: '10px',
    textAlign: 'center',
  },
});

export default App;
