import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useScheme } from '../../hooks/colorScheme'
import type { EditQuizNavigationProp } from '../../types/navigation'
import { useNavigation } from '@react-navigation/native'

// Store
import { setSelectedIds } from '../../store/ducks/editSlices'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

// Components
import { IconReturn } from '../icons'

export default function EditHeaderLeft() {
	const scheme = useScheme()
	const navigation = useNavigation<EditQuizNavigationProp>()

	const selectedIds = useAppSelector((state) => state.edit.selectedIds)
	const dispatch = useAppDispatch()

	const showCount = selectedIds.length > 0 ? selectedIds.length : ''

	const handlePressOut = () => {
		if (selectedIds.length > 0) {
			dispatch(setSelectedIds([]))
		}
		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<Pressable
				onPressOut={handlePressOut}
				style={styles.buttonPress}
				android_ripple={{ radius: 20, color: scheme.pressPopup }}
			>
				<IconReturn size={25} fill={scheme.text} />
			</Pressable>
			<Text style={{ color: scheme.text, fontSize: 20, fontWeight: '600' }}>
				{showCount}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		columnGap: 25,
	},
	buttonPress: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
