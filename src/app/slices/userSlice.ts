import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../../utils/UserLoggedApiResponse'
import { statusRequestApiTypes } from '../../types';

export type UserState =  {
    entities?: typeof UserSchema,
    loading: statusRequestApiTypes
}

const initialState: UserState = {
    entities : undefined,
    loading:'idle'
}

const userSlice = createSlice({ 
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action ) => {
            state.entities = action.payload
            state.loading = 'succeeded';
        },
        removeUser:(state) => {
            state.entities = undefined
            state.loading = 'idle'
        }
    }
})    

export default userSlice.reducer;
export const { addUser } = userSlice.actions;