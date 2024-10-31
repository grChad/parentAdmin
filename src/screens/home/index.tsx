import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
	const navigation = useNavigation()

	return (
		<View>
			<Text>Home Screen</Text>

			<Button title="to Login" onPress={() => navigation.navigate('Login')} />
		</View>
	)
}
