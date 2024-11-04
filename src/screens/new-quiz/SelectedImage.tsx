import { ImageBackground, Image, Pressable, StyleSheet } from 'react-native'

interface Props {
	imageUrl: string
	navigateToModalSearchImages: () => void
}
export default function SelectedImage({ imageUrl, navigateToModalSearchImages }: Props) {
	return (
		<ImageBackground
			style={styles.container}
			source={{ uri: imageUrl.length > 0 ? imageUrl : undefined }}
		>
			<Pressable
				style={({ pressed }) => [pressed && { opacity: 0.7 }]}
				onPress={navigateToModalSearchImages}
			>
				<Image
					source={require('../../../assets/images/add-image.png')}
					style={{ width: 40, height: 40 }}
				/>
			</Pressable>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		aspectRatio: 2,
		backgroundColor: '#D6D6D6',
		borderRadius: 10,
		boxShadow: '0px 0px 3px gray',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		overflow: 'hidden',
	},
})
