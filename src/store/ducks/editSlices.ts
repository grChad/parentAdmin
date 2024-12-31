import { createSlice } from '@reduxjs/toolkit'

interface EditState {
	selectedIds: string[]
}

const initialState: EditState = {
	selectedIds: [],
}

export const editSlice = createSlice({
	name: 'edit',
	initialState,
	reducers: {
		setSelectedIds: (state, action: { payload: string[] }) => {
			state.selectedIds = action.payload
		},
	},
})

export const { setSelectedIds } = editSlice.actions

export default editSlice.reducer
