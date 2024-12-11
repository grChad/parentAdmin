import { Pressable, StyleSheet, Text } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'

// state Redux
import { setModalImageDB } from '../../store/ducks/modalSlices'
import { useAppDispatch, useAppSelector } from '../../hooks/store'

interface Props {
	handleReturn: () => void
}
export default function ButtonSelect({ handleReturn }: Props) {
	const modalImage = useAppSelector((state) => state.modal.modalImage)
	const dispatch = useAppDispatch()
	const scheme = useScheme()

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
					backgroundColor: isDisabled ? scheme.primary.concat('33') : scheme.primary,
				},
			]}
			onPress={handlePress}
			disabled={isDisabled}
		>
			<Text style={[styles.text, { color: isDisabled ? scheme.secondText : 'white' }]}>
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
	text: { fontWeight: 'bold', textAlign: 'center', fontSize: 16 },
})
