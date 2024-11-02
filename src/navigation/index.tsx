import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { supabase } from '../service/supabase'
import type { Session } from '@supabase/supabase-js'

// import components
import { LoginScreen, HomeScreen } from '../screens'
import HeaderRight from '../components/home/HeaderRight'
import { IconMenu } from '../components/icons'

const Stack = createNativeStackNavigator()

export default function NavigationApp() {
	const [session, setSession] = useState<Session | null>(null)
	const imageUser = session?.user.user_metadata.picture
	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})

		return () => subscription.unsubscribe()
	}, [])

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					statusBarColor: '#fff',
					statusBarStyle: 'dark',
					navigationBarColor: '#fff',
				}}
			>
				{session ? (
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							// title: 'Home',
							headerTitleAlign: 'center',
							headerLeft: () => <IconMenu size={24} />,
							headerRight: () => <HeaderRight uriImage={imageUser} />,
						}}
					/>
				) : (
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{
							headerShown: false,
							statusBarTranslucent: true,
							statusBarColor: 'transparent',
							statusBarStyle: 'light',
							navigationBarHidden: true,
						}}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
