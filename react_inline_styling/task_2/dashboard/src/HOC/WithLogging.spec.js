import { render, screen, cleanup } from '@testing-library/react';
import { test, expect, jest } from '@jest/globals';
import WithLogging from './WithLogging';
import React from 'react';

// Mock App Component
class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

// Wrap the MockApp with the HOC
const MockAppWithLogging = WithLogging(MockApp);

test('Should render the heading from MockApp with HOC', () => {
  render(<MockAppWithLogging />);

  // Verify that the wrapped component renders the heading
  expect(screen.getByText(/Hello from Mock App Component/i)).toBeInTheDocument();
});

test('Should log mounted and unmounted lifecycle methods for HOC', () => {
  const consoleSpy = jest.spyOn(console, 'log'); // Mock console.log

  // Render the component
  render(<MockAppWithLogging />);

  // Check for component mount log
  expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is mounted');

  // Unmount the component
  cleanup();

  // Check for component unmount log
  expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is going to unmount');

  // Restore the mock
  consoleSpy.mockRestore();
});
