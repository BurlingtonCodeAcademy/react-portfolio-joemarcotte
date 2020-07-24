import React from "react";
import "./App.css";

class Projects extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div id="githubWork">
				<label>
					<div className="projectName">
						Yelpington
						<h6>(Github link)</h6>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/yelpington-joemarcotte"
						>
							Git Hub
						</a>
					</div>
				</label>

				<label>
					<div className="projectName">
						GeoVermont
						<h6>(Github link)</h6>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-jayson-joe"
						>
							GitHub
						</a>
					</div>
				</label>
				<label>
					<div className="projectName">
						Guess The Number Game
						<h6>(Github link)</h6>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/guess-the-number-joemarcotte"
						>
							GitHub
						</a>
					</div>
				</label>
			</div>
		);
	}
}

export default Projects;
