import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Header component", () => {
  render(<App />);
  const headerElement = screen.getByRole("banner"); // Use a semantic role if Header uses <header>
  expect(headerElement).toBeInTheDocument();
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
});

test("renders Login component", () => {
  render(<App />);
  const loginElement = screen.getByRole("main"); // Use a semantic role if Login uses <main>
  expect(loginElement).toBeInTheDocument();
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
});

test("renders Footer component", () => {
  render(<App />);
  const footerElement = screen.getByRole("contentinfo"); // Use a semantic role if Footer uses <footer>
  expect(footerElement).toBeInTheDocument();
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});

test("renders Notifications component", () => {
  render(<App />);
  const notificationsElement = screen.getByTestId("notifications");
  expect(notificationsElement).toBeInTheDocument();
  expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
});
