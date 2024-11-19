import { View, StyleSheet, FlatList } from 'react-native'
import CourseList from '../../constants/list-courses'
import type { ModalSearchImagesNavigationProp } from '../../types/navigation'

// import components
import CardCourse from './CardCourse'
import ButtonSelect from './ButtonSelect'
import ButtonExit from './ButtonExit'

interface Props {
	navigation: ModalSearchImagesNavigationProp
}

export default function ModalSelectedCourse({ navigation }: Props) {
	const handleReturn = () => navigation.goBack()

	return (
		<View style={styles.container}>
			<ButtonExit handleReturn={handleReturn} />

			<ButtonSelect handleReturn={handleReturn} />

			<FlatList
				data={CourseList}
				keyExtractor={(item) => item.course}
				renderItem={({ item }) => <CardCourse data={item} />}
				contentContainerStyle={styles.containerFlatList}
				columnWrapperStyle={{ gap: 10 }}
				numColumns={3}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 20,
		maxHeight: 350,
		backgroundColor: 'white',
		paddingTop: 15,
		paddingHorizontal: 15,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 10, color: 'dimgray' }],
	},

	containerFlatList: {
		alignItems: 'center',
		rowGap: 10,
		paddingVertical: 10,
	},
})
