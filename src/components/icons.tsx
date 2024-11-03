import Svg, { Path } from 'react-native-svg'

interface IconProps {
	size: number
	fill?: string
}

export const IconMenu = ({ size, fill = '#000' }: IconProps) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 384 512">
			<Path
				d="M0 80c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 256c-8.8 0-16-7.2-16-16zM192 400c0 8.8-7.2 16-16 16L16 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l160 0c8.8 0 16 7.2 16 16z"
				fill={fill}
			/>
		</Svg>
	)
}

export const IconClose = ({ size, fill = '#000' }: IconProps) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 384 512">
			<Path
				d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"
				fill={fill}
			/>
		</Svg>
	)
}

export const SendICon = ({ size, fill = '#000' }: IconProps) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 512 512">
			<Path
				d="M57.6 35.8C23.1 20.6-11.3 57.4 6.1 90.9l63 121.2c4.4 8.4 12.6 14.1 22 15.3c0 0 0 0 0 0L266 249.3c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7L91.1 284.6s0 0 0 0c-9.4 1.2-17.6 6.9-22 15.3L6.1 421.1c-17.4 33.5 17 70.2 51.6 55.1L492.9 285.3c25.5-11.2 25.5-47.4 0-58.6L57.6 35.8z"
				strokeWidth={8}
				stroke="black"
				fill={fill}
			/>
		</Svg>
	)
}
