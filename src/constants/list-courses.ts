import type { ImageSourcePropType } from 'react-native'

export enum Courses {
	chemistry = 'Química',
	maths = 'Matemáticas',
	english = 'Inglés',
	philosophy = 'Filosofía',
	religion = 'Religión',
	literature = 'Literatura',
	history = 'Historia',
	biology = 'Biología',
	physics = 'Física',
	geography = 'Geografía',
	art = 'Arte',
	civic_and_etic = 'Civica y Etica',
	informatics = 'Informatica',
	business = 'Negocios',
}

export type ListCourseProps = {
	course: string
	image: ImageSourcePropType
}
const imagesCourses: ListCourseProps[] = [
	{
		course: Courses.chemistry,
		image: require('../../../assets/images/courses/chemistry.png'),
	},
	{
		course: Courses.maths,
		image: require('../../../assets/images/courses/maths.png'),
	},
	{
		course: Courses.english,
		image: require('../../../assets/images/courses/english.png'),
	},
	{
		course: Courses.philosophy,
		image: require('../../../assets/images/courses/philosopher.png'),
	},
	{
		course: Courses.religion,
		image: require('../../../assets/images/courses/pray.png'),
	},
	{
		course: Courses.literature,
		image: require('../../../assets/images/courses/shakespeare.png'),
	},
	{
		course: Courses.history,
		image: require('../../../assets/images/courses/evolution.png'),
	},
	{
		course: Courses.biology,
		image: require('../../../assets/images/courses/adn.png'),
	},
	{
		course: Courses.physics,
		image: require('../../../assets/images/courses/atom.png'),
	},
	{
		course: Courses.geography,
		image: require('../../../assets/images/courses/geography.png'),
	},
	{
		course: Courses.art,
		image: require('../../../assets/images/courses/art.png'),
	},
	{
		course: Courses.civic_and_etic,
		image: require('../../../assets/images/courses/civic.png'),
	},
	{
		course: Courses.informatics,
		image: require('../../../assets/images/courses/programing.png'),
	},
	{
		course: Courses.business,
		image: require('../../../assets/images/courses/briefcase.png'),
	},
]

export default imagesCourses
