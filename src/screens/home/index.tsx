import { View, Text, Button } from 'react-native'
import { SignOut } from '../../service/supabase'

export default function HomeScreen() {
	return (
		<View>
			<Text>Home Screen</Text>

			<View style={{ marginVertical: 20 }} />
			<Button title="Sign Out" onPress={SignOut} />
		</View>
	)
}
