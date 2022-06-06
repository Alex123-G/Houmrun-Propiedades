import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropieades } from "../services/Propieades";
import Propiedad from "./Propiedad.jsx";
import "././Propiedades.css";
const Propiedades = () => {
	const dispatch = useDispatch();
	// Obtniendo las propiedades del state de redux
	const propiedades = useSelector(store => store.propiedades);

	// Use effect que se encargará de simular la peticion a una API para traer todas las propiedades ademas de guardar en nuestro store, esto solo se EJECUTA UNA VEZ.
	useEffect(() => {
		const lista_propiedades = getPropieades();
		dispatch({ type: "list_propiedades", payload: lista_propiedades });
	}, []);

	return (
		<div className="container-propiedades">
			{propiedades.map(propiedad => {
				return <Propiedad propiedad={propiedad} key={propiedad.id}></Propiedad>;
			})}
		</div>
	);
};

export default Propiedades;
