import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login Component with Context", () => {
    it("Calls logIn prop with email and password on form submission", () => {
        const logInMock = jest.fn();
        const { getByLabelText, getByText } = render(<Login login={logInMock} />);

        const emailInput = getByLabelText("Email");
        const passwordInput = getByLabelText("Password");
        const submitButton = getByText("OK");

        // Simulate user entering email and password
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });

        // Ensure the button is enabled before clicking
        expect(submitButton).not.toBeDisabled();

        // Simulate form submission
        fireEvent.click(submitButton);

        // Assert that the mock login function was called with the correct arguments
        expect(logInMock).toHaveBeenCalledWith("test@example.com", "password123");
    });
});
