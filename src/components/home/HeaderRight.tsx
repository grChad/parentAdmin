import { Image, StyleSheet, View } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'

export default function HeaderRight({ uriImage }: { uriImage: string }) {
	const scheme = useScheme()

	return (
		<View style={styles.container}>
			<Image
				source={{ uri: uriImage }}
				style={[styles.Logo, { borderColor: scheme.secondText }]}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 10,
	},
	boxLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 3,
		borderWidth: 1,
		paddingVertical: 3,
		paddingHorizontal: 5,
		borderRadius: 20,
	},
	textCoin: { fontSize: 14, fontWeight: 'bold' },
	Logo: { width: 40, height: 40, borderRadius: 20, borderWidth: 1 },
})
