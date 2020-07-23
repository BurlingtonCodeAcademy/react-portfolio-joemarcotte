import React from "react";
import "./App.css";

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	// Header and Bio
	render() {
		return (
			<div id="aboutPage">
				<h1>
					Who is Joe Marcotte???
					<br />
				</h1>

				<div id="aboutContent">
					<p>
						I was originally born and raised in Massachusetts and moved to
						Vermont in December 1998 to North Springfield, Vermont. Then I moved
						to Rutland in February of 2008, where I have lived ever since.
					</p>
					<p>
						I am a hard working, family man. I have 3 wonderful children ages
						10,7, and almost 2. When I am not working you can generally find me
						spending time with my wife and kids. We can usually be found
						camping, on a rail trail riding our bikes, at a state park swimming
						or at the community swimming pool. I am also a big time foodie and
						have been recently working on expanding my pallette and have a newfound love of Sushi and Thai food.
					</p>
					<div className='family'></div>

					<p>
						My interest in coding started in high school while working on the
						school's web page, but I decided not to attend college after high
						school. I entered the workforce as I was already working as a
						sheetrock sub-contractor, in which I worked until just after
						Christmas in 2003. Then I decided to pursue my passion of working on
						automobiles and I attended WyoTech in 2004 in which I completed the
						Automotive Repair certification and received a Minor in Business
						Administration. I spend my career between 3 dealerships. Spending 10
						years with General Motors and have spent almost 6 with Honda Motors.
					</p>
                    <p>
						I completed the Boot-Camp at Burlington Code Academy (BCA) in August
						, 2020. I am excited to begin this new journey as a Full Stack Web
						Developer. So take me along for this ride as I am a hard working
						dedicated employee.
					</p>
				</div>
			</div>
		);
	}
}

export default About;
