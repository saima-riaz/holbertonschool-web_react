import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
    return (
        <tr>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                ) : (
                    <th colSpan="2">{textFirstCell}</th>
                )
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
};

CourseListRow.propTypes = {
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
    isHeader: PropTypes.bool,
};

CourseListRow.defaultProps = {
    textSecondCell: null,
    isHeader: false,
};

export default CourseListRow;
