import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ textFirstCell, textSecondCell = null, isHeader = false }) => {
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
    textFirstCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
    isHeader: PropTypes.bool,
};

export default CourseListRow;