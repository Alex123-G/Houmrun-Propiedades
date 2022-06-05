
import Propiedades from "./Propiedades";
import "./Section.css";
// Aqui iran la lista de los productos traidos de la BD y con el boton de favoritos el cual se agregaran al estado de redux en los favoritos

const Section = () => {


	return (
		<section className="section">
			<Propiedades></Propiedades>
		</section>
	);
};

export default Section;
