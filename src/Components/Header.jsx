import { useStore } from "react-redux";
import "./Header.css";
// Aqui va estar el Header don estara a la izquierda el logo y ala derecha el boton de favorito el cual nos lleva a otra pagina donde estaran todos las propiedades(casas) que selecciono el usuario en favoritos

const Header = () => {
	const store = useStore();
	const propiedades = store.getState(state => state.favorite_list);
	console.log(propiedades);
	return (
		<header className="header">
			<h1>Logo</h1>
			{/* {propiedades.map(propiedad => console.log("aqui esta el estado"))} */}

			<div>
				<span>Favorito</span>
			</div>
		</header>
	);
};

export default Header;
