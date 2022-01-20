import React from 'react';
import './App.scss';
import HeaderComponent from "./components/header/header";
import {BrowserRouter as Router, useLocation} from "react-router-dom";
import RouterConfiguration from "./components/router-configuration/router-configuration";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="container-fluid g-0">
					<RouterConfiguration />
				</div>
			</Router>
		</div>
	);
}

export default App;
