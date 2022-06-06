import { useState } from "react";
import { useSelector, useStore } from "react-redux";
import "./Header.css";
// Aqui va estar el Header don estara a la izquierda el logo y ala derecha el boton de favorito el cual nos lleva a otra pagina donde estaran todos las propiedades(casas) que selecciono el usuario en favoritos

const Header = () => {
	const [ishidden, setIshidden] = useState(false);
	//* Obtenemos el state de favoritos para poder listar en la UI
	const favorite_list = useSelector(store => store.favorite_list);
	const mostrar_favoritos = () => {
		setIshidden(!ishidden);
	};
	return (
		<header className="header">
			<h1>Houmrun</h1>
			<div>
				<span className="lista-favoritos" onClick={mostrar_favoritos}>
					Mis favoritos
				</span>
			</div>
			{/* {favorite_list.map(favorite => (
				<div key={favorite.id}>{favorite.dimensiones}</div>
			))} */}
		</header>
	);
};

export default Header;
