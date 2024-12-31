import { StyleSheet, View, Alert, Pressable } from 'react-native'
import { IconEdit, IconTrash } from '../../components/icons'
import { deleteMultipleDatabase } from '../../service/methods'

// Store Redux
import { setUpdateQuizCounter } from '../../store/ducks/quizSlices'
import { setSelectedIds } from '../../store/ducks/editSlices'
import { useAppDispatch, useAppSelector } from '../../hooks/store'

import { useScheme } from '../../hooks/colorScheme'

const SIZE = 40

export default function EditHeaderRight() {
	const scheme = useScheme()
	const dispatch = useAppDispatch()
	const selectedIds = useAppSelector((state) => state.edit.selectedIds)
	console.log({ 'Ids seleccionados': selectedIds.length })

	const disabledTrash = selectedIds.length === 0
	const disabledEdit = selectedIds.length === 0 || selectedIds.length > 1

	const onPressDelete = () => {
		Alert.alert(
			'¿Estás seguro?',
			'Se eliminará '.concat(selectedIds.length.toString(), ' elementos'),
			[
				{
					text: 'Cancelar',
					style: 'cancel',
				},
				{
					text: 'Eliminar',
					onPress: () => {
						deleteMultipleDatabase(selectedIds)
						dispatch(setUpdateQuizCounter())
						dispatch(setSelectedIds([])) // clear selected ids
					},
				},
			],
		)
	}

	return (
		<View style={styles.container}>
			<Pressable
				onPressOut={onPressDelete}
				android_ripple={{ radius: SIZE / 2, color: scheme.pressPopup }}
				style={styles.buttonPressable}
			>
				<IconTrash size={25} fill={disabledTrash ? scheme.pressPopup : scheme.text} />
			</Pressable>

			{/* NOTE: falta editar el onPressOut */}
			<Pressable
				onPressOut={() => console.log('press out Edit')}
				android_ripple={{ radius: SIZE / 2, color: scheme.pressPopup }}
				style={styles.buttonPressable}
			>
				<IconEdit size={25} fill={disabledEdit ? scheme.pressPopup : scheme.text} />
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		columnGap: 20,
	},
	buttonPressable: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
