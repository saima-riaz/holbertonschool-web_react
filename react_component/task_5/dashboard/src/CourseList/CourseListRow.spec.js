import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders a header row with one column', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell={null} />
        </tbody>
      </table>
    );
    expect(getByText('Header 1')).toBeInTheDocument();
  });

  it('renders a header row with two columns', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
        </tbody>
      </table>
    );
    expect(getByText('Header 1')).toBeInTheDocument();
    expect(getByText('Header 2')).toBeInTheDocument();
  });

  it('renders a standard row with two columns', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />
        </tbody>
      </table>
    );
    expect(getByText('Cell 1')).toBeInTheDocument();
    expect(getByText('Cell 2')).toBeInTheDocument();
  });
});
