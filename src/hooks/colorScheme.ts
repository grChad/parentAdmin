import { useColorScheme } from 'react-native'
import {
	SchemeDarkColor,
	SchemeLightColor,
	DarkTheme,
	DefaultTheme,
} from '../constants/colors'

export const useScheme = () => {
	const theme = useColorScheme()
	return theme === 'dark' ? SchemeDarkColor : SchemeLightColor
}

export const useThemeNavigation = () => {
	const theme = useColorScheme()
	return theme === 'dark' ? DarkTheme : DefaultTheme
}
