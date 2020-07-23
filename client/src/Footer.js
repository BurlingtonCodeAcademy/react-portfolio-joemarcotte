import React from "react";
import "./App.css";

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div id="footer">
				<a
					target="_blank"
					href="https://www.linkedin.com/in/joe-marcotte-697a611a2/"
					rel="noopener noreferrer"
					className="bannerSelector"
				>
					<div>LinkedIn</div>
				</a>

				<a
					target="_blank"
					href="https://github.com/joemarcotte"
					rel="noopener noreferrer"
					className="bannerSelector"
				>
					<div>Github</div>
				</a>

				<div>
					<div className="footerSelector" onClick={this.props.handleOpen}>
						Contact Me
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
