import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { newContext } from '../Context/context';

describe('Header Component', () => {
  const mockContextValue = {
    user: {
      isLoggedIn: true,
      email: 'testuser@example.com',
    },
    logOut: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the header with logo and title', () => {
    render(
      <newContext.Provider value={mockContextValue}>
        <Header />
      </newContext.Provider>
    );
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
  });

  it('renders the logout section when the user is logged in', () => {
    render(
      <newContext.Provider value={mockContextValue}>
        <Header />
      </newContext.Provider>
    );
    expect(screen.getByText(/welcome testuser@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it('does not render the logout section when the user is not logged in', () => {
    render(
      <newContext.Provider
        value={{ ...mockContextValue, user: { isLoggedIn: false, email: '' } }}
      >
        <Header />
      </newContext.Provider>
    );
    expect(screen.queryByText(/welcome/i)).toBeNull();
    expect(screen.queryByText(/logout/i)).toBeNull();
  });
});
