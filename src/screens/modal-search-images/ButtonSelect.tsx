import { Pressable, StyleSheet, Text } from 'react-native'

// state Redux
import { setModalImageDB } from '../../store/ducks/modalSlices'
import { useAppDispatch, useAppSelector } from '../../hooks/store'

interface Props {
	handleReturn: () => void
}
export default function ButtonSelect({ handleReturn }: Props) {
	const modalImage = useAppSelector((state) => state.modal.modalImage)
	const dispatch = useAppDispatch()

	const handlePress = () => {
		dispatch(setModalImageDB('accepted'))
		handleReturn()
	}

	const isDisabled = modalImage.length === 0

	return (
		<Pressable
			style={({ pressed }) => [
				pressed && { opacity: 0.7 },
				styles.containerPress,
				{
					backgroundColor: isDisabled ? '#30A6F655' : '#30A6F6',
				},
			]}
			onPress={handlePress}
			disabled={isDisabled}
		>
			<Text style={[styles.text, { color: isDisabled ? '#C3C3C3' : 'white' }]}>
				Seleccionar Imagen
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	containerPress: {
		backgroundColor: '#4EA9E7',
		marginVertical: 10,
		paddingVertical: 5,
		marginHorizontal: 'auto',
		borderRadius: 5,
	},
	text: {
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		textShadowColor: '#686868',
		textShadowRadius: 2,
	},
})
