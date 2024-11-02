import { View, Text, ScrollView } from 'react-native'
import UpdateImage from './UpdateImage'

export default function NewQuiz() {
	return (
		<ScrollView
			style={{ paddingHorizontal: 20, flex: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<UpdateImage />
		</ScrollView>
	)
}
