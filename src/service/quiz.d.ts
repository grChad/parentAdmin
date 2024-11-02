export interface DataQuiz {
	course: string
	question: string
	answer_correct: string
	answer_2: string
	answer_3: string
	answer_4: string | null
	answer_5: string | null
	image: string | null
}

export interface DataQuizId extends DataQuiz {
	id: string
}
