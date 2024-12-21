import { render, screen } from "@testing-library/react";
import { expect, test } from '@jest/globals';
import Hearder from "./Header";

// Test for title text(header)
test("Should return a good title text : Holberton logo", () => {
    render(<Hearder />);
    const logo = screen.getByText(/Holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  // Test for header image
test("Header component contains h1 element with correct text", () => {
    render(<Hearder />);
    const heading = screen.getByRole("heading" { level: 1 });
    expect(heading).toHaveTextContent(/school dashboard/i);
  });
  