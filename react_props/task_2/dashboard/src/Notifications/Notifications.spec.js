import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { 
      id: 3, 
      type: 'urgent', 
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } 
    }
  ];

  it('renders all notification items', () => {
    const { getAllByRole } = render(<Notifications notifications={notifications} />);
    const listItems = getAllByRole('listitem');
    
    expect(listItems).toHaveLength(3);
  });
});