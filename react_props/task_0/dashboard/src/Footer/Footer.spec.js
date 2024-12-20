import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Footer from "./Footer";

// Test for footer text
test("Should display the footer text with copyright", () => {
  render(<Footer />);
  const footerText = screen.getByText((content) =>
    content.includes("Copyright") && content.includes("2024") && content.includes("Holberton School")
  );
  expect(footerText).toBeInTheDocument();
});
