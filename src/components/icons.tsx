import Svg, { Path } from 'react-native-svg'

interface IconProps {
	size: number
	fill?: string
}
export const IconMenu = ({ size, fill = '#000' }: IconProps) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 448 512">
			<Path
				d="M0 80c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 256c-8.8 0-16-7.2-16-16zM192 400c0 8.8-7.2 16-16 16L16 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l160 0c8.8 0 16 7.2 16 16z"
				fill={fill}
			/>
		</Svg>
	)
}
