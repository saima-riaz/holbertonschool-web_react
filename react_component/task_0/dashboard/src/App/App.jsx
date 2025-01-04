import React, { Component } from 'react';
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  render() {
    const { isLoggedIn } = this.props;
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    const coursesList = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <>
        <Notifications
          notifications={notificationsList}
        />
        <Header />
        {
          !isLoggedIn ? (
            <Login />
          ) : (
            <CourseList courses={coursesList} />
          )
        }
        <Footer />
      </>
    );
  }
}

export default App;
