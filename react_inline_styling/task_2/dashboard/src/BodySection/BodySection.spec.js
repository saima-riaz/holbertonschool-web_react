import React from 'react';
import { render } from '@testing-library/react';
import BodySection from './BodySection';

test('renders a heading with the title prop value', () => {
  const { getByText } = render(<BodySection title="Test Title"><p>Test Children</p></BodySection>);
  expect(getByText('Test Title')).toBeInTheDocument();
});

test('renders children passed to it', () => {
  const { getByText } = render(<BodySection title="Test Title"><p>Test Children</p></BodySection>);
  expect(getByText('Test Children')).toBeInTheDocument();
});
