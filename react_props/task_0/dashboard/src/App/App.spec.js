import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header component', () => {
  render(<App />);
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
});

test('renders Login component', () => {
  render(<App />);
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<App />);
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});
