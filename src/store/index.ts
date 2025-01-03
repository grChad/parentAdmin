import { configureStore } from '@reduxjs/toolkit'
import QuizReducer from './ducks/quizSlices'
import ModalReducer from './ducks/modalSlices'
import FormReducer from './ducks/formSlices'
import EditReducer from './ducks/editSlices'

export const store = configureStore({
	reducer: {
		quiz: QuizReducer,
		modal: ModalReducer,
		form: FormReducer,
		edit: EditReducer,
	},
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
