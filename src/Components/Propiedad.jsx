import { useDispatch } from "react-redux";
import "./Propiedad.css";
import favorite from "../icons/favorite.svg";
import selectedFavorite from "../icons/selectedFavorite.svg";

const Propiedad = ({ propiedad }) => {
	const dispatch = useDispatch();

	const add_faviorite = propiedad => {
		dispatch({ type: "add_favorite", payload: propiedad });
		dispatch({ type: "changeIsFavorite", payload: propiedad.id });
	};
	return (
		<div className="container-propiedad">
			<img src={propiedad.url_img} alt={propiedad.description} className="container-propiedad-img" />
			<div className="container-propiedad-detalle">
				<div className="container-propiedad-precio">
					{propiedad.moneda === "dolares" ? <span>${propiedad.precio}</span> : <span>S/{propiedad.precio}</span>}
				</div>
				<span className="container-propiedad-dimensiones">{propiedad.dimensiones}</span>
				<span className="container-propiedad-description">{propiedad.description}</span>
				<span className="container-propiedad-direccion">{propiedad.direccion}</span>
				{propiedad.isFavorite ? (
					<img src={selectedFavorite} alt="favorite" className="favorite-icon" onClick={() => add_faviorite(propiedad)} />
				) : (
					<img src={favorite} alt="favorite" className="favorite-icon" onClick={() => add_faviorite(propiedad)} />
				)}
			</div>
		</div>
	);
};

export default Propiedad;
