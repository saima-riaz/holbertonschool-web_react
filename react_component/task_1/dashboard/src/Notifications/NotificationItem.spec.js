import { render, fireEvent } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import NotificationItem from "./NotificationItem";

test("should call markAsRead when clicked", () => {
  const markAsReadMock = jest.fn();
  const { getByText } = render(
    <NotificationItem id={1} type="default" value="New course available" markAsRead={markAsReadMock} />
  );

  fireEvent.click(getByText('New course available'));

  expect(markAsReadMock).toHaveBeenCalledWith(1);
});