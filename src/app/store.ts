import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import sessionSlice from './slices/sessionSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    session: sessionSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch