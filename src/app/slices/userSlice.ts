import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'








const initialState = {
    users: 0
}
const userSlice = createSlice({ 
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<any>) => {
            state.users = action.payload
        }

    }

})    


export default userSlice.reducer;
export const { addUser } = userSlice.actions;