import React from 'react';
import { render } from '@testing-library/react';
import App from '../App/App';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App isLoggedIn={false} />);
    expect(getByText(/News from the School/i)).toBeInTheDocument();
  });
});
