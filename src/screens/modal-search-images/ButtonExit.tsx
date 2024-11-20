import { Pressable, StyleSheet } from 'react-native'

// state Redux
import { setModalImage } from '../../store/ducks/modalSlices'
import { useAppDispatch } from '../../hooks/store'

// import components
import { IconClose } from '../../components/icons'

interface Props {
	handleReturn: () => void
}
export default function ButtonExit({ handleReturn }: Props) {
	const dispatch = useAppDispatch()
	const handlePress = () => {
		dispatch(setModalImage('')) // reset
		handleReturn()
	}

	return (
		<Pressable onPress={handlePress} style={styles.buttonExit}>
			<IconClose size={20} fill="red" />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	buttonExit: {
		position: 'absolute',
		top: -15,
		right: -15,
		width: 30,
		height: 30,
		borderRadius: 20,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
