import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";

test("Header component contains the Holberton logo", () => {
  render(<Header />);
  const logo = screen.getByAltText(/holberton logo/i); // Ensure the alt text matches
  expect(logo).toBeInTheDocument();
});

test("Header component contains the h1 element with correct text", () => {
  render(<Header />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent(/school dashboard/i); // Ensure the text matches
});