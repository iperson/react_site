import React from 'react'

class About extends React.Component {
  render() {
    return ( 
        <div className="ui internally celled grid container">
            <div className="row">
            <div className="column">
                <div className="ui stackable two column internally celled grid">
                <div className="column">
                    <h1>About me</h1>
                    <p>Interests</p>
                    <p>Eucation</p>
                    <p>Resume</p>
                </div>
                <div className="center aligned column">
                    <img src="http://placehold.it/256x256"/>
                </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="column">
                <p>GitHub</p>
                <p>ArtStation</p>
                <p>Stackoveflow</p>
                <p>Twitter</p>
            </div>
            </div>
            <div className="row">
            <div className="column">
                <h1>Ccclge Prjts</h1>
            </div>
            </div>
        </div>
    );
  }
}

export default About;