import { View, Text, FlatList } from 'react-native'
import type { EditQuizRouteProp } from '../../types/navigation'

// Store Redux
import { useAppSelector } from '../../hooks/store'

interface Props {
	route: EditQuizRouteProp
}
export default function EditQuizScreen({ route }: Props) {
	const { course } = route.params
	console.log(course)
	const dataQuiz = useAppSelector((state) => state.quiz.data)

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					height: 50,
					margin: 10,
					borderRadius: 10,
					backgroundColor: '#F67A63',
					boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: 'grey' }],
				}}
			/>
			<FlatList
				data={dataQuiz}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Text>{item.course}</Text>}
			/>
		</View>
	)
}
