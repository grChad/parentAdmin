import { useColorScheme } from 'react-native'
import { DarkColor, LightColor } from '../constants/colors'

export const useScheme = () => {
	const scheme = useColorScheme()
	return scheme === 'dark' ? DarkColor : LightColor
}

export const useTheme = () => {
	const scheme = useColorScheme()

	return scheme === 'dark'
}
