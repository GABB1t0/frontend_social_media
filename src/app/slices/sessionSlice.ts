import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  correo: string,
  password: string,
    
}
interface LoginState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  user: null,
  loading: false,
  error: null,
};



const sessionSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
      // login request, success, failure
      loginRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      loginSuccess: (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      },
      loginFailure: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      }
    }

})
export default sessionSlice.reducer;
export const { loginRequest, loginSuccess, loginFailure } = sessionSlice.actions;