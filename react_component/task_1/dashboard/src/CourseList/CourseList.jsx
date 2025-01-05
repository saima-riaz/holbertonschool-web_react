import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import './CourseList.css';
import React from 'react';

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
};

export default function CourseList({ courses = [] }) {
    return (
        <div className='courses'>
            {
                courses.length > 0 ? (
                    <table id='CourseList'>
                        <thead>
                            <CourseListRow
                                textFirstCell="Available courses"
                                isHeader={true}
                            />
                            <CourseListRow
                                textFirstCell="Course name"
                                textSecondCell="Credit" // Ensure this is provided
                                isHeader={true}
                            />
                        </thead>
                        <tbody>
                            {
                                courses.map(course => (
                                    <CourseListRow
                                        key={course.id}
                                        textFirstCell={course.name}
                                        textSecondCell={String(course.credit)} // Convert number to string
                                        isHeader={false} // Set isHeader to false for course rows
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <table id='CourseList'>
                        <thead>
                            <CourseListRow
                                isHeader={true}
                                textFirstCell="No course available yet"
                                textSecondCell="" // Provide an empty string for textSecondCell
                            />
                        </thead>
                    </table>
                )
            }
        </div>
    );
}