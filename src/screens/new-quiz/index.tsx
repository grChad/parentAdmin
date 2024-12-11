import { useEffect } from 'react'
import { ScrollView } from 'react-native'
import type { QuizNavigationProp } from '../../types/navigation'

// State Redux
import { setModalReset } from '../../store/ducks/modalSlices'
import { setFormReset } from '../../store/ducks/formSlices'
import { useAppDispatch } from '../../hooks/store'

// import Components
import SelectedImage from './SelectedImage'
import SelectedCourse from './SelectedCourse'
import FormQuiz from './FormQuiz'
import HeaderRightNewQuiz from '../../components/new-quiz/HeaderRightNewQuiz'

interface Props {
	navigation: QuizNavigationProp
}
export default function NewQuizScreen({ navigation }: Props) {
	const navigateToModalImage = () => navigation.navigate('ModalSearchImages')
	const navigateToModalCourse = () => navigation.navigate('ModalSelectedCourse')
	const navigateReturn = () => navigation.goBack()

	const dispatch = useAppDispatch()

	// biome-ignore lint/correctness/useExhaustiveDependencies(dispatch): no necessary dispatch dependencie
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <HeaderRightNewQuiz />,
		})
		return () => {
			// NOTE: Desmontal Screen `NewQuizScreen`
			dispatch(setModalReset())
			dispatch(setFormReset())
		}
	}, [navigation])

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
			<SelectedImage handleNavigate={navigateToModalImage} />

			<SelectedCourse handleNavigate={navigateToModalCourse} />

			<FormQuiz />
		</ScrollView>
	)
}
