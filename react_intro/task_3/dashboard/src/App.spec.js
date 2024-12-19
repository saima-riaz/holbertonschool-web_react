import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import App from "./App";

// Test for title text
test("Should return a good title text : School dashboard", () => {
  render(<App />);
  const header = screen.getByText(/School dashboard/i);
  expect(header).toBeInTheDocument();
});

// Test for 2 text elements
test("Should return 2 good text", () => {
  render(<App />);
  const p1 = screen.getByText(/Login to access the full dashboard/i);
  const footer = screen.getByText((content) =>
    content.includes("Copyright") && content.includes("2024") && content.includes("Holberton School")
  );
  expect(p1).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

// Test for header image
test("Should check header image is present", () => {
  render(<App />);
  const imgHeader = screen.getByAltText(/holberton logo/i);
  expect(imgHeader).toBeInTheDocument();
});

// Test for input elements
test("Should render 2 input elements", () => {
  render(<App />);
  const emailInput = screen.getByLabelText(/email/i); // Input for email
  const passwordInput = screen.getByLabelText(/password/i); // Input for password
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

// Test for label elements
test("Should render 2 label elements with correct text", () => {
  render(<App />);
  const emailLabel = screen.getByLabelText(/email/i); // Label linked by htmlFor="email"
  const passwordLabel = screen.getByLabelText(/password/i); // Label linked by htmlFor="password"
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
});

// Test for button with text 'OK'
test("Should render a button with the text OK", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /ok/i });
  expect(button).toBeInTheDocument();
});
