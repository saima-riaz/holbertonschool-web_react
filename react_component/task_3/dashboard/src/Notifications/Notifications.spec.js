import { render, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import Notifications from './Notifications';

test('Logs the correct message when a notification is clicked', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  const { getByText } = render(<Notifications notifications={notifications} />);

  // Simulate clicking on the first notification
  fireEvent.click(getByText('New course available'));

  // Assert that the console log message matches the expected message
  expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

  // Clean up the mock
  consoleSpy.mockRestore();
});
