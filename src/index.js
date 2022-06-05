import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import App from "./App";
import { Provider } from "react-redux";
import { reducer } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from "redux";

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//! ADEMAS DE  GUARDAR LAS PROPIEDADES EN EL STORE DE REDUX TAMBIEN TENEMOS QUE GUARDARLO EN EL LOCALSTORAGE PARA QUE AL ACTUALIZAR LA PAGINA	NO SE PIERDA EL ESTADO ,Y ENTONCES AL CARGAR LA PAGINA TENEMOS QUE CARGAR EL ESTADO GLOBAL DE REDUX  CON LOS VALORES DEL LOCALSTORAGE
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
