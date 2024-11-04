import { useState } from 'react'
import { Pressable, Image, StyleSheet, ActivityIndicator, View } from 'react-native'
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
	const [isLoading, setIsLoading] = useState(false)

	return (
		<Pressable onPress={() => handleSelectImage(dataImage.id)} style={styles.container}>
			<Image
				source={{ uri: dataImage.urls.thumb }}
				style={[selectIdImage === dataImage.id && { opacity: 0.4 }, styles.image]}
				onLoadStart={() => setIsLoading(true)}
				onLoadEnd={() => setIsLoading(false)}
			/>

			{isLoading && (
				<View style={styles.boxIndicator}>
					<ActivityIndicator size="large" color="#4EA9E7" />
				</View>
			)}
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
	container: {
		width: 130,
		aspectRatio: 1.5,
		borderRadius: 5,
		position: 'relative',
		overflow: 'hidden',
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: '#A2A2A2' }],
	},
	image: { width: '100%', height: '100%' },
	boxIndicator: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
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
