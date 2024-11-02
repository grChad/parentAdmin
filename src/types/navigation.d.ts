import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RouteProp, NavigationProp } from '@react-navigation/native'

export type RootStackParamList = {
	Login: undefined
	Home: undefined
	NewQuiz: undefined
}

export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>
export type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export type QuizRouteProp = RouteProp<RootStackParamList, 'NewQuiz'>
export type QuizNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewQuiz'>
