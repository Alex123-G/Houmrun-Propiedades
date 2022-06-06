const initialState = {
	propiedades: [],
	favorite_list: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "list_propiedades":
			return { ...state, propiedades: action.payload };

		case "add_favorite":
			//* Lo que se encarga es cambiar el valor a true a las propiedades que tenga el mismo id de payload del arreglo de propiedades del estado para que se pueda mostrar en la UI la estrellita de favoritos de color amarillo.
			const update_propiedades = state.propiedades.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, isFavorite: true };
				}
				return item;
			});

			//* Cambiando el valor del payload a true para agregarlo al arreglo de favorite_list.
			const new_payload = { ...action.payload, isFavorite: true };

			return { ...state, propiedades: update_propiedades, favorite_list: [...state.favorite_list, new_payload] };

		case "delete_favorite": {
			//* Creando un nuevo arreglo de lista de favoritos junto a la propiedad recibida del payload.
			const nuevo_list_favorite = [...state.favorite_list, action.payload];

			//*  Recorriendo el arreglo de favoritos JUNTO al action.payload y cambiando la propiedad del item isFavorite a false. si tiene el mismo id del payload retornandonos un nuevo arreglo.
			const new_array_list = nuevo_list_favorite.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, isFavorite: false };
				}
				return item;
			});

			//* Creando un arreglo el cual va filtrar por el valor de isFavorite ,si es distitno a false, es decir que es verdadero, se va agregar al nuevo arreglo y ese arreglo va ser el nuevo valor de favorite_list
			const filter_array_list = new_array_list.filter(item => item.isFavorite !== false);

			//* Cambiando el valor del arreglo del state de propiedades cuyo id sea igual al id del payload.
			const update_propiedades = state.propiedades.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, isFavorite: false };
				}
				return item;
			});

			return { ...state, propiedades: update_propiedades, favorite_list: filter_array_list };
		}

		default:
			return state;
	}
};
