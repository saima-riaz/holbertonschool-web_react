import { render, screen } from "@testing-library/react";
import { expect, test } from '@jest/globals';
import Login from "./Login";

test("Login includes 2 labels, 2 inputs, and 1 button", () => {
  render(<Login />);
  
  const labels = screen.getAllByLabelText(/email|password/i); // Adjust label text accordingly
  expect(labels).toHaveLength(2);

  const inputs = screen.getAllByRole("textbox");
  expect(inputs).toHaveLength(2);

  const button = screen.getByRole("button", { name: /ok/i }); // Adjust button text accordingly
  expect(button).toBeInTheDocument();
});

test("Input gets focused when related label is clicked", () => {
  render(<Login />);
  
  const emailLabel = screen.getByLabelText(/email/i);
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  fireEvent.click(emailLabel);
  expect(emailInput).toHaveFocus();
});