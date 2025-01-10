import React from 'react';
import { render, rerender } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component behavior', () => {
  it("doesn't re-render if notifications length stays the same", () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    const { container, rerender } = render(
      <Notifications notifications={notifications} />
    );

    // Get the initial rendered output
    const initialRender = container.innerHTML;

    // Re-render with the same notifications
    rerender(<Notifications notifications={notifications} />);

    // Assert that the rendered output is unchanged
    expect(container.innerHTML).toBe(initialRender);
  });

  it('re-renders if notifications length changes', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    const { container, rerender } = render(
      <Notifications notifications={notifications} />
    );

    // Get the initial rendered output
    const initialRender = container.innerHTML;

    // Re-render with a longer notifications list
    const newNotifications = [
      ...notifications,
      { id: 3, type: 'urgent', value: 'New message available' },
    ];
    rerender(<Notifications notifications={newNotifications} />);

    // Assert that the rendered output has changed
    expect(container.innerHTML).not.toBe(initialRender);
  });
});
