import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",

    initialState: {
        name:"James",
        email:"james@gmail.com",
        password:"Enter password"
    },
      reducers:{
          update: (state, action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
          },
          remove: (state) =>{
            state.name = null;
          },
      },
});
export const { update, remove } = userSlice.actions;
export default userSlice.reducer;