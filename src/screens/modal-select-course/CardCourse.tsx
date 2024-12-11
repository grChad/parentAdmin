import { Pressable, Image, View, Text, StyleSheet } from 'react-native'
import type { ListCourseProps } from '../../constants/list-courses'
import { useScheme } from '../../hooks/colorScheme'

// state Redux
import { setModalCourse } from '../../store/ducks/modalSlices'
import { useAppDispatch, useAppSelector } from '../../hooks/store'

interface Props {
	data: ListCourseProps
}
export default function CardCourse({ data }: Props) {
	const { modalCourse } = useAppSelector((state) => state.modal)
	const dispatch = useAppDispatch()
	const scheme = useScheme()

	const hasCourse = modalCourse === data.course

	const handlePress = () => dispatch(setModalCourse(data.course))

	return (
		<View style={{ position: 'relative' }}>
			<Pressable
				onPressIn={handlePress}
				style={[
					styles.containerPress,
					{ backgroundColor: scheme.light, borderColor: scheme.pressPopup },
					hasCourse && {
						backgroundColor: scheme.primary.concat('22'),
						// opacity: 0.5,
						borderColor: scheme.primary,
					},
				]}
			>
				<View style={{ width: 40, height: 40 }}>
					<Image source={data.image} style={{ width: '100%', height: '100%' }} />
				</View>
				<Text>{data.course}</Text>
			</Pressable>

			{hasCourse && (
				<View style={styles.boxCheck}>
					<Image
						source={require('../../../assets/images/check.png')}
						style={{ width: 30, height: 30 }}
					/>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	containerPress: {
		columnGap: 10,
		alignItems: 'center',
		paddingVertical: 3,
		paddingHorizontal: 10,
		borderRadius: 10,
		position: 'relative',
		borderWidth: 1,
	},
	boxCheck: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
