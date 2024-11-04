import { Pressable, Image, StyleSheet } from 'react-native'
import type { UnsplashImage } from '../../types/unsplash'

interface Props {
	dataImage: UnsplashImage
	selectIdImage: string
	handleSelectImage: (idImage: string) => void
}

export default function CardImage({
	dataImage,
	selectIdImage,
	handleSelectImage,
}: Props) {
	return (
		<Pressable
			onPress={() => handleSelectImage(dataImage.id)}
			style={{ position: 'relative' }}
		>
			<Image
				source={{ uri: dataImage.urls.thumb }}
				style={[selectIdImage === dataImage.id && { opacity: 0.4 }, styles.image]}
			/>
			{selectIdImage === dataImage.id && (
				<Image
					source={require('../../../assets/images/check.png')}
					style={styles.imageCheck}
				/>
			)}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 120,
		aspectRatio: 1.5,
		borderRadius: 5,
	},
	imageCheck: {
		width: 30,
		height: 30,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [{ translateX: -15 }, { translateY: -15 }],
	},
})
