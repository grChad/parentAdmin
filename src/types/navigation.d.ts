import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RouteProp, NavigationProp } from '@react-navigation/native'

export type RootStackParamList = {
	Login: undefined
	Home: undefined
	NewQuiz: undefined
	ModalSearchImages: undefined
	ModalSelectedCourse: undefined
}

export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>
export type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export type QuizRouteProp = RouteProp<RootStackParamList, 'NewQuiz'>
export type QuizNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewQuiz'>

export type ModalSearchImagesRouteProp = RouteProp<
	RootStackParamList,
	'ModalSearchImages'
>
export type ModalSearchImagesNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'ModalSearchImages'
>

export type ModalSelectedCourseRouteProp = RouteProp<
	RootStackParamList,
	'ModalSelectedCourse'
>
export type ModalSelectedCourseNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'ModalSelectedCourse'
>
