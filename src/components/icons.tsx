import Svg, { Path } from 'react-native-svg'

interface IconProps {
	size: number
	fill?: string
	stroke?: string
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

export const SendICon = ({ size, fill = '#000', stroke }: IconProps) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 512 512">
			<Path
				d="M57.6 35.8C23.1 20.6-11.3 57.4 6.1 90.9l63 121.2c4.4 8.4 12.6 14.1 22 15.3c0 0 0 0 0 0L266 249.3c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7L91.1 284.6s0 0 0 0c-9.4 1.2-17.6 6.9-22 15.3L6.1 421.1c-17.4 33.5 17 70.2 51.6 55.1L492.9 285.3c25.5-11.2 25.5-47.4 0-58.6L57.6 35.8z"
				strokeWidth={8}
				stroke={stroke}
				fill={fill}
			/>
		</Svg>
	)
}

export const IconCheck = ({ size, fill = '#000' }: IconProps) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 448 512">
			<Path
				d="M32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96zm84.7 148.7c6.2-6.2 16.4-6.2 22.6 0L192 297.4 308.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-128 128c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6z"
				fill="white"
			/>
			<Path
				d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM331.3 203.3l-128 128c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L192 297.4 308.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
				strokeWidth={20}
				stroke={fill}
				fill={fill}
			/>
		</Svg>
	)
}

export const IconTrash = ({ size, fill = '#000' }: IconProps) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 448 512">
			<Path
				d="M163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128l384 0L394.8 467c-1.6 25.3-22.6 45-47.9 45l-245.8 0c-25.3 0-46.3-19.7-47.9-45L32 128zM143 239c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
				strokeWidth={10}
				stroke="black"
				fill={fill}
			/>
		</Svg>
	)
}
