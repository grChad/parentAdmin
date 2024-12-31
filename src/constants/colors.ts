import type { Theme } from '@react-navigation/native'

export const DarkTheme: Theme = {
	dark: true,
	colors: {
		primary: '#b098e9',
		background: '#303446',
		card: '#151e27',
		text: 'rgb(229, 229, 231)',
		border: 'rgb(39, 39, 41)',
		notification: 'rgb(255, 69, 58)',
	},
	fonts: {
		regular: {
			fontFamily: 'sans-serif',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'sans-serif-medium',
			fontWeight: 'normal',
		},
		bold: {
			fontFamily: 'sans-serif',
			fontWeight: '600',
		},
		heavy: {
			fontFamily: 'sans-serif',
			fontWeight: '700',
		},
	},
}

export const DefaultTheme: Theme = {
	dark: false,
	colors: {
		primary: '#7750a8',
		background: '#F7F7F7',
		card: 'white',
		text: 'rgb(28, 28, 30)',
		border: 'rgb(216, 216, 216)',
		notification: 'rgb(255, 59, 48)',
	},
	fonts: {
		regular: {
			fontFamily: 'sans-serif',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'sans-serif-medium',
			fontWeight: 'normal',
		},
		bold: {
			fontFamily: 'sans-serif',
			fontWeight: '600',
		},
		heavy: {
			fontFamily: 'sans-serif',
			fontWeight: '700',
		},
	},
}

export const SchemeDarkColor = {
	isDark: true,
	...DarkTheme.colors,
	secondText: '#ACABB3',
	popup: '#484848',
	pressPopup: '#585858',
	light: '#D8D5D1',
	selectPrimary: '#b098e955',
}

export const SchemeLightColor = {
	isDark: false,
	...DefaultTheme.colors,
	secondText: '#5B5961',
	popup: '#F5F5F5',
	pressPopup: '#DFDFDF',
	light: '#FFFFFF',
	selectPrimary: '#b098e966',
}
