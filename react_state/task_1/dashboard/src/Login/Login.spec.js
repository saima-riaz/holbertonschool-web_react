import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('Renders App body text', () => {
    render(<Login />);
    const bodyElement = screen.getByText(/Login to access the full dashboard/i);
    expect(bodyElement.closest('.App-body')).toBeInTheDocument();
});

test('Renders 2 input elements', () => {
    render(<Login />);
    const inputElements = screen.getAllByRole('textbox');
    const passwordInputs = screen.getAllByRole('textbox', { hidden: true });
    expect(inputElements.length + passwordInputs.length).toBe(2);
});

test('Renders 2 label elements with text Email and Password', () => {
    render(<Login />);
    const emailInput = screen.getByText(/email/i);
    const passwordInput = screen.getByText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

test('Renders a submit button with the text OK', () => {
    render(<Login />);
    const buttonElement = screen.getByRole('button', { name: 'OK' });
    expect(buttonElement).toBeInTheDocument();
});

test('Submit button is disabled by default', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /ok/i });
    expect(submitButton).toBeDisabled();
});

test('Submit button becomes enabled when email and password are valid', async () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    // Simulate entering valid email and password
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');

    // Button should be enabled now
    expect(submitButton).toBeEnabled();
});
