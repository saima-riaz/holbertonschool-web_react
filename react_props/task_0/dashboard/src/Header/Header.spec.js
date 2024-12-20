import { render, screen } from "@testing-library/react";
import { expect, test } from '@jest/globals';
import Hearder from "./Header";

// Test for title text(header)
test("Should return a good title text : School dashboard", () => {
    render(<Hearder />);
    const headerTitle = screen.getByText(/School dashboard/i);
    expect(headerTitle).toBeInTheDocument();
  });

  // Test for header image
test("Should check header image is present", () => {
    render(<Hearder />);
    const imgHeader = screen.getByAltText(/holberton logo/i);
    expect(imgHeader).toBeInTheDocument();
  });
  