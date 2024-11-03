import { useState } from 'react'
import { View, TextInput, StyleSheet, Pressable } from 'react-native'

// import components
import { SendICon } from '../../components/icons'

interface Props {
	handlePress: (text: string) => void
}
export default function InputSearch({ handlePress }: Props) {
	const [inputValue, setInputValue] = useState('')

	const handlePresable = () => {
		if (inputValue.length > 0) {
			handlePress(inputValue)
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Buscar imagen"
				style={styles.input}
				value={inputValue}
				onChangeText={setInputValue}
			/>
			<Pressable onPress={handlePresable}>
				<SendICon size={30} fill={inputValue.length > 0 ? '#4DA7E4' : '#bababa'} />
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
		marginBottom: 20,
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#cacaca',
		borderRadius: 50,
		paddingHorizontal: 15,
	},
})
