import { Pressable, StyleSheet } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'

// state Redux
import { setModalCourse } from '../../store/ducks/modalSlices'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

// import components
import { IconClose } from '../../components/icons'

interface Props {
	handleReturn: () => void
}
export default function ButtonExit({ handleReturn }: Props) {
	const { modalCourseDB } = useAppSelector((state) => state.modal)
	const dispatch = useAppDispatch()
	const scheme = useScheme()

	const handlePress = () => {
		handleReturn()

		// Despues de salir, 'modalCourse' se iguala a 'modalCourseDB'
		// para que mantenga el mismo nombre del curso seleccionado
		dispatch(setModalCourse(modalCourseDB))
	}

	return (
		<Pressable
			onPress={handlePress}
			style={styles.containerPres}
			android_ripple={{ radius: 20 }}
		>
			<IconClose size={20} fill={scheme.primary} />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	containerPres: {
		position: 'absolute',
		top: 0,
		zIndex: 50,
		right: 0,
		width: 45,
		height: 45,
		borderRadius: 30,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
