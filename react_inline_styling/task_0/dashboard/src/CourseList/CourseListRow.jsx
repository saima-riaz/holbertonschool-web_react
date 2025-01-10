import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';



function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = '' }) {
  const heraderStyle ={
    backgroundColor: '#deb5b545'
  }
  const rowStyle = { backgroundColor: '#f5f5f5ab'}
  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
