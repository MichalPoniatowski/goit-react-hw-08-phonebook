import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  //   isLoading: false,
};

// const handlePending = state => {
//   state.isLoading = true;
// };

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // [register.pending],
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.isLoading = false;
      console.log('TOKEN REGISTER', state.token);
      console.log('STATE REGISTER', state);
    },
    [register.rejected]: handleRejected,

    // [logIn.pending]: handlePending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.isLoading = false;
      console.log('TOKEN LOGIN', state.token);
      console.log('STATE LOGIN', state);
    },
    [logIn.rejected]: handleRejected,

    // [logOut.pending]: handlePending,
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      // state.isLoading = false;
    },
    [logOut.rejected]: handleRejected,

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
