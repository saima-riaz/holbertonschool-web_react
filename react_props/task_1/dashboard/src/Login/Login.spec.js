import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login/Login";

test("Should render 2 input elements", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

test("Should render 2 label elements with the text 'Email' and 'Password'", () => {
    render(<Login />);
    const labelEmail = screen.getByText(/email/i);
    const labelPassword = screen.getByText(/password/i);
    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
});

test("Should render a button with the text 'OK'", () => {
    render(<Login />);
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
});

test("Input elements should get focused when their related label is clicked", () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Click on the email label
    fireEvent.click(emailLabel);
    expect(emailInput).toHaveFocus();

    // Click on the password label
    fireEvent.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
});