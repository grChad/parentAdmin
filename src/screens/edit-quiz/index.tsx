import { useState } from 'react'
import { View, Text, FlatList, Pressable, Image, StyleSheet, Alert } from 'react-native'
import type { EditQuizRouteProp } from '../../types/navigation'
import { useScheme } from '../../hooks/colorScheme'
import { deleteDatabase } from '../../service/methods'

// Store Redux
import { setUpdateQuizCounter } from '../../store/ducks/quizSlices'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

import { IconCheck, IconTrash } from '../../components/icons'

interface Props {
	route: EditQuizRouteProp
}
export default function EditQuizScreen({ route }: Props) {
	const { course } = route.params
	const [selectId, setSelectId] = useState('')
	const scheme = useScheme()

	const dataQuiz = useAppSelector((state) => state.quiz.data)
	const dispatch = useAppDispatch()

	let dataCourse = dataQuiz.filter((item) => item.course === course)

	const onPressDelete = () => {
		Alert.alert('¿Estás seguro?', 'Eliminar el Quiz', [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Eliminar',
				onPress: () => {
					deleteDatabase(selectId)
					dispatch(setUpdateQuizCounter())
					setSelectId('')
				},
			},
		])
	}

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					margin: 10,
					padding: 5,
					borderRadius: 10,
					backgroundColor: '#F67A6333',
					boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: 'grey' }],
					flexDirection: 'row',
					borderWidth: 1,
					justifyContent: 'space-evenly',
				}}
			>
				{selectId && (
					<Pressable
						onPress={onPressDelete}
						style={{
							flexDirection: 'row',
							columnGap: 5,
							alignItems: 'center',
							borderWidth: 1,
							backgroundColor: '#77DDF0',
							paddingHorizontal: 5,
							borderRadius: 5,
						}}
					>
						<View>
							<Text style={{ fontFamily: 'ComicNeue' }}>Delete</Text>
							<Text style={{ fontFamily: 'ComicNeue' }}>Item</Text>
						</View>
						<IconTrash size={25} fill="#ED6157" />
					</Pressable>
				)}
			</View>
			<FlatList
				data={dataCourse}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ paddingVertical: 10 }}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Pressable
						onLongPress={() => setSelectId(item.id)}
						style={({ pressed }) => [
							pressed && { opacity: 0.5 },
							{
								margin: 10,
								padding: 5,
								backgroundColor: 'white',
								boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 3, color: 'gray' }],
								borderRadius: 8,
								overflow: 'hidden',
								position: 'relative',
							},
						]}
					>
						{selectId === item.id && (
							<Pressable
								onPress={() => setSelectId('')}
								style={{ position: 'absolute', top: 2, left: 2, zIndex: 20 }}
							>
								<IconCheck size={30} fill="orange" />
							</Pressable>
						)}

						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'stretch',
							}}
						>
							<View style={styles.boxImage}>
								<Image
									source={{ uri: item.image ?? undefined }}
									style={{ width: '100%', minHeight: '100%' }}
								/>
							</View>
							<Text
								numberOfLines={2}
								lineBreakMode="tail"
								style={[styles.question, { color: scheme.text }]}
							>
								{item.question}
							</Text>
						</View>
						<View style={styles.boxAlternatives}>
							<Text style={[styles.alternatives, { backgroundColor: '#90CDF6' }]}>
								{item.answer_correct}
							</Text>
							<Text style={styles.alternatives}>{item.answer_2}</Text>
							<Text style={styles.alternatives}>{item.answer_3}</Text>
							{item.answer_4 && <Text style={styles.alternatives}>{item.answer_4}</Text>}
							{item.answer_5 && <Text style={styles.alternatives}>{item.answer_5}</Text>}
						</View>
					</Pressable>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	boxImage: {
		width: 100,
		height: 50,
		borderRadius: 5,
		overflow: 'hidden',
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 3, color: '#707070' }],
	},
	question: {
		fontFamily: 'Asap',
		fontSize: 16,
		color: '#414559',
		flex: 1,
		marginHorizontal: 15,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	boxAlternatives: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		gap: 10,
		marginTop: 10,
	},
	alternatives: {
		fontFamily: 'ComicNeue',
		paddingVertical: 2,
		paddingHorizontal: 5,
		backgroundColor: '#CDD3F0',
		color: '#4D4D4D',
		borderRadius: 5,
	},
})
