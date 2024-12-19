import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, jest } from '@jest/globals';
import Notifications from './Notifications';  // Import your Notifications component

test('Should render the notifications title', () => {
  render(<Notifications />);
  const title = screen.getByText(/Here is the list of notifications/i);  // case insensitive match
  expect(title).toBeInTheDocument();
});

test('Should render a button element in the notifications', () => {
  render(<Notifications />);
  const button = screen.getByRole('button', { name: /close/i });  // case insensitive match for the button name
  expect(button).toBeInTheDocument();
});

test('Should render 3 li elements for notifications', () => {
  render(<Notifications />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3);  // Ensure there are exactly 3 <li> elements
});

test('Should log "Close button has been clicked" when close button is clicked', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation();  // Spy on console.log
  render(<Notifications />);
  
  const button = screen.getByRole('button', { name: /close/i });
  fireEvent.click(button);
  
  expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');
  logSpy.mockRestore();  // Restore the console.log spy after the test
});
