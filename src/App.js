import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Landing from "./components/pages/Landing";
import Event from "./components/pages/Event";
import About from "./components/pages/About";
import Donate from "./components/pages/Donate";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing}/>
				<Route exact path="/events" component={Event}/>
				<Route exact path="/about" component={About}/>
				<Route exact path="/donate" component={Donate}/>
				<Route exact path="/contact" component={Contact}/>
				<Route component={Error}/>
			</Switch>
		</Router>
	);
}


