import { Text, Image, StyleSheet, Pressable } from 'react-native'

import { useScheme } from '../../hooks/colorScheme'
import imagesCourses from '../../constants/list-courses'

interface Props {
	params: { course: string; count: number }
	handleNavigation: (text: string) => void
}

export default function CardCourse({ params, handleNavigation }: Props) {
	const scheme = useScheme()
	const { course, count } = params

	const imageSource =
		imagesCourses.find((ele) => ele.course === course)?.image ??
		require('../../../assets/images/courses/space.png')

	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				{ elevation: pressed ? 2 : 10, opacity: pressed ? 0.7 : 1 },
			]}
			onPress={() => handleNavigation(course)}
		>
			<Image source={imageSource} style={[styles.image]} />
			<Text style={{ color: scheme.text, fontWeight: 'bold' }}>{course}</Text>
			<Text style={{ color: scheme.secondText, fontFamily: 'ComicNeue' }}>
				{count} preguntas
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '40%',
		backgroundColor: 'white',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingBottom: 20,
		borderRadius: 5,
	},
	image: { width: 60, height: 60, transform: [{ translateY: -12 }] },
})
