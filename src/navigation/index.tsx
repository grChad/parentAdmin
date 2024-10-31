import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../service/supabase'

// import components
import { LoginScreen, HomeScreen } from '../screens'
import HeaderRight from '../components/home/HeaderRight'

const Stack = createNativeStackNavigator()

export default function NavigationApp() {
	const [session, setSession] = useState<Session | null>(null)
	console.log(session)

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			// dispatch(setUser(session?.user.user_metadata ?? null))
			setSession(session)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			// dispatch(setUser(session?.user.user_metadata ?? null))
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
							title: '',
							headerRight: () => (
								<HeaderRight
									uriImage={
										session?.user.user_metadata.picture ??
										'https://randomuser.me/api/portraits/men/33.jpg'
									}
								/>
							),
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
							navigationBarHidden: true,
						}}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
