import React, { useContext } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { newContext } from '../Context/context';

export default function Footer() {
    const { user } = useContext(newContext); // Access context values

    return (
        <div className='App-footer'>
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {user.isLoggedIn && ( // Check if a user is logged in
                <p>
                    <a href="/contact">Contact us</a>
                </p>
            )}
        </div>
    );
}
