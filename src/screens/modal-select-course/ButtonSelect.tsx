import { Pressable, StyleSheet, Text } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'

// state Redux
import { setModalCourseDB } from '../../store/ducks/modalSlices'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

interface Props {
	handleReturn: () => void
}
export default function ButtonSelect({ handleReturn }: Props) {
	const modalCourse = useAppSelector((state) => state.modal.modalCourse)
	const dispatch = useAppDispatch()
	const scheme = useScheme()

	const isDisabled = modalCourse.length === 0

	const handlePress = () => {
		dispatch(setModalCourseDB('accepted'))
		handleReturn()
	}

	return (
		<Pressable
			style={({ pressed }) => [
				{ backgroundColor: !modalCourse ? scheme.primary.concat('22') : scheme.primary },
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
	},
	text: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		textShadowColor: '#666',
		textShadowRadius: 1,
	},
})
