import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import Header from "./Components/Header";
import Section from "./Components/Section";
import { getPropieades } from "./services/Propieades";
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const lista_propiedades = getPropieades();
		dispatch({ type: "list_propiedades", payload: lista_propiedades });
	}, []);

	return (
		<div className="page-container">
			<Header />
			<Section />
		</div>
	);
}

export default App;

