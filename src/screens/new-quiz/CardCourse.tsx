import { Pressable, Image, Text } from 'react-native'
import type { ListCourseProps } from '../../constants/list-courses'

interface Props {
	data: ListCourseProps
	selectCourse: (txt: string) => void
	course: string
}
export default function CardCourse({ data, selectCourse, course }: Props) {
	return (
		<Pressable
			onPress={() => selectCourse(data.course)}
			style={[
				course === data.course && { backgroundColor: '#88CBFF' },
				{
					columnGap: 10,
					alignItems: 'center',
					paddingVertical: 3,
					paddingHorizontal: 10,
					boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 3, color: 'gray' }],
					borderRadius: 10,
				},
			]}
		>
			<Image source={data.image} style={{ width: 40, height: 40 }} />
			<Text>{data.course}</Text>
		</Pressable>
	)
}
