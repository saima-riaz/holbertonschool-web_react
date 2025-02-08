import { createSlice } from '@reduxjs/toolkit';

// Initial authentication state
const initialState = {
  user: {
    email: '',
    password: '',
  },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = { email: '', password: '' };
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
