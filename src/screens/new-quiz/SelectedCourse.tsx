import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'
import ListCourses from '../../constants/list-courses'

// State Redux
import { useAppSelector } from '../../hooks/store'

const height_image = 40

interface Props {
	handleNavigate: () => void
}
export default function SelectedCourse({ handleNavigate }: Props) {
	const scheme = useScheme()
	const modalCourseDB = useAppSelector((state) => state.modal.modalCourseDB)
	const formInvalid = useAppSelector((state) => state.form.formInvalid)

	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => [
					styles.buttonPress,
					pressed && { opacity: 0.5 },
					formInvalid && modalCourseDB.length === 0
						? { borderWidth: 2, borderColor: scheme.error }
						: { borderWidth: 2, borderColor: 'transparent' },
				]}
				onPress={handleNavigate}
			>
				{modalCourseDB ? (
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.textButton} numberOfLines={1} ellipsizeMode="tail">
							{modalCourseDB}
						</Text>
						<Image
							style={{ width: height_image, height: height_image }}
							source={ListCourses.find((ele) => ele.course === modalCourseDB)?.image}
						/>
					</View>
				) : (
					<Text style={styles.textButton}>Seleccionar Curso</Text>
				)}
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		height: height_image + 4,
		marginBottom: 20,
	},
	buttonPress: {
		height: '100%',
		justifyContent: 'center',
		backgroundColor: 'white',
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 3, color: '#555' }],
		borderRadius: 5,
		padding: 2,
	},
	textButton: {
		fontWeight: 'bold',
		maxWidth: 250,
		fontSize: 18,
		color: '#4DA5E1',
		textAlign: 'center',
		marginVertical: 5,
		marginHorizontal: 10,
		textShadowColor: 'black',
		textShadowRadius: 1,
	},
})
