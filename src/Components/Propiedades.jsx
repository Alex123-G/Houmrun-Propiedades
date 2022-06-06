import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropieades } from "../services/Propieades";
import Propiedad from "./Propiedad.jsx";
import "././Propiedades.css";
const Propiedades = () => {
	const dispatch = useDispatch();

	const propiedades = useSelector(store => store.propiedades);
	useEffect(() => {
		const lista_propiedades = getPropieades();
		dispatch({ type: "list_propiedades", payload: lista_propiedades });
	}, []);

	// console.log(propiedades);
	return (
		<div className="container-propiedades">
			{propiedades.map(propiedad => {
				return <Propiedad propiedad={propiedad} key={propiedad.id}></Propiedad>;
			})}
		</div>
	);
};

export default Propiedades;
