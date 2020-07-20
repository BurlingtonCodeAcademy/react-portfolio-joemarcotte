import React from 'react'
import './App.css';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="App" id="homePage">
                
                <div>
                    <div id="homeName">Joe Marcotte</div>
                    <div id='homePageQuote'>
                        Web Developer
                  <br />
                Father
                 <br />
                  Husband
            </div>
                </div>

            </div>

        )
    }
}

export default Home