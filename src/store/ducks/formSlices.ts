import { createSlice } from '@reduxjs/toolkit'
import type { FormState } from '../../types/store'

const initialState: FormState = {
	formQuestion: '',
	formCorrectAnswer: '',
	formIncorrectAnswer1: '',
	formIncorrectAnswer2: '',
	formIncorrectAnswer3: '',
	formIncorrectAnswer4: '',

	formInvalid: false,
}

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFormQuestion: (state, action: { payload: string }) => {
			state.formQuestion = action.payload
		},
		setFormCorrectAnswer: (state, action: { payload: string }) => {
			state.formCorrectAnswer = action.payload
		},
		setFormIncorrectAnswer: (
			state,
			action: {
				payload: { order: 'first' | 'second' | 'third' | 'fourth'; replace: string }
			},
		) => {
			if (action.payload.order === 'first')
				state.formIncorrectAnswer1 = action.payload.replace
			if (action.payload.order === 'second')
				state.formIncorrectAnswer2 = action.payload.replace
			if (action.payload.order === 'third')
				state.formIncorrectAnswer3 = action.payload.replace
			if (action.payload.order === 'fourth')
				state.formIncorrectAnswer4 = action.payload.replace
		},
		setFormInvalid: (state, action: { payload: 'invalid' | 'valid' }) => {
			if (action.payload === 'invalid') state.formInvalid = true
			if (action.payload === 'valid') state.formInvalid = false
		},
		setFormReset: (state) => {
			state.formQuestion = ''
			state.formCorrectAnswer = ''
			state.formIncorrectAnswer1 = ''
			state.formIncorrectAnswer2 = ''
			state.formIncorrectAnswer3 = ''
			state.formIncorrectAnswer4 = ''
			state.formInvalid = false
		},
	},
})

export const {
	setFormQuestion,
	setFormCorrectAnswer,
	setFormIncorrectAnswer,
	setFormInvalid,
	setFormReset,
} = formSlice.actions

export default formSlice.reducer
