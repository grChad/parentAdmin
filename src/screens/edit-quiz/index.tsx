import { View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import type { EditQuizRouteProp } from '../../types/navigation'
import { useScheme } from '../../hooks/colorScheme'

// Store Redux
import { setSelectedIds } from '../../store/ducks/editSlices'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

interface Props {
	route: EditQuizRouteProp
}
export default function EditQuizScreen({ route }: Props) {
	const { course } = route.params
	const scheme = useScheme()
	const dispatch = useAppDispatch()

	const selectedIds = useAppSelector((state) => state.edit.selectedIds)
	const dataQuiz = useAppSelector((state) => state.quiz.data)

	const dataCourse = dataQuiz?.filter((item) => item.course === course)
	const toggleSelectId = (id: string) => {
		if (selectedIds.includes(id)) {
			dispatch(setSelectedIds(selectedIds.filter((item) => item !== id)))
		} else {
			dispatch(setSelectedIds([...selectedIds, id]))
		}
	}

	const alternativeStyle = {
		backgroundColor: scheme.background,
		color: scheme.secondText,
	}

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={dataCourse}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ paddingVertical: 10 }}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Pressable
						onLongPress={() => toggleSelectId(item.id)}
						style={({ pressed }) => [
							pressed && { opacity: 0.7 },
							{
								margin: 10,
								padding: 5,
								backgroundColor: selectedIds.includes(item.id)
									? scheme.selectPrimary
									: scheme.card,
								borderRadius: 8,
								overflow: 'hidden',
								position: 'relative',
							},
						]}
					>
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
								style={[styles.question, { color: scheme.secondText }]}
							>
								{item.question}
							</Text>
						</View>
						<View style={styles.boxAlternatives}>
							<Text
								style={[
									styles.alternatives,
									{ backgroundColor: scheme.primary, color: scheme.background },
								]}
							>
								{item.answer_correct}
							</Text>
							<Text style={[styles.alternatives, alternativeStyle]}>{item.answer_2}</Text>
							<Text style={[styles.alternatives, alternativeStyle]}>{item.answer_3}</Text>
							{item.answer_4 && (
								<Text style={[styles.alternatives, alternativeStyle]}>
									{item.answer_4}
								</Text>
							)}
							{item.answer_5 && (
								<Text style={[styles.alternatives, alternativeStyle]}>
									{item.answer_5}
								</Text>
							)}
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
		borderRadius: 5,
	},
})
