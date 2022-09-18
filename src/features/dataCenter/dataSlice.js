import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loginState: {
    useType: '',
    username: '',
    password: ''
  }
};


export const dataSlice = createSlice({
  name: 'dataCenter',
  initialState,

  reducers: {
    LOGIN: (state, action) => {
     state.loginState = action.payload;
     localStorage.setItem("username", action.payload.username)
     localStorage.setItem("userType", action.payload.userType)
    }
  },

});

export const { LOGIN } = dataSlice.actions;
// 
export const logInState = (state) => state.dataCenter.loginState;

export default dataSlice.reducer;
