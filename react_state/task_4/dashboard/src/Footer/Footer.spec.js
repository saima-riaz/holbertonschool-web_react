import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { newContext } from '../Context/context';

describe('Footer Component', () => {
    test('Renders correct copyright string', () => {
        render(<Footer />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });

    test('Does not display "Contact us" link when user is logged out', () => {
        const mockContext = { user: { isLoggedIn: false } };

        render(
            <newContext.Provider value={mockContext}>
                <Footer />
            </newContext.Provider>
        );

        const contactLink = screen.queryByText(/Contact us/i);
        expect(contactLink).not.toBeInTheDocument();
    });

    test('Displays "Contact us" link when user is logged in', () => {
        const mockContext = { user: { isLoggedIn: true } };

        render(
            <newContext.Provider value={mockContext}>
                <Footer />
            </newContext.Provider>
        );

        const contactLink = screen.getByText(/Contact us/i);
        expect(contactLink).toBeInTheDocument();
        expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
    });
});
