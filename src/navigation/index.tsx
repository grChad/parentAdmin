import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../service/supabase'

// import components
import { LoginScreen, HomeScreen } from '../screens'

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
					<Stack.Screen name="Home" component={HomeScreen} />
				) : (
					<Stack.Screen name="Login" component={LoginScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
