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
			//* Lo que se encarga es cambiar el valor a true a las propiedades que tenga el mismo id de payload del arreglo de propiedades del estado para que se puedda mostrar en la UI la estrellita de favoritos.
			const update_propiedades = state.propiedades.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, isFavorite: true };
				}
				return item;
			});

			//* Cambiando el valor del payload a true cuando lo agregamos el arreglo de favorite_list
			const new_payload = { ...action.payload, isFavorite: true };

			return { ...state, propiedades: update_propiedades, favorite_list: [...state.favorite_list, new_payload] };

		case "delete_favorite": {
			//* Creando nuevo arreglo de lista de favoritos con el action.payload que recibimos
			const nuevo_list_favorite = [...state.favorite_list, action.payload];
			//*  Recorriendo el arreglo de favoritos JUNTO al action.payload enviando despues lo que hacemos que si selecciona el mismo id  lo que haremos es cambiar el valorde isFavorite a false
			const new_array_list = nuevo_list_favorite.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, isFavorite: false };
				}
				return item;
			});

			//* Creando un arreglo el cual va filtrar por el valor de isFavorite ,si es distitno a false es decir que es verdadero se va agrega al nuevo arreglo y ese es que vamos a retornar
			const filter_array_list = new_array_list.filter(item => item.isFavorite !== false);

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