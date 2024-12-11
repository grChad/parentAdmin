import { Text, View, TextInput, StyleSheet } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'

// State Redux
import {
	setFormQuestion,
	setFormCorrectAnswer,
	setFormIncorrectAnswer,
} from '../../store/ducks/formSlices'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

export default function FormQuiz() {
	const scheme = useScheme()
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

	return (
		<View>
			<View style={{ marginBottom: 20, position: 'relative' }}>
				<Text style={styles.label}>Pregunta</Text>
				<TextInput
					placeholder="Escribe aquí"
					value={formQuestion}
					onChangeText={(text) => dispatch(setFormQuestion(text))}
					style={[
						styles.input,
						{ backgroundColor: '#88CBFF55', minHeight: 45 },
						formInvalid && formQuestion.length === 0
							? { borderWidth: 2, borderColor: scheme.notification }
							: { borderWidth: 1, borderColor: scheme.secondText },
					]}
					placeholderTextColor="#999"
					multiline={true}
					numberOfLines={3}
				/>
			</View>

			<View style={{ marginBottom: 20, position: 'relative' }}>
				<Text style={styles.label}>Respuesta Correcta</Text>
				<TextInput
					placeholder="Escribe aquí"
					value={formCorrectAnswer}
					onChangeText={(text) => dispatch(setFormCorrectAnswer(text))}
					style={[
						styles.input,
						{ backgroundColor: '#9AF7A355', height: 45 },

						formInvalid && formCorrectAnswer.length === 0
							? { borderWidth: 2, borderColor: scheme.notification }
							: { borderWidth: 1, borderColor: scheme.secondText },
					]}
					placeholderTextColor="#999"
				/>
			</View>

			<View style={styles.boxAlternatives}>
				<Text style={[styles.label, { left: -1 }]}>Alternativas</Text>

				<TextInput
					placeholder="Primera alternativa"
					value={formIncorrectAnswer1}
					onChangeText={(text) =>
						dispatch(setFormIncorrectAnswer({ order: 'first', replace: text }))
					}
					style={[
						styles.input,
						{ backgroundColor: '#FFFA', height: 45 },
						formInvalid && formIncorrectAnswer1.length === 0
							? { borderWidth: 2, borderColor: scheme.notification }
							: { borderWidth: 2, borderColor: 'transparent' },
					]}
					placeholderTextColor="#999"
				/>
				<TextInput
					placeholder="Segunda Alternativa"
					value={formIncorrectAnswer2}
					onChangeText={(text) =>
						dispatch(setFormIncorrectAnswer({ order: 'second', replace: text }))
					}
					style={[
						styles.input,
						{ backgroundColor: '#FFFA', height: 45 },
						formInvalid && formIncorrectAnswer2.length === 0
							? { borderWidth: 2, borderColor: scheme.notification }
							: { borderWidth: 2, borderColor: 'transparent' },
					]}
					placeholderTextColor="#999"
				/>
				<TextInput
					placeholder="Opcional"
					value={formIncorrectAnswer3}
					onChangeText={(text) =>
						dispatch(setFormIncorrectAnswer({ order: 'third', replace: text }))
					}
					style={[styles.input, { backgroundColor: '#FFFA', height: 45 }]}
					placeholderTextColor="#999"
				/>
				<TextInput
					placeholder="Opcional"
					value={formIncorrectAnswer4}
					onChangeText={(text) =>
						dispatch(setFormIncorrectAnswer({ order: 'fourth', replace: text }))
					}
					style={[styles.input, { backgroundColor: '#FFFA', height: 45 }]}
					placeholderTextColor="#999"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	label: {
		height: 22,
		left: 0,
		top: -11,
		zIndex: 10,
		fontWeight: 'bold',
		fontSize: 12,
		backgroundColor: '#414559',
		color: 'white',
		borderRadius: 15,
		borderBottomLeftRadius: 0,
		paddingHorizontal: 10,
		verticalAlign: 'middle',
		position: 'absolute',
	},
	input: {
		borderRadius: 5,
		paddingHorizontal: 10,
		fontFamily: 'Asap',
		color: '#414559',
	},
	boxAlternatives: {
		padding: 8,
		paddingTop: 20,
		borderRadius: 5,
		rowGap: 10,
		borderWidth: 1,
		backgroundColor: '#FF8D8855',
		borderColor: '#414559',
		position: 'relative',
	},
})
