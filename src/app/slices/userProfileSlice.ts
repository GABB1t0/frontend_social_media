import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../../utils/UserLoggedApiResponse'
import { statusRequestApiTypes } from '../../types';
 
export type UserStateProfile = {
    entities?: typeof UserSchema,
    loading: statusRequestApiTypes,
    error?:string
}

const initialState: UserStateProfile = {
    entities : undefined,
    loading:'idle',
    error:undefined
}

const userProfileSlice = createSlice({ 
    name: 'userProfile',
    initialState,
    reducers: {
        addUserProfile: (state, action ) => {
            state.loading = 'succeeded'
            state.entities = action.payload
        },
        removeUserProfile:(state) => {
            state.entities = undefined
            state.loading = 'idle'
        }
    }

})    

export default userProfileSlice.reducer;
export const { addUserProfile, removeUserProfile } = userProfileSlice.actions;