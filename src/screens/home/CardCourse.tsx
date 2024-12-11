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
				!scheme.isDark && styles.shadow,
				{
					opacity: pressed ? 0.7 : 1,
					backgroundColor: scheme.light,
				},
			]}
			onPress={() => handleNavigation(course)}
		>
			<Image source={imageSource} style={[styles.image]} />
			<Text style={{ color: '#282828', fontWeight: 'bold' }}>{course}</Text>
			<Text style={{ color: '#686868', fontFamily: 'ComicNeue' }}>{count} preguntas</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '40%',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingBottom: 20,
		borderRadius: 5,
	},
	shadow: {
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: 'silver' }],
	},
	image: { width: 60, height: 60, transform: [{ translateY: -12 }] },
})
