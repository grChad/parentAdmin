import { createSlice } from '@reduxjs/toolkit'

interface QuizState {
	modalCourse: string
	modalCourseDB: string
}

const initialState: QuizState = {
	modalCourse: '',
	modalCourseDB: '',
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModalCourse: (state, action: { payload: string }) => {
			state.modalCourse = action.payload
		},
		setModalCourseDB: (state, action: { payload: 'accepted' | 'reset' }) => {
			if (action.payload === 'reset') {
				state.modalCourse = ''
				state.modalCourseDB = ''
			} else if (action.payload === 'accepted') {
				state.modalCourseDB = state.modalCourse
			} else {
				throw new Error('Modal Course Select: invalid payload')
			}
		},
	},
})

export const { setModalCourse, setModalCourseDB } = modalSlice.actions

export default modalSlice.reducer
