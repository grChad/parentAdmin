export enum Courses {
	chemistry = 'Química',
	maths = 'Matemáticas',
	english = 'Inglés',
	philosophy = 'Filosofía',
}

const imagesCourses = [
	{
		course: Courses.chemistry,
		image: require('../../assets/images/courses/chemistry.png'),
	},
	{
		course: Courses.maths,
		image: require('../../assets/images/courses/maths.png'),
	},
	{
		course: Courses.english,
		image: require('../../assets/images/courses/english.png'),
	},
	{
		course: Courses.philosophy,
		image: require('../../assets/images/courses/philosopher.png'),
	},
]

export default imagesCourses
