import { useState } from 'react'
import { Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// utils
import { createDatabase } from '../../service/methods'
import { useScheme } from '../../hooks/colorScheme'

// store Redux
import { setUpdateQuizCounter } from '../../store/ducks/quizSlices'
import { setFormInvalid } from '../../store/ducks/formSlices'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

export default function HeaderRightNewQuiz() {
	const [loadingSendQuiz, setLoadingSendQuiz] = useState(false)
	const {
		formQuestion,
		formCorrectAnswer,
		formIncorrectAnswer1,
		formIncorrectAnswer2,
		formIncorrectAnswer3,
		formIncorrectAnswer4,
	} = useAppSelector((state) => state.form)
	const { modalCourseDB, modalImageDB } = useAppSelector((state) => state.modal)

	const scheme = useScheme()
	const dispatch = useAppDispatch()
	const navigation = useNavigation()

	const isFormValid =
		modalCourseDB.length > 0 &&
		formQuestion.length > 0 &&
		formCorrectAnswer.length > 0 &&
		formIncorrectAnswer1.length > 0 &&
		formIncorrectAnswer2.length > 0

	const handleSendQuiz = () => {
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
			setTimeout(() => navigation.goBack(), 2000) // Regresar a la pantalla de inicio
		}
	}

	if (isFormValid) {
		return (
			<Pressable
				// FIXME: haspa que estea disponible 'onPress()'
				onPressOut={handleSendQuiz}
				disabled={loadingSendQuiz}
				style={({ pressed }) => [
					{ opacity: pressed ? 0.7 : 1, backgroundColor: scheme.primary },
					styles.containerPress,
				]}
			>
				{loadingSendQuiz ? (
					<ActivityIndicator size="small" color={scheme.popup} />
				) : (
					<Text style={[{ color: 'white' }, styles.text]}>Crear</Text>
				)}
			</Pressable>
		)
	}
	return <></>
}

const styles = StyleSheet.create({
	containerPress: {
		minWidth: 80,
		height: 30,
		borderRadius: 5,
		paddingVertical: 3,
		paddingHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontWeight: 'bold',
		textShadowColor: 'black',
		textShadowRadius: 1,
	},
})
