import { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	TextInput,
	FlatList,
	Image,
} from 'react-native'
import type { ModalSearchImagesNavigationProp } from '../../types/navigation'
import Config from 'react-native-config'

import { IconClose } from '../../components/icons'
import InputSearch from './InputSearch'

interface Props {
	navigation: ModalSearchImagesNavigationProp
}
export default function ModalSearchImages({ navigation }: Props) {
	const [textSearch, setTextSearch] = useState('')
	const [data, setData] = useState([])

	console.log(data)
	const updateTextSearch = (txt: string) => setTextSearch(txt)

	console.log(textSearch)

	const URL = 'https://api.unsplash.com/search/photos'
	const IMAGES_PER_PAGE = 20
	const UNSPLASH_ACCESS_KEY = Config.UNSPLASH_ACCESS_KEY

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (textSearch.length > 0) {
					const response = await fetch(
						`${URL}?query=${textSearch}&page=1&per_page=${IMAGES_PER_PAGE}&orientation=landscape&lang=es&client_id=${UNSPLASH_ACCESS_KEY}`,
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

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Pressable onPress={() => navigation.goBack()} style={styles.buttonExit}>
					<IconClose size={30} fill="red" />
				</Pressable>

				<InputSearch handlePress={updateTextSearch} />

				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Image
							source={{ uri: item.urls.thumb }}
							style={{
								width: 150,
								aspectRatio: 1.5,
								borderRadius: 5,
							}}
						/>
					)}
					contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15 }}
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
		paddingHorizontal: 40,
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
		top: -20,
		right: -20,
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
