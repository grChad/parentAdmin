import { createSlice } from '@reduxjs/toolkit'
import type { DataQuizId } from '../../service/quiz'

interface QuizState {
	data: DataQuizId[] | null
	listCourses: {
		course: string
		count: number
	}[]
	updateQuizCounter: number
}

const initialState: QuizState = {
	data: [],
	listCourses: [],
	updateQuizCounter: 0,
}

export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		setDataQuiz: (state, action: { payload: DataQuizId[] }) => {
			state.data = action.payload

			const courseCount: { [key: string]: number } = {}
			for (const quiz of action.payload) {
				courseCount[quiz.course] = (courseCount[quiz.course] || 0) + 1
			}

			state.listCourses = Object.entries(courseCount).map(([course, count]) => ({
				course,
				count,
			}))
		},

		setUpdateQuizCounter: (state) => {
			state.updateQuizCounter = state.updateQuizCounter + 1
		},
	},
})

export const { setDataQuiz, setUpdateQuizCounter } = quizSlice.actions

export default quizSlice.reducer
