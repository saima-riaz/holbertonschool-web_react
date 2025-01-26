import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('Renders the notifications title', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
      ],
      displayDrawer: true,
    };
    render(<Notifications {...props} />);
    const titleElement = screen.getByText(/Here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Displays "No new notification for now" when no notifications are available', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/No new notification for now/i)).toBeInTheDocument();
  });

  test('Renders correct number of notifications', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
      displayDrawer: true,
    };
    render(<Notifications {...props} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });

  test('Logs correct message on clicking a notification', () => {
    const logSpy = jest.spyOn(console, 'log');
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
      ],
      displayDrawer: true,
      markAsRead: (id) => console.log(`Notification ${id} has been marked as read`),
    };
    render(<Notifications {...props} />);
    const notification = screen.getByText(/New course available/i);
    fireEvent.click(notification);
    expect(logSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });

  test('Renders close button and logs message when clicked', () => {
    const logSpy = jest.spyOn(console, 'log');
    render(<Notifications displayDrawer={true} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');
  });

  test('Renders "Your notifications" when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
  });
});
