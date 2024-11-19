import { Pressable, StyleSheet, Text } from 'react-native'

// state Redux
import { setModalCourseDB } from '../../store/ducks/modalSlices'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

interface Props {
	handleReturn: () => void
}
export default function ButtonSelect({ handleReturn }: Props) {
	const modalCourse = useAppSelector((state) => state.modal.modalCourse)
	const dispatch = useAppDispatch()

	const isDisabled = modalCourse.length === 0

	const handlePress = () => {
		dispatch(setModalCourseDB('accepted'))
		handleReturn()
	}

	return (
		<Pressable
			style={({ pressed }) => [
				{ backgroundColor: !modalCourse ? '#30A6F655' : '#30A6F6' },
				pressed && { opacity: 0.5 },
				styles.containerPress,
			]}
			onPress={handlePress}
			disabled={isDisabled}
		>
			<Text style={[{ color: !modalCourse ? '#C3C3C3' : 'white' }, styles.text]}>
				Seleccionar
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	containerPress: {
		alignSelf: 'flex-start',
		marginBottom: 10,
		paddingHorizontal: 10,
		paddingVertical: 2,
		borderRadius: 5,
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: '#ccc' }],
	},
	text: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		textShadowColor: '#666',
		textShadowRadius: 1,
	},
})
