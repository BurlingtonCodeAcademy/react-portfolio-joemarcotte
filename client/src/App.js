import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Form from "./Form";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
		};
	}

	// Handlers for modal window
	handleOpen = () => {
		this.setState({
			modalOpen: true,
		});
	};
	handleClose = () => {
		this.setState({
			modalOpen: false,
		});
	};

	// Main page layout
	render() {
		return (
			<div id="body">
				<div id="content">
					<div id="top">
						{" "}
						{/*Header - at top of all pages */}
						<Header />
					</div>

					<Switch>
						{/* Component page paths */}
						<Route exact path="/" render={() => <Home />} />
						<Route path="/about" render={() => <About />} />
						<Route path={"/projects"} render={() => <Projects />} />
					</Switch>

					<div id="bottom">
						{/*Footer - sticks to bottom and gets pushed down by content */}
						<Footer
							modalOpen={this.state.modalOpen}
							handleOpen={this.handleOpen}
						/>
					</div>

					<div
						id="modal"
						style={{ visibility: this.state.modalOpen ? "visible" : "hidden" }}
					>
						<br />
						<button id="closeButton" onClick={this.handleClose}>
							Close Window
						</button>
						<br />
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
