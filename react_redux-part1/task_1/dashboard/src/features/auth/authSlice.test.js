import authReducer, { login, logout } from './authSlice';
import { describe, test, expect } from '@jest/globals';


const axios = require("axios");
const AxiosMockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
const mock = new AxiosMockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/users").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});

axios.get("/users").then(function (response) {
  console.log(response.data);
});

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
