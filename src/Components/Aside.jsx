import "./Aside.css";

// Soy el componente Aside donde ira un filtro para mostrar las propiedades
const Aside = () => {
	return (
		<aside className="aside">
			<div className="aside-list">
				<ul className="container-list">
					<li className="list-item">
						<a href="#">
							<span>Por fecha</span>
						</a>
					</li>
					<li className="list-item">
						<a href="#">
							<span> Para rentar o comprar</span>
						</a>
					</li>
					<li className="list-item">
						<a href="#">
							<span>Por precio</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Aside;
