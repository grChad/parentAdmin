import { useState } from 'react'
import {
	FlatList,
	StyleSheet,
	Pressable,
	Image,
	View,
	ActivityIndicator,
} from 'react-native'
import type { UnsplashImage } from '../../types/unsplash'

// State Redux
import { setModalImage } from '../../store/ducks/modalSlices'
import { useAppDispatch } from '../../hooks/store'

interface Props {
	data: UnsplashImage[]
}
export default function ListImages({ data }: Props) {
	const [selectedId, setSelectedId] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useAppDispatch()

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => {
						setSelectedId(item.id)
						dispatch(setModalImage(item.urls.small))
					}}
					style={styles.buttonPressable}
				>
					<Image
						source={{ uri: item.urls.thumb }}
						style={[selectedId === item.id && { opacity: 0.5 }, styles.image]}
						onLoadStart={() => setIsLoading(true)}
						onLoadEnd={() => setIsLoading(false)}
					/>

					{isLoading && (
						<View style={styles.boxIndicator}>
							<ActivityIndicator size="large" color="#4EA9E7" />
						</View>
					)}
					{selectedId === item.id && (
						<Image
							source={require('../../../assets/images/check.png')}
							style={styles.imageCheck}
						/>
					)}
				</Pressable>
			)}
			contentContainerStyle={styles.ContainerFlatlist}
			numColumns={2}
			columnWrapperStyle={{ columnGap: 15, justifyContent: 'center' }}
			showsVerticalScrollIndicator={false}
		/>
	)
}

const styles = StyleSheet.create({
	ContainerFlatlist: { alignItems: 'center', rowGap: 15, paddingVertical: 15 },
	buttonPressable: {
		width: 130,
		aspectRatio: 1.5,
		borderRadius: 5,
		overflow: 'hidden',
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: '#A2A2A2' }],
		position: 'relative',
	},
	image: { position: 'absolute', zIndex: 20, width: '100%', height: '100%' },
	boxIndicator: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 10,
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
		zIndex: 30,
	},
})
