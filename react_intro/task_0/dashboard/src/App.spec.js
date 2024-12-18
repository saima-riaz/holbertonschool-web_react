import { render, screen } from "@testing-library/react";
import App from "./App";


describe("App Component", () => {
  test("renders the h1 element with text 'School dashboard'", () => {
    // Render the App component
    render(<App />);

    // Find the h1 element by its text content (case insensitive)
    const headingElement = screen.getByRole("heading", { name: /school dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });

  test("renders correct text content in app-body and app-footer", () => {
    render(<App />);

    // Check for paragraph in app-body
    const bodyParagraph = screen.getByText(/login to access the full dashboard/i);
    expect(bodyParagraph).toBeInTheDocument();

    // Check for paragraph in app-footer
    const footerParagraph = screen.getByText(/copyright 2024 - holberton school/i);
    expect(footerParagraph).toBeInTheDocument();
  });

  test("renders an image with the correct alt text", () => {
    render(<App />);

    // Find the image by its alt attribute
    const imageElement = screen.getByAltText(/holberton logo/i);
    expect(imageElement).toBeInTheDocument();
  });
});
