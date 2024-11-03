import { useState } from 'react'
import { ScrollView, Pressable, ImageBackground, Image, StyleSheet } from 'react-native'
import type { ModalSearchImagesNavigationProp } from '../../types/navigation'

interface Props {
	navigation: ModalSearchImagesNavigationProp
}
export default function NewQuizScreen({ navigation }: Props) {
	const [imageUri, setImageUri] = useState<string | undefined>(undefined)

	return (
		<ScrollView
			style={{ paddingHorizontal: 20, flex: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<ImageBackground style={styles.container} source={{ uri: imageUri }}>
				<Pressable
					style={({ pressed }) => [pressed && { opacity: 0.7 }, styles.button]}
					onPress={() => {
						navigation.navigate('ModalSearchImages')
					}}
				>
					<Image
						source={require('../../../assets/images/add-image.png')}
						style={{ width: 40, height: 40 }}
					/>
				</Pressable>
			</ImageBackground>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginVertical: 20,
		aspectRatio: 2,
		backgroundColor: '#D6D6D6',
		borderRadius: 10,
		boxShadow: '0px 0px 3px gray',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	button: {},
	textInput: {
		borderWidth: 1,
		width: 300,
	},
})
