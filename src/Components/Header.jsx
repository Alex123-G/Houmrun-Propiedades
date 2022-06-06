import { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
	const [ishidden, setIshidden] = useState(false);

	//* Obtenemos el state de favoritos para poder listar en la UI
	const favorite_list = useSelector(store => store.favorite_list);

	const toggleFavoriteList = () => {
		setIshidden(!ishidden);
	};

	return (
		<header className="header">
			<h1>Houmrun</h1>
			<div>
				<span className="lista-favoritos" onClick={toggleFavoriteList}>
					Mis favoritos
				</span>

				{ishidden ? (
					<div className="container-favorite-list">
						{favorite_list.map(favorite => (
							<div key={favorite.id} className="favorite-item">
								<img className="favorite-item-img" src={favorite.url_img} alt={favorite.description} />
							</div>
						))}
					</div>
				) : (
					""
				)}
			</div>
		</header>
	);
};

export default Header;
