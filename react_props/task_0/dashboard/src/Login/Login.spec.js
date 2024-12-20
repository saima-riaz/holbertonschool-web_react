import { render, screen } from "@testing-library/react";
import { expect, test } from '@jest/globals';
import Login from "./Login";

// Test for login section text
test("Should display the login section text", () => {
    render(<Login />);
    const loginText = screen.getByText(/Login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  // Test for input elements
test("Should render email and password input fields", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i); // Input for email
    const passwordInput = screen.getByLabelText(/password/i); // Input for password
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  // Test for label elements
test("Should render email and password labels", () => {
    render(<Login/>);
    const emailLabel = screen.getByLabelText(/email/i); // Label linked by htmlFor="email"
    const passwordLabel = screen.getByLabelText(/password/i); // Label linked by htmlFor="password"
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  // Test for button with text 'OK'
test("Should render a button with the text OK", () => {
    render(<Login />);
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
  