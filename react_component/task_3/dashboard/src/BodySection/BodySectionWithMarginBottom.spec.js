// task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.spec.js
import React from 'react';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('contains a div with the class bodySectionWithMargin', () => {
  const { container } = render(<BodySectionWithMarginBottom title="Test Title"><p>Test Children</p></BodySectionWithMarginBottom>);
  expect(container.firstChild).toHaveClass('bodySectionWithMargin');
});

test('renders the BodySection component', () => {
  const { getByText } = render(<BodySectionWithMarginBottom title="Test Title"><p>Test Children</p></BodySectionWithMarginBottom>);
  expect(getByText('Test Title')).toBeInTheDocument();
  expect(getByText('Test Children')).toBeInTheDocument();
});
