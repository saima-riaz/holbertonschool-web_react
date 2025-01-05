import { render, fireEvent } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import App from "./App";

test("Should render the header, login, and footer components", () => {
  render(<App isLoggedIn={false} />);
});

test("Should call logOut function and alert when Ctrl + H is pressed", () => {
  const logOutMock = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<App isLoggedIn={true} logOut={logOutMock} />);

  // Simulate Ctrl + H key press
  fireEvent.keyDown(window, { ctrlKey: true, key: 'h' });

  expect(alertMock).toHaveBeenCalledWith('Logging you out');
  expect(logOutMock).toHaveBeenCalledTimes(1);

  // Clean up the mock
  alertMock.mockRestore();
});