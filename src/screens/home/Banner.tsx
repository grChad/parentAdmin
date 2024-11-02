import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'

export default function Banner() {
	const scheme = useScheme()

	return (
		<View style={styles.container}>
			<View style={styles.boxLeft}>
				<View style={{ padding: 10 }}>
					<Image
						source={require('../../../assets/images/cup.png')}
						style={styles.imageCup}
					/>
				</View>
				<View>
					<Text style={[styles.text, { color: scheme.secondText }]}>Ranking</Text>
					<Text style={{ color: scheme.primary, fontWeight: 'bold' }}>356</Text>
				</View>
			</View>
			<Pressable style={({ pressed }) => [pressed && { opacity: 0.7 }, styles.boxLeft]}>
				<Image
					source={require('../../../assets/images/added.png')}
					style={styles.addImage}
				/>
				<View style={{ marginLeft: 5 }}>
					<Text style={{ color: scheme.primary, fontWeight: 'bold' }}>Crear</Text>
					<Text style={{ color: scheme.primary, fontWeight: 'bold' }}>Quiz</Text>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around',
		columnGap: 20,
		borderRadius: 5,
		marginHorizontal: 20,
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: '#A1A1A1' }],
		marginVertical: 20,
	},
	boxLeft: { flexDirection: 'row', alignItems: 'center' },
	imageCup: {
		width: 40,
		height: 40,
		transform: [{ rotate: '-15deg' }],
	},
	addImage: { width: 40, height: 40 },
	text: { fontSize: 12, fontWeight: '600' },
})
