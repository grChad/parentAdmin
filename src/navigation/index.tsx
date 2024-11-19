import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { supabase } from '../service/supabase'
import type { Session } from '@supabase/supabase-js'
import type { RootStackParamList } from '../types/navigation'

// import components
import {
	LoginScreen,
	HomeScreen,
	NewQuizScreen,
	ModalSearchImages,
	ModalSelectedCourse,
} from '../screens'
import HeaderRight from '../components/home/HeaderRight'
import { IconMenu } from '../components/icons'

const Stack = createNativeStackNavigator<RootStackParamList>()

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
					headerTitleStyle: { fontFamily: 'Asap' },
				}}
			>
				{session ? (
					<>
						<Stack.Group>
							<Stack.Screen
								name="Home"
								component={HomeScreen}
								options={{
									headerTitleAlign: 'center',
									headerLeft: () => <IconMenu size={24} />,
									headerRight: () => <HeaderRight uriImage={imageUser} />,
								}}
							/>
							<Stack.Screen
								name="NewQuiz"
								component={NewQuizScreen}
								options={{ title: 'Crear Quiz' }}
							/>
						</Stack.Group>
						<Stack.Group
							screenOptions={{ presentation: 'transparentModal', headerShown: false }}
						>
							<Stack.Screen name="ModalSearchImages" component={ModalSearchImages} />
							<Stack.Screen
								name="ModalSelectedCourse"
								component={ModalSelectedCourse}
								options={{
									animation: 'slide_from_bottom',
								}}
							/>
						</Stack.Group>
					</>
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
