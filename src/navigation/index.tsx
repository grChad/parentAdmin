import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen, HomeScreen } from '../screens'

const Stack = createNativeStackNavigator()

export default function NavigationApp() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					statusBarColor: '#fff',
					statusBarStyle: 'dark',
					navigationBarColor: '#fff',
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
