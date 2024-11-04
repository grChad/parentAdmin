import { useState, useEffect } from 'react'
import { View, StyleSheet, Pressable, FlatList, Button } from 'react-native'
import type { ModalSearchImagesNavigationProp } from '../../types/navigation'
import Config from 'react-native-config'
import type { UnsplashImage } from '../../types/unsplash'

import { IconClose } from '../../components/icons'
import InputSearch from './InputSearch'
import CardImage from './CardImage'

interface Props {
	navigation: ModalSearchImagesNavigationProp
}
export default function ModalSearchImages({ navigation }: Props) {
	const [textSearch, setTextSearch] = useState('')
	const [data, setData] = useState<UnsplashImage[]>([])
	const [selectIdImage, setSelectIdImage] = useState('')
	const [selectUrlImage, setSelectUrlImage] = useState<string>('')

	const updateTextSearch = (txt: string) => setTextSearch(txt)

	const URL = 'https://api.unsplash.com/search/photos'
	const IMAGES_PER_PAGE = 30
	const UNSPLASH_ACCESS_KEY = Config.UNSPLASH_ACCESS_KEY
	const ORIENTATION = 'landscape'

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (textSearch.length > 0) {
					const response = await fetch(
						`${URL}?query=${textSearch}&per_page=${IMAGES_PER_PAGE}&orientation=${ORIENTATION}&lang=es&client_id=${UNSPLASH_ACCESS_KEY}`,
					)
					const data = await response.json()
					setData(data.results)
				}
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [textSearch])

	const handleSelectImage = (idImage: string) => {
		setSelectIdImage(idImage)
		setSelectUrlImage(data.find((ele) => ele.id === idImage)?.urls.regular as string)
	}

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Pressable onPress={() => navigation.goBack()} style={styles.buttonExit}>
					<IconClose size={20} fill="red" />
				</Pressable>

				<InputSearch handlePress={updateTextSearch} />

				{selectIdImage.length > 0 && (
					<Button
						title="Seleccionar Imagen"
						onPress={() => navigation.navigate('NewQuiz', { imageUrl: selectUrlImage })}
					/>
				)}

				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<CardImage
							dataImage={item}
							selectIdImage={selectIdImage}
							handleSelectImage={handleSelectImage}
						/>
					)}
					contentContainerStyle={{
						alignItems: 'center',
						rowGap: 15,
						paddingVertical: 15,
					}}
					numColumns={2}
					columnWrapperStyle={{ columnGap: 15, justifyContent: 'center' }}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0004',
		paddingHorizontal: 25,
		paddingVertical: '15%',
	},
	main: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		borderRadius: 10,
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 10, color: 'dimgray' }],
		padding: 20,
		position: 'absolute',
	},
	buttonExit: {
		position: 'absolute',
		top: -15,
		right: -15,
		width: 30,
		height: 30,
		borderRadius: 20,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
