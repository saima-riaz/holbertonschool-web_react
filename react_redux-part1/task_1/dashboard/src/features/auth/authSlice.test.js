import authReducer, { login, logout } from './authSlice';
import { describe, test, expect } from '@jest/globals';

describe('authSlice', () => {
  const initialState = {
    user: { email: '', password: '' },
    isLoggedIn: false,
  };

  test('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle login', () => {
    const userPayload = { email: 'test@example.com', password: 'password123' };
    const expectedState = {
      user: userPayload,
      isLoggedIn: true,
    };

    expect(authReducer(initialState, login(userPayload))).toEqual(expectedState);
  });

  test('should handle logout', () => {
    const loggedInState = {
      user: { email: 'test@example.com', password: 'password123' },
      isLoggedIn: true,
    };

    expect(authReducer(loggedInState, logout())).toEqual(initialState);
  });
});
