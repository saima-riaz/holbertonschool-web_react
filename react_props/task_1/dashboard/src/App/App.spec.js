import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Header component", () => {
  render(<App />);
  const logo = screen.getByAltText(/holberton logo/i);
  expect(logo).toBeInTheDocument();

  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent(/school dashboard/i);
});

test("renders Login component", () => {
  render(<App />);
  
  // Check for the presence of input fields
  const emailInput = screen.getByRole("textbox");
  const passwordInput = screen.getByLabelText(/password/i);
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

  // Check for the presence of labels
  const labelEmail = screen.getByText(/email/i);
  const labelPassword = screen.getByText(/password/i);
  expect(labelEmail).toBeInTheDocument();
  expect(labelPassword).toBeInTheDocument();

  // Check for the presence of the button
  const button = screen.getByRole("button", { name: /ok/i });
  expect(button).toBeInTheDocument();
});

test("renders Footer component", () => {
  render(<App />);
  const footerElement = screen.getByText(
    new RegExp(`Copyright ${new Date().getFullYear()} - Holberton School`, "i")
  );
  expect(footerElement).toBeInTheDocument();
});

test("renders Notifications component", () => {
  render(<App />);
  const notificationsElement = screen.getByText(/here is the list of notifications/i);
  expect(notificationsElement).toBeInTheDocument();
});
