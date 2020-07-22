import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	//   Header with links to other pages
	render() {
		return (
			<div id="banner" className="page">
				<Link to="/" className="bannerSelector">
					<div>Home</div>
				</Link>

				<Link to="/about" className="bannerSelector">
					<div>About Me</div>
				</Link>

				<Link to="/projects" className="bannerSelector">
					<div>Projects</div>
				</Link>
			</div>
		);
	}
}

export default Header;
