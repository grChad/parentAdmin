import { useEffect, useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	FlatList,
	ScrollView,
	Pressable,
	ActivityIndicator,
} from 'react-native'
import type { QuizRouteProp, QuizNavigationProp } from '../../types/navigation'
import { createDatabase } from '../../service/methods'

import CourseList from '../../constants/list-courses'
import CardCourse from './CardCourse'
import SelectedImage from './SelectedImage'

interface Props {
	route: QuizRouteProp
	navigation: QuizNavigationProp
}
export default function NewQuizScreen({ route, navigation }: Props) {
	const { imageUrl } = route.params
	const [showPanelError, setShowPanelError] = useState(false)
	const [loadingSendQuiz, setLoadingSendQuiz] = useState(false)
	const [question, setQuestion] = useState('')
	const [course, setCourse] = useState('')
	const [correctAnswer, setCorrectAnswer] = useState('')
	const [answer2, setAnswer2] = useState('')
	const [answer3, setAnswer3] = useState('')
	const [answer4, setAnswer4] = useState('')
	const [answer5, setAnswer5] = useState('')

	const handleSelectCourse = (txt: string) => setCourse(txt)
	const handleNavigate = () => navigation.navigate('ModalSearchImages')

	const handleSendQuiz = () => {
		if (
			question === '' ||
			course === '' ||
			correctAnswer === '' ||
			answer2 === '' ||
			answer3 === ''
		) {
			setShowPanelError(true)
		} else {
			if (!loadingSendQuiz) {
				createDatabase({
					question,
					course,
					answer_correct: correctAnswer,
					answer_2: answer2,
					answer_3: answer3,
					answer_4: answer4 === '' ? null : answer4,
					answer_5: answer5 === '' ? null : answer5,
					image: imageUrl === '' ? null : imageUrl,
				})
			}
			setLoadingSendQuiz(true)
			setTimeout(() => {
				navigation.navigate('Home')
			}, 2000)
		}
	}

	const listItemsError = () => {
		const no_course = course === '' ? 'Curso,' : ''
		const no_question = question === '' ? 'Pregunta,' : ''
		const no_correct_answer = correctAnswer === '' ? 'Respuesta Correcta,' : ''
		const no_answer2 = answer2 === '' ? 'Segunda respuesta,' : ''
		const no_answer3 = answer3 === '' ? 'Tercera respuesta,' : ''

		return `${no_course} ${no_question} ${no_correct_answer} ${no_answer2} ${no_answer3}`
	}

	useEffect(() => {
		if (
			question.length +
				course.length +
				correctAnswer.length +
				answer2.length +
				answer3.length >
			0
		) {
			setShowPanelError(false)
		}
	}, [question, course, correctAnswer, answer2, answer3])

	return (
		<>
			<View style={{ paddingHorizontal: 20, paddingTop: 20, flex: 1, gap: 20 }}>
				<SelectedImage imageUrl={imageUrl} navigateToModalSearchImages={handleNavigate} />

				<FlatList
					data={CourseList}
					keyExtractor={(item) => item.course}
					renderItem={({ item }) => (
						<CardCourse data={item} selectCourse={handleSelectCourse} course={course} />
					)}
					contentContainerStyle={styles.containerFlatList}
					style={{ maxHeight: 100, height: 100 }}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={{ marginVertical: 10 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pregunta</Text>
						<TextInput
							placeholder="Escribe aquí la pregunta"
							value={question}
							onChangeText={setQuestion}
							style={styles.input}
							multiline={true}
							numberOfLines={3}
						/>
					</View>

					<View style={{ marginBottom: 10 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Respuesta Correcta</Text>
						<TextInput
							placeholder="Escribe aquí"
							value={correctAnswer}
							onChangeText={setCorrectAnswer}
							style={[styles.input, { backgroundColor: '#88CBFF99' }]}
						/>
					</View>
					<View>
						<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Otras respuestas</Text>
						<TextInput
							placeholder="Segunda respuesta (Obligatorio)"
							value={answer2}
							onChangeText={setAnswer2}
							style={[styles.input, { backgroundColor: '#FF8D8855', marginBottom: 8 }]}
						/>
						<TextInput
							placeholder="Tercera respuesta (Obligatorio)"
							value={answer3}
							onChangeText={setAnswer3}
							style={[styles.input, { backgroundColor: '#FF8D8855', marginBottom: 8 }]}
						/>
						<TextInput
							placeholder="Opcional"
							value={answer4}
							onChangeText={setAnswer4}
							style={[styles.input, { backgroundColor: '#FF8D8855', marginBottom: 8 }]}
						/>
						<TextInput
							placeholder="Opcional"
							value={answer5}
							onChangeText={setAnswer5}
							style={[styles.input, { backgroundColor: '#FF8D8855', marginBottom: 8 }]}
						/>
					</View>
					<View style={{ alignItems: 'center' }}>
						<Pressable
							onPress={handleSendQuiz}
							style={({ pressed }) => [pressed && { opacity: 0.7 }, styles.buttonSend]}
						>
							{loadingSendQuiz ? (
								<ActivityIndicator size="large" color="white" />
							) : (
								<Text
									style={{
										fontWeight: 'bold',
										fontSize: 18,
										color: 'white',
										textShadowColor: 'black',
										textShadowRadius: 3,
										marginHorizontal: 1,
									}}
								>
									Guardar Quiz
								</Text>
							)}
						</Pressable>
					</View>
				</ScrollView>
			</View>
			{showPanelError && (
				<View
					style={{
						backgroundColor: 'red',
						padding: 10,
						flexDirection: 'row',
						flexWrap: 'wrap',
					}}
				>
					<Text style={{ color: 'white', textShadowColor: 'black', textShadowRadius: 3 }}>
						Rellena:{' '}
						<Text
							style={{ color: 'white', textShadowColor: 'black', textShadowRadius: 3 }}
						>
							{listItemsError()}
						</Text>
					</Text>
				</View>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	containerFlatList: { alignItems: 'center', columnGap: 20, paddingHorizontal: 3 },
	input: { backgroundColor: '#E5E5E5', borderRadius: 5, paddingHorizontal: 10 },
	buttonSend: {
		backgroundColor: '#4EA8E6',
		marginVertical: 20,
		paddingVertical: 5,
		paddingHorizontal: 20,
		width: 200,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		borderWidth: 1,
		borderColor: '#2A7FB8',
	},
})
