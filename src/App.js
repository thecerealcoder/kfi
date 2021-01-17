import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={()=> <div>Landing</div>}/>
				<Route path="/events" render={()=> <div>Events</div>}/>
				<Route path="/about" render={()=> <div>About</div>}/>
				<Route path="/donate" render={()=> <div>Donate</div>}/>
				<Route path="/contact" render={()=> <div>Contact</div>}/>
				<Route render={()=><div>404 Error</div>}/>
			</Switch>
		</Router>
	);
}


