import { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Config from 'react-native-config'
import type { ModalSearchImagesNavigationProp } from '../../types/navigation'
import type { UnsplashImage } from '../../types/unsplash'

// import components
import InputSearch from './InputSearch'
import ButtonSelect from './ButtonSelect'
import ListImages from './ListImages'
import ButtonExit from './ButtonExit'

interface Props {
	navigation: ModalSearchImagesNavigationProp
}
export default function ModalSearchImages({ navigation }: Props) {
	const [textSearch, setTextSearch] = useState('')
	const [data, setData] = useState<UnsplashImage[]>([])

	const updateTextSearch = (txt: string) => setTextSearch(txt)

	const handleReturn = () => navigation.goBack()

	const URL = 'https://api.unsplash.com/search/photos'
	const IMAGES_PER_PAGE = 30
	const UNSPLASH_ACCESS_KEY = Config.UNSPLASH_ACCESS_KEY
	const ORIENTATION = 'landscape'

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (textSearch) {
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

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<ButtonExit handleReturn={handleReturn} />

				<InputSearch handlePress={updateTextSearch} />

				<ButtonSelect handleReturn={handleReturn} />

				<ListImages data={data} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#0004' },
	main: {
		position: 'absolute',
		left: 20,
		right: 20,
		top: 50,
		bottom: 50,
		backgroundColor: 'white',
		borderRadius: 10,
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 10, color: 'dimgray' }],
		padding: 20,
	},
})
