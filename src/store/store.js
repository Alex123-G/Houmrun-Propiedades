export const reducer = (
	state = {
		propiedades: [],
		favorite_list: [],
	},
	action
) => {
	switch (action.type) {
		case "list_propiedades":
			return { ...state, propiedades: action.payload };

		case "add_favorite":
			// * Cambiando el valor del payload a true cuando lo agregamos al ARREGLO DE FAVORITOS
			const change_value_propiedad = { ...action.payload, isFavorite: true };

			return { ...state, favorite_list: [...state.favorite_list, change_value_propiedad] };

		case "changeIsFavorite":
			// * Esto cambiara el valor del arreglo de LISTA DE las propiedaes y lo que hara es cambiar para poder cambiar de estrella
			const update_propiedades = state.propiedades.map(item => {
				if (item.id === action.payload) {
					return { ...item, isFavorite: !item.isFavorite };
				}
				return item;
			});

			return { ...state, propiedades: update_propiedades };

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
