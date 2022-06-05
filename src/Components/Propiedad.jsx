import "./Propiedad.css";
import favorite from "../icons/favorite.svg";
import { useDispatch, useStore } from "react-redux";

const Propiedad = ({ propiedad }) => {
	const dispatch = useDispatch();
	const store = useStore();
	const propiedades = store.getState();
	// const favorite_list = propiedades.favorite_list;

	const add_faviorite = propiedad => {
		//* Aqui vamos a llamar a dispatch para modifcar el estado global de los favoritos, de esta forma cada vez que se seleccione el boton de favorito lo hara es agregar la propiedad al state global.
		dispatch({ type: "add_favorite", payload: propiedad });
	};

	return (
		<div className="container-propiedad">
			<img src={propiedad.url_img} alt={propiedad.description} className="container-propiedad-img" />
			<div className="container-propiedad-detalle">
				<div className="container-propiedad-precio">
					{propiedad.moneda === "dolares" ? <span>${propiedad.precio}</span> : <span>S/{propiedad.precio}</span>}
				</div>
				<span className="container-propiedad-description">{propiedad.description}</span>
				<span className="container-propiedad-dimensiones">{propiedad.dimensiones}</span>
				<span className="container-propiedad-direccion">{propiedad.direccion}</span>
				<img src={favorite} alt="favorite" className="favorite-icon" onClick={() => add_faviorite(propiedad)} />
			</div>
		</div>
	);
};

export default Propiedad;
