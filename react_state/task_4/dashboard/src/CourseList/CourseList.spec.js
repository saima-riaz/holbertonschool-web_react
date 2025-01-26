import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList Component', () => {
    it('Renders 5 different rows', () => {
        const courses = [
            { id: 1, name: 'Math', credit: '3' },
            { id: 2, name: 'English', credit: '2' },
            { id: 3, name: 'Science', credit: '4' },
        ];
        render(<CourseList courses={courses} />);
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(5); // Header row + 3 course rows + footer row
    });
});
