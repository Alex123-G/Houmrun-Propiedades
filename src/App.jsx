import Aside from "./Components/Aside";
import Header from "./Components/Header";
import Section from "./Components/Section";

//! Otra formade Maquetar la pagina sería siendo un grid App con los componentes Heade y Main dentro y dentro del Main estaran el Section y el Aside como sus hijos y le pondremos un flex o un grid

function App() {
	return (
		<div className="page-container">
			<Header />
			<Aside />
			<Section />
		</div>
	);
}

export default App;
