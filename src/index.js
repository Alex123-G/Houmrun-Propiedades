import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import App from "./App";
import { Provider } from "react-redux";
import { reducer } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from "redux";

const store = createStore(reducer);

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
