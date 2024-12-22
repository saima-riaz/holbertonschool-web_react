import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders Header component", () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i); // Check for the logo
    expect(logo).toBeInTheDocument();

    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toHaveTextContent(/school dashboard/i); // Check for the correct heading
  });

  test("renders Login component", () => {
    render(<App />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument(); // Check for the login prompt

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument(); // Check for email input
    expect(passwordInput).toBeInTheDocument(); // Check for password input

    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument(); // Check for the OK button
  });

  test("renders Footer component", () => {
    render(<App />);
    const footerElement = screen.getByText(new RegExp(`Copyright ${new Date().getFullYear()} - Holberton School`, "i"));
    expect(footerElement).toBeInTheDocument(); // Check for the copyright text
  });
});