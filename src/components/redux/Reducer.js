import { data } from '../data'

const initialState = {
	selected: [],
	quantity: 0,
	login: [],
	theme: false,
	// count : 0
	favorite: []
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
		case 'FAVORITE':
			const fav = state.favorite.some(item => item.id === action.payload.id)

			if (!fav) {
				return { ...state, favorite: [...state.favorite, action.payload] }
			}

			return state
		case 'DELETE_SELECTED':
			const updatedSelected = state.selected.filter(
				(item, idx) => idx !== action.payload.productId
			)
			return { ...state, selected: updatedSelected }
		case 'UPDATE_QUANTITY':
			return {
				...state,
				quantity: {
					...state.quantity,
					[action.payload.id]: action.payload.quantity
				}
			}

		case 'DELETE_FAVORITE':
			const updateFavorite = state.favorite.filter(
				(item, idx) => idx !== action.payload.productId
			)
			return { ...state, favorite: updateFavorite }

		case 'QUANTITY':
			return {
				...state,
				quantity: {
					...state.quantity,
					[action.itemId]: (state.quantity[action.itemId] || 0) + action.payload
				}
			}
		case 'PLUS':
			return {
				...state,
				quantity: {
					...state.quantity,
					[action.itemId]: (state.quantity[action.itemId] || 0) + action.payload
				}
			}
		case 'THEME':
			return {
				...state,
				theme: action.payload
			}
		case 'MINUS':
			if (state.quantity[action.itemId] > 0) {
				return {
					...state,
					quantity: {
						...state.quantity,
						[action.itemId]:
							(state.quantity[action.itemId] || 0) - action.payload
					}
				}
			}

		// if () {

		// }

		default:
			return state
	}
}
