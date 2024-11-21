import { useState } from 'react'
import { Text, View, Pressable, ActivityIndicator, StyleSheet } from 'react-native'
import { createDatabase } from '../../service/methods'

// store Redux
import { setUpdateQuizCounter } from '../../store/ducks/quizSlices'
import { setFormInvalid } from '../../store/ducks/formSlices'
import { useAppDispatch, useAppSelector } from '../../hooks/store'

interface Props {
	handleNavigate: () => void
}
export default function ButtonSend({ handleNavigate }: Props) {
	const [loadingSendQuiz, setLoadingSendQuiz] = useState(false)

	const { modalImageDB, modalCourseDB } = useAppSelector((state) => state.modal)
	const {
		formQuestion,
		formCorrectAnswer,
		formIncorrectAnswer1,
		formIncorrectAnswer2,
		formIncorrectAnswer3,
		formIncorrectAnswer4,
		formInvalid,
	} = useAppSelector((state) => state.form)
	const dispatch = useAppDispatch()

	const isFormValid =
		modalCourseDB.length > 0 &&
		formQuestion.length > 0 &&
		formCorrectAnswer.length > 0 &&
		formIncorrectAnswer1.length > 0 &&
		formIncorrectAnswer2.length > 0

	// false === false || true === true, para mostrar el Button
	const buttonActive = formInvalid === isFormValid

	const handleSendQuiz = () => {
		console.log('Presionar send')
		if (!isFormValid) {
			dispatch(setFormInvalid('invalid'))
		} else {
			if (!loadingSendQuiz) {
				createDatabase({
					course: modalCourseDB,
					question: formQuestion,
					answer_correct: formCorrectAnswer,
					answer_2: formIncorrectAnswer1,
					answer_3: formIncorrectAnswer2,
					answer_4: formIncorrectAnswer3 ? formIncorrectAnswer3 : null,
					answer_5: formIncorrectAnswer4 ? formIncorrectAnswer4 : null,
					image: modalImageDB ? modalImageDB : null,
				})
			}

			setLoadingSendQuiz(true) // indicador de carga
			dispatch(setUpdateQuizCounter()) // para actualizar el contador de quizzes
			setTimeout(() => handleNavigate(), 2000)
		}
	}

	return (
		<View style={{ alignItems: 'center' }}>
			<Pressable
				onPress={handleSendQuiz}
				style={({ pressed }) => [
					pressed && { opacity: 0.7 },
					styles.buttonSend,
					{
						backgroundColor: buttonActive ? '#4EA8E6' : '#4EA8E644',
						borderColor: buttonActive ? '#2A7FB8' : '#2A7FB855',
					},
				]}
				// buttonActive -> false === false || true === true -> true
				disabled={!buttonActive}
			>
				{loadingSendQuiz ? (
					<ActivityIndicator size="large" color="white" />
				) : (
					<Text style={[styles.text, { color: buttonActive ? 'white' : 'silver' }]}>
						Guardar Quiz
					</Text>
				)}
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonSend: {
		marginVertical: 20,
		paddingVertical: 5,
		paddingHorizontal: 20,
		width: 200,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		borderWidth: 1,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		textShadowColor: '#686868',
		textShadowRadius: 1,
		marginHorizontal: 1,
	},
})
