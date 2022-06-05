const initialState = {
	favorite_list: [],
};

// function ejemplo(objeto) {
// 	const new_array = favorite_list.filter(item => {
// 		if (item.id !== objeto.id) {
// 			return item;
// 		}
// 	});
// 	return new_array;
// }

// return state.favorite_list.concat({ ...action.payload });
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "add_favorite":
			return { ...state, favorite_list: state.favorite_list.concat({ ...action.payload }) };
		case "delete_favorite": {
			const new_array = state.favorite_list.filter(item => {
				if (item.id_propiedad !== action.payload.id_propiedad) {
					return item;
				}
			});
			return { ...state, favorite_list: new_array };
		}
		case "hola": {
			return action.payload;
		}
		default:
			return state;
	}
};
