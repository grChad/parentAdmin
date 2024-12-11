import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'

interface Props {
	handleCreateQuiz: () => void
}
export default function Banner({ handleCreateQuiz }: Props) {
	const scheme = useScheme()

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: scheme.light },
				!scheme.isDark && styles.shadow,
			]}
		>
			<View style={styles.boxLeft}>
				<View style={{ padding: 10 }}>
					<Image
						source={require('../../../assets/images/coin.png')}
						style={styles.imageCup}
					/>
				</View>
				<View>
					<Text style={[styles.text, { color: '#282828' }]}>ThiagoCoins</Text>
					<Text style={{ color: scheme.primary, fontWeight: 'bold' }}>356</Text>
				</View>
			</View>
			<Pressable
				onPress={handleCreateQuiz}
				style={({ pressed }) => [pressed && { opacity: 0.7 }, styles.boxLeft]}
			>
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
		flexDirection: 'row',
		justifyContent: 'space-around',
		columnGap: 20,
		borderRadius: 5,
		marginHorizontal: 20,
		marginVertical: 20,
	},
	shadow: {
		boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: 'silver' }],
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
