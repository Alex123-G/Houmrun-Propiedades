import { useEffect } from "react";
import { useState } from "react";
import { getPropieades } from "../services/Propieades";
import Propiedad from "./Propiedad.jsx";
import "././Propiedades.css";
const Propiedades = () => {
	const [propiedades, setPropiedades] = useState([]);

	useEffect(() => {
		const lista_propiedades = getPropieades();
		setPropiedades(lista_propiedades);
	}, []);

	return (
		<div className="container-propiedades">
			{propiedades.map(propiedad => {
				return <Propiedad propiedad={propiedad} key={propiedad.description}></Propiedad>;
			})}
		</div>
	);
};

export default Propiedades;
