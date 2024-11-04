import { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { supabase } from '../../service/supabase'
import { useAppDispatch } from '../../hooks/store'
import { setDataQuiz } from '../../store/ducks/quizSlices'
import type { QuizNavigationProp } from '../../types/navigation'

// components
import CardCourse from './CardCourse'
import Banner from './Banner'

type ListCourses = {
	course: string
	count: number
}

export default function HomeScreen({ navigation }: { navigation: QuizNavigationProp }) {
	// const [updateQuiz, setUpdateQuiz] = useState(0)
	const [listCourses, setListCourses] = useState<ListCourses[]>([])
	const dispatch = useAppDispatch()

	const handleCreateQuiz = () => navigation.navigate('NewQuiz', { imageUrl: '' })

	useEffect(() => {
		const getDataQuiz = async () => {
			try {
				const { data, error } = await supabase.from('quiz').select()
				if (error) {
					throw error
				}
				setListCourses(() => {
					const courseCount: { [key: string]: number } = {}
					for (const quiz of data) {
						courseCount[quiz.course] = (courseCount[quiz.course] || 0) + 1
					}

					return Object.entries(courseCount).map(([course, count]) => ({ course, count }))
				})
				dispatch(setDataQuiz(data))
			} catch (error) {
				console.log({ 'getDatabase error': error })
			}
		}
		getDataQuiz()
	}, [])
	// }, [updateQuiz])

	return (
		<View style={{ flex: 1 }}>
			<Banner handleCreateQuiz={handleCreateQuiz} />

			<FlatList
				data={listCourses}
				keyExtractor={(item) => item.course}
				renderItem={({ item }) => <CardCourse params={item} />}
				contentContainerStyle={{ alignItems: 'center', rowGap: 20, paddingTop: 15 }}
				numColumns={2}
				columnWrapperStyle={{ columnGap: 15, justifyContent: 'center' }}
			/>
		</View>
	)
}
