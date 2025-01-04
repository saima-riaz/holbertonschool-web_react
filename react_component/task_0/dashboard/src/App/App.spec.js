import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  
  let logOutMock;

  beforeEach(() => {
    logOutMock = jest.fn(); // Create a mock function for logOut
    window.alert = jest.fn(); // Mock the alert function
  });

  test('calls logOut function when Control+H is pressed', () => {
    render(<App logOut={logOutMock} isLoggedIn={true} />); // Render App with logOut and isLoggedIn props
    
    // Simulate Control+H key press
    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });
    
    expect(logOutMock).toHaveBeenCalledTimes(1); // Check if logOut was called once
  });

  test('alerts with correct message when Control+H is pressed', () => {
    render(<App logOut={logOutMock} isLoggedIn={true} />); // Render App with logOut and isLoggedIn props
    
    // Simulate Control+H key press
    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });
    
    expect(window.alert).toHaveBeenCalledWith('Logging you out'); // Check if alert was called with the correct message
  });

});