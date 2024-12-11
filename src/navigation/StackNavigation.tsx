import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../types/navigation'
import type { Session } from '@supabase/supabase-js'
import { useScheme } from '../hooks/colorScheme'

import {
	LoginScreen,
	HomeScreen,
	NewQuizScreen,
	EditQuizScreen,
	ModalSearchImages,
	ModalSelectedCourse,
} from '../screens'
import HeaderRight from '../components/home/HeaderRight'
import { IconMenu } from '../components/icons'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigation({ session }: { session: Session | null }) {
	const userLogo = session?.user.user_metadata.picture
	const scheme = useScheme()

	return (
		<Stack.Navigator
			screenOptions={{
				statusBarBackgroundColor: scheme.card,
				statusBarStyle: scheme.isDark ? 'light' : 'dark',
				navigationBarColor: scheme.card,
				headerTitleStyle: { fontFamily: 'Asap' },
				headerTitleAlign: 'center',
			}}
		>
			{session ? (
				<>
					<Stack.Group>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{
								headerLeft: () => <IconMenu size={24} fill={scheme.text} />,
								headerRight: () => <HeaderRight uriImage={userLogo} />,
							}}
						/>
						<Stack.Screen
							name="NewQuiz"
							component={NewQuizScreen}
							options={{ title: 'Crear Quiz' }}
						/>
						<Stack.Screen
							name="EditQuiz"
							component={EditQuizScreen}
							options={{ title: 'Editar, Eliminar Quiz' }}
						/>
					</Stack.Group>
					<Stack.Group
						screenOptions={{ presentation: 'transparentModal', headerShown: false }}
					>
						<Stack.Screen
							name="ModalSearchImages"
							component={ModalSearchImages}
							options={{
								statusBarBackgroundColor: 'trasparent',
								statusBarStyle: 'light',
								navigationBarColor: 'transparent',
							}}
						/>
						<Stack.Screen
							name="ModalSelectedCourse"
							component={ModalSelectedCourse}
							options={{
								animation: 'slide_from_bottom',
								navigationBarColor: scheme.popup,
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
						statusBarBackgroundColor: 'transparent',
						statusBarStyle: 'light',
						navigationBarHidden: true,
					}}
				/>
			)}
		</Stack.Navigator>
	)
}
