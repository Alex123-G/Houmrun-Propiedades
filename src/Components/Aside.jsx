import "./Aside.css";
import plusIcon from "../icons/plusIcon.svg";

// Soy el componente Aside donde ira un filtro para mostrar las propiedades
const Aside = () => {
	return (
		<aside className="aside">
			<div className="aside-list">
				<ul className="container-list">
					<a href="#" className="list-item">
						<span>Por fecha</span>
						<img src={plusIcon} alt="plusIcon" width="10px" height="10px" />
					</a>

					<a href="#" className="list-item">
						<span>Rentar</span>
						<img src={plusIcon} alt="plusIcon" width="10px" height="10px" />
					</a>

					<a href="#" className="list-item">
						<span>Comprar</span>
						<img src={plusIcon} alt="plusIcon" width="10px" height="10px" />
					</a>
					{/* <li>
						<a href="#" className="list-item">
							<span>Por precio</span>
							<img src={plusIcon} alt="plusIcon" width="10px" height="10px" />
						</a>
					</li> */}
				</ul>
			</div>
		</aside>
	);
};

export default Aside;
