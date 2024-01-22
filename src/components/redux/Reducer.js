import { data } from '../data'

const initialState = {
	selected: [],
	quantity: 0
}

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT':
			const isItemInSelected = state.selected.some(
				item => item.id === action.payload.id
			)

			if (!isItemInSelected) {
				return { ...state, selected: [...state.selected, action.payload] }
			}

			return state
		case 'DELETE_SELECTED':
			const updatedSelected = state.selected.filter(
				(item, idx) => idx !== action.payload.productId
			)
			return { ...state, selected: updatedSelected }
		case 'QUANTITY':
			return {
				...state,
				quantity: {
					...state.quantity,
					[action.itemId]: (state.quantity[action.itemId] || 0) + action.payload
				}
			}
		default:
			return state
	}
}
