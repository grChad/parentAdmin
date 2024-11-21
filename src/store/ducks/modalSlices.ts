import { createSlice } from '@reduxjs/toolkit'

interface QuizState {
	modalCourse: string
	modalCourseDB: string

	modalImage: string
	modalImageDB: string
}

const initialState: QuizState = {
	modalCourse: '',
	modalCourseDB: '',

	modalImage: '',
	modalImageDB: '',
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
			}
			if (action.payload === 'accepted') {
				state.modalCourseDB = state.modalCourse
			}
		},

		setModalImage: (state, action: { payload: string }) => {
			state.modalImage = action.payload
		},
		setModalImageDB: (state, action: { payload: 'accepted' | 'reset' }) => {
			if (action.payload === 'accepted') {
				state.modalImageDB = state.modalImage
				state.modalImage = ''
			}
			if (action.payload === 'reset') {
				state.modalImageDB = ''
			}
		},
		setModalReset: (state) => {
			state.modalCourse = ''
			state.modalCourseDB = ''
			state.modalImage = ''
			state.modalImageDB = ''
		},
	},
})

export const {
	setModalCourse,
	setModalCourseDB,
	setModalImage,
	setModalImageDB,
	setModalReset,
} = modalSlice.actions

export default modalSlice.reducer
