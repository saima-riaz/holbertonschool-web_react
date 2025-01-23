import React, { Component } from 'react'
import WithLogging from '../HOC/WithLogging'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            enableSubmit: false
        };
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value }, this.checkSumbitEnable);   
    };

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value }, this.checkSumbitEnable); // Fixed here
    };

    checkSumbitEnable = () => {
        const { email, password } = this.state;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const isValidEmail = emailRegex.test(email);
        const isValidPassword = password.length >= 8;
        this.setState({
            enableSubmit: isValidEmail && isValidPassword && email !== '' && password !== ''
        });
    };

    handleLoginSubmit = (event) => {
        event.preventDefault();
        this.setState({ isLoggedIn: true });
        console.log('Logged in');
    };

    render () {
        return (
            <div className='App-body'>
                <p>Login to access the full dashboard</p>
                <form onSubmit={this.handleLoginSubmit}>
                    <label htmlFor='email' className='email'>
                        Email:
                        <input 
                            id='email' 
                            type='email' 
                            value={this.state.email}
                            onChange={this.handleChangeEmail} 
                        />
                    </label>
                    <label htmlFor='password' className='password'>
                        Password:
                        <input 
                            id="password" 
                            type='password' 
                            value={this.state.password}
                            onChange={this.handleChangePassword} 
                        />
                    </label>
                    <input 
                        type="submit" 
                        className="label-button" 
                        value="OK" 
                        disabled={!this.state.enableSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default WithLogging(Login);
