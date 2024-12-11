import { useState } from 'react'
import { View, TextInput, StyleSheet, Pressable, Keyboard } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'

// import components
import { SendICon } from '../../components/icons'

interface Props {
	handlePress: (text: string) => void
}
export default function InputSearch({ handlePress }: Props) {
	const scheme = useScheme()
	const [isFocus, setIsFocus] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const handlePresable = () => {
		Keyboard.dismiss() // oculta el teclado

		handlePress(inputValue)
	}

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Buscar imagen"
				style={[
					styles.input,
					{
						borderColor: isFocus ? scheme.secondText : scheme.pressPopup,
						color: scheme.text,
					},
				]}
				placeholderTextColor={scheme.secondText.concat('99')}
				value={inputValue}
				onChangeText={setInputValue}
				onFocus={() => setIsFocus(true)}
			/>

			<Pressable
				onPress={handlePresable}
				disabled={inputValue.length === 0}
				style={({ pressed }) => [pressed && { opacity: 0.7 }, styles.buttonPress]}
			>
				<SendICon
					size={25}
					fill={inputValue ? scheme.primary : scheme.primary.concat('44')}
					stroke={scheme.secondText}
				/>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		columnGap: 10,
		marginBottom: 10,
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#cacaca',
		borderRadius: 50,
		paddingHorizontal: 15,
		fontFamily: 'ComicNeue',
	},
	buttonPress: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
