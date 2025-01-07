import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import App from "./App";

test("Should render the header, login, and footer components", () => {
  render(<App isLoggedIn={false} />);

  // Verify Header
  expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();

  // Verify Footer
  expect(screen.getByText(/Copyright 2025 - Holberton School/i)).toBeInTheDocument();
});

test("Should call logOut function and alert when Ctrl + H is pressed", () => {
  const logOutMock = jest.fn();
  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  render(<App isLoggedIn={true} logOut={logOutMock} />);

  // Simulate Ctrl + H key press
  fireEvent.keyDown(window, { ctrlKey: true, key: "h" });

  expect(alertMock).toHaveBeenCalledWith("Logging you out");
  expect(logOutMock).toHaveBeenCalledTimes(1);

  // Clean up the mock
  alertMock.mockRestore();
});

test("Should display the title 'Course list' above the CourseList component when isLoggedIn is true", () => {
  render(<App isLoggedIn={true} />);

  // Verify the title above CourseList
  expect(screen.getByText(/Course list/i)).toBeInTheDocument();
});

test("Should display the title 'Log in to continue' above the Login component when isLoggedIn is false", () => {
  render(<App isLoggedIn={false} />);

  // Verify the title above Login
  expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
});

test("Should display a title 'News from the School' and a paragraph with text 'Holberton School News goes here' by default", () => {
  render(<App isLoggedIn={false} />);

  // Verify the News from the School title
  expect(screen.getByText(/News from the School/i)).toBeInTheDocument();

  // Verify the paragraph content
  expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
});
