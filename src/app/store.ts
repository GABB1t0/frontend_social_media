import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice, { UserState} from './slices/userSlice'
import sessionSlice from './slices/sessionSlice'
import userProfileSlice, {UserStateProfile} from './slices/userProfileSlice'

type AppState = {
  user: UserState,
  userProfile:UserStateProfile
}

export type RootState = AppState;

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice,
    userProfile:userProfileSlice,
    session: sessionSlice
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch