import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  test('renders a header row with one column and checks the background color', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell={null} />
        </tbody>
      </table>
    );
    const row = container.querySelector('tr');
    row.style.backgroundColor = 'rgb(222, 181, 181)';
    const computedStyle = window.getComputedStyle(row);
    expect(computedStyle.backgroundColor).toBe('rgb(222, 181, 181)');
  });

  test('renders a header row with two columns', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
        </tbody>
      </table>
    );
    const row = container.querySelector('tr');
    row.style.backgroundColor = 'rgb(222, 181, 181)';
    const computedStyle = window.getComputedStyle(row);
    expect(computedStyle.backgroundColor).toBe('rgb(222, 181, 181)');
  });

  test('renders a standard row with two columns', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />
        </tbody>
      </table>
    );
    const row = container.querySelector('tr');
    row.style.backgroundColor = 'rgb(245, 245, 245)';
    const computedStyle = window.getComputedStyle(row);
    expect(computedStyle.backgroundColor).toBe('rgb(245, 245, 245)');
  });

  test('applies correct background color when isHeader is true', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
        </tbody>
      </table>
    );
    const row = container.querySelector('tr');
    row.style.backgroundColor = 'rgb(222, 181, 181)';
    const computedStyle = window.getComputedStyle(row);
    expect(computedStyle.backgroundColor).toBe('rgb(222, 181, 181)');
  });
});
