import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  list: {
    listStyleType: 'none',
    padding: 0,
  },
});

function CourseList({ courses }) {
  return (
    <ul className={css(styles.list)}>
      {courses.map((course) => (
        <li key={course.id}>{course.name}</li>
      ))}
    </ul>
  );
}

export default CourseList;
