import React from 'react';
import PropTypes from 'prop-types';
import WithLogging from '../HOC/WithLogging';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email || '',
            password: props.password || '',
            enableSubmit: false,
        };
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        // Ensure `login` prop exists before calling it
        if (this.props.login) {
            this.props.login(email, password);
        } else {
            console.error('Login function is undefined');
        }
    };

    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    handleChangeEmail = (e) => {
        const email = e.target.value;
        const { password } = this.state;
        this.setState({
            email,
            enableSubmit: this.validateEmail(email) && password.length >= 8,
        });
    };

    handleChangePassword = (e) => {
        const password = e.target.value;
        const { email } = this.state;
        this.setState({
            password,
            enableSubmit: this.validateEmail(email) && password.length >= 8,
        });
    };

    render() {
        const { enableSubmit, email, password } = this.state;
        return (
            <form aria-label="Login form" onSubmit={this.handleLoginSubmit}>
                <div className="App-body">
                    <p>Login to access the full dashboard</p>
                    <div className="form">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                value={email}
                                onChange={this.handleChangeEmail}
                            />
                            {!this.validateEmail(email) && email.length > 0 && (
                                <small style={{ color: 'red' }}>Please enter a valid email address</small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="user_password"
                                id="password"
                                value={password}
                                onChange={this.handleChangePassword}
                            />
                        </div>
                        <input
                            value="OK"
                            type="submit"
                            disabled={!enableSubmit}
                            aria-disabled={!enableSubmit}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    email: PropTypes.string,
    password: PropTypes.string,
};

Login.defaultProps = {
    email: '',
    password: '',
    login: () => console.log('Default login function called'), // Added default function
};

const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;
