import { useState } from 'react'
import { StyleSheet, Pressable, Image, ImageBackground, TextInput } from 'react-native'

export default function UpdateImage() {
	const [imageUri, setImageUri] = useState<string | undefined>(undefined)
	const [showInput, setShowInput] = useState(false)

	return (
		<ImageBackground style={styles.container} source={{ uri: imageUri }}>
			<Pressable
				style={({ pressed }) => [pressed && { opacity: 0.7 }, styles.button]}
				onPress={() => {
					setShowInput(!showInput)
				}}
			>
				{showInput ? (
					<TextInput
						placeholder="Image URL"
						value={imageUri}
						onChangeText={setImageUri}
						style={styles.textInput}
					/>
				) : (
					<Image
						source={require('../../../assets/images/add-image.png')}
						style={{ width: 40, height: 40 }}
					/>
				)}
			</Pressable>
		</ImageBackground>
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
