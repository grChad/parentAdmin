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

// TODO: En el futuro, Ver si es posible crear una function 'set' que resetea todo
// y si es conveniente de usarlo, para que sea mas limbio.

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

		setModalImage: (state, action: { payload: string }) => {
			state.modalImage = action.payload
		},
		setModalImageDB: (state, action: { payload: 'accepted' | 'reset' }) => {
			if (action.payload === 'accepted') {
				state.modalImageDB = state.modalImage
				state.modalImage = ''
			} else if (action.payload === 'reset') {
				state.modalImageDB = ''
			} else {
				throw new Error('Modal Image Select: invalid payload')
			}
		},
	},
})

export const { setModalCourse, setModalCourseDB, setModalImage, setModalImageDB } =
	modalSlice.actions

export default modalSlice.reducer
