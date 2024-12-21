import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App components correctly", () => {
  render(<App />);

  // Header component
  const logo = screen.getByAltText(/holberton logo/i);
  expect(logo).toBeInTheDocument();

  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent(/school dashboard/i);

  // Login component
  const emailInput = screen.getByRole("textbox");
  const passwordInput = screen.getByLabelText(/password/i);
  const labelEmail = screen.getByText(/email/i);
  const labelPassword = screen.getByText(/password/i);
  const button = screen.getByRole("button", { name: /ok/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(labelEmail).toBeInTheDocument();
  expect(labelPassword).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  // Footer component
  const footerElement = screen.getByText(
    new RegExp(`Copyright ${new Date().getFullYear()} - Holberton School`, "i")
  );
  expect(footerElement).toBeInTheDocument();

  // Notifications component
  const notificationsElement = screen.getByText(/here is the list of notifications/i);
  expect(notificationsElement).toBeInTheDocument();
});
