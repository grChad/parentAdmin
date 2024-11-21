import { ImageBackground, Image, Pressable, StyleSheet, Text, View } from 'react-native'

// state Redux
import { useAppSelector } from '../../hooks/store'

interface Props {
	handleNavigate: () => void
}
export default function SelectedImage({ handleNavigate }: Props) {
	const modalImageDB = useAppSelector((state) => state.modal.modalImageDB)

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.imageBg}
				source={{ uri: modalImageDB ? modalImageDB : undefined }}
			>
				{!modalImageDB && <Text style={styles.text}>Selecciona una imagen</Text>}
				<Pressable
					style={({ pressed }) => [
						pressed && { opacity: 0.7 },
						{ marginBottom: 5, marginRight: 5 },
					]}
					onPress={handleNavigate}
				>
					<Image
						source={require('../../../assets/images/add-image.png')}
						style={{ width: 40, height: 40 }}
					/>
				</Pressable>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { alignItems: 'center', marginVertical: 20 },
	imageBg: {
		width: '100%',
		aspectRatio: 2,
		backgroundColor: '#D6D6D6',
		borderRadius: 10,
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 3, color: 'gray' }],
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		overflow: 'hidden',
	},
	text: {
		fontFamily: 'ComicNeue',
		marginBottom: 10,
		marginRight: 20,
		fontSize: 18,
		color: '#383838',
	},
})
