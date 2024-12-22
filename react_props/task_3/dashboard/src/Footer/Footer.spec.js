import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";
import { getFooterCopy } from "../utils/utils"; // Ensure the utility function path is correct

test("Footer renders the correct copyright text", () => {
  const isIndex = true; // Set isIndex to true
  const footerText = getFooterCopy(isIndex);

  render(<Footer />);
  
  const footerElement = screen.getByText(new RegExp(`Copyright ${new Date().getFullYear()} - Holberton School`, "i"));
  expect(footerElement).toHaveTextContent(footerText);
});
