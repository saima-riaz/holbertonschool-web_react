import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders default notification with blue color', () => {
    const { getByRole } = render(
      <NotificationItem type="default" value="Test Notification" />
    );
    const listItem = getByRole('listitem');
    
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders urgent notification with red color', () => {
    const { getByRole } = render(
      <NotificationItem type="urgent" value="Urgent Notification" />
    );
    const listItem = getByRole('listitem');
    
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
  });
});