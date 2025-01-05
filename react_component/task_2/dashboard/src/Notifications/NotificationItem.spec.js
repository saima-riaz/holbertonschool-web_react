import { render, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import NotificationItem from './NotificationItem';

test('Calls markAsRead when notification item is clicked', () => {
  const markAsReadMock = jest.fn(); // Mock the markAsRead function
  const notification = { id: 1, type: 'default', value: 'New course available' };

  const { getByText } = render(
    <NotificationItem
      id={notification.id}
      type={notification.type}
      value={notification.value}
      markAsRead={markAsReadMock} // Pass the mocked function
    />
  );

  // Simulate a click event on the notification item
  fireEvent.click(getByText('New course available'));

  // Assert that the markAsRead function was called with the correct id
  expect(markAsReadMock).toHaveBeenCalledWith(notification.id);
});
