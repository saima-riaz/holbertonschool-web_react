import { render, fireEvent } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import Notifications from "./Notifications";

test("should log notification marked as read", () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  const { getByText } = render(<Notifications notifications={notifications} />);

  fireEvent.click(getByText('New course available'));

  expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

  consoleSpy.mockRestore();
});