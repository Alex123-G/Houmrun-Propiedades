// const initialState = {
// 	favorite_list: [],
// };

// function ejemplo(objeto) {
// 	const new_array = favorite_list.filter(item => {
// 		if (item.id !== objeto.id) {
// 			return item;
// 		}
// 	});
// 	return new_array;
// }

export const reducer = (
	state = {
		favorite_list: [],
	},
	action
) => {
	switch (action.type) {
		case "add_favorite":
			return { ...state, favorite_list: [...state.favorite_list, action.payload] };

		case "delete_favorite": {
			const new_array = state.favorite_list.filter(item => {
				if (item.id_propiedad !== action.payload.id_propiedad) {
					return item;
				}
				return;
			});
			return { ...state, favorite_list: new_array };
		}
		default:
			return state;
	}
};
