import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders Notifications component', () => {
    render(<App />);
    const notificationsText = screen.getByText(/Here is the list of notifications/i);
    expect(notificationsText).toBeInTheDocument();
  });

  // If you need to test for specific notification items
  test('renders notification items', () => {
    render(<App />);
    const courseNotification = screen.getByText(/New course available/i);
    const resumeNotification = screen.getByText(/New resume available/i);
    const urgentNotification = screen.getByText(/Urgent requirement/i);

    expect(courseNotification).toBeInTheDocument();
    expect(resumeNotification).toBeInTheDocument();
    expect(urgentNotification).toBeInTheDocument();
  });
});