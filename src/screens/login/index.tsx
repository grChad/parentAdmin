import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import ButtonSignIn from './ButtonSignIn'

export default function LoginScreen() {
	return (
		<ImageBackground
			source={require('../../../assets/images/bg-login.webp')}
			style={styles.container}
		>
			<View>
				<Text style={styles.title}>Parent Admin</Text>
				<Text style={styles.subtitle}>
					Aplicación para administrar las actividades educativas de los niños
				</Text>
			</View>

			<ButtonSignIn />
		</ImageBackground>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		padding: 20,
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff',
		textShadowColor: '#000',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
		marginBottom: 20,
	},
	subtitle: {
		textAlign: 'center',
		fontSize: 16,
		color: '#fff',
		backgroundColor: '#292929',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 10,
		boxShadow: [{ offsetX: 0, offsetY: 2, blurRadius: 10, color: 'gray' }],
	},
})
