import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from './App';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

// Test: Renders App component without crashing
test('Renders App component without crashing', () => {
  render(<App />);
});

// Test: Renders Header component without crashing
test('Renders Header component without crashing', () => {
  render(<Header />);
});

// Test: Renders Login component without crashing
test('Renders Login component without crashing', () => {
  render(<Login />);
});

// Test: Renders Footer component without crashing
test('Renders Footer component without crashing', () => {
  render(<Footer />);
});

// Test: Renders Notifications component without crashing
test('Renders Notifications component without crashing', () => {
  render(<Notifications />);
});

// Test: Renders 2 input elements and a button with the text "OK" when isLoggedIn is false
test('Renders 2 input elements and a button with the text "OK" when isLoggedIn is false', () => {
  render(<App />);
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();
  const buttonElement = screen.getByRole('button', { name: 'OK' });
  expect(buttonElement).toBeInTheDocument();
});

// Test: Displays the title "Course list" above the CourseList component when isLoggedIn is true
test('Displays the title "Course list" above the CourseList component when isLoggedIn is true', () => {
  render(<App />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  const loginButton = screen.getByRole('button', { name: /OK/i });
  fireEvent.click(loginButton);
  const courseListTitle = screen.getByText("Course list");
  expect(courseListTitle).toBeInTheDocument();
});

// Test: Displays the title "Log in to continue" above the Login component when isLoggedIn is false
test('Displays the title "Log in to continue" above the Login component when isLoggedIn is false', () => {
  render(<App />);
  const loginTitle = screen.getByText('Log in to continue');
  expect(loginTitle).toBeInTheDocument();
});

// Test: Displays "News from the School" and "Holberton School News goes here" by default
test('Displays "News from the School" and "Holberton School News goes here" by default', () => {
  render(<App />);
  const newsTitle = screen.getByText('News from the School');
  expect(newsTitle).toBeInTheDocument();
  const newsContent = screen.getByText('Holberton School News goes here');
  expect(newsContent).toBeInTheDocument();
});

test('Clicking a notification item removes it and logs the correct ID', async () => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<App />);
  const notificationItem = screen.getByText('New course available');
  
  fireEvent.click(notificationItem);
  
  // Wait for the notification to be removed
  await waitFor(() => {
    expect(screen.queryByText('New course available')).toBeNull();
  });
  
  expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
});

 