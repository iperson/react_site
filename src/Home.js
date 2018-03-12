import React from 'react'

class PostCard extends React.Component {
  render() {
    return (
      <a className="card" href="#">
        <div className="content">
          <span className="header">Erosion Engine Update 2</span>
        </div>
        <div className="image">
          <img src="http://placehold.it/512x512" alt=""/>
        </div>
      
        <div className="ui top right attached label">Programming</div>
        
        <div className="content">
          <div className="meta">
            <span className="date">10/5/17</span>
          </div>
          <div className="description">
              Created new UI panel for the texture setting.
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="user icon"></i>
            22 Views
          </span>
        </div>
      </a>
    )
  }
}

class ArtCard extends React.Component {
  render() {
    return (
      <a className="card" href="#">
        <div className="content">
          <span className="header">Art Thing</span>
        </div>
        
        <div className="ui top right attached label">Digital Art</div>

        <div className="image" >
          <img src="http://placehold.it/512x256" alt=""/>
        </div> 
        
        <div className="content">
          
          <div className="meta">
            <span className="date">12/13/17</span>
          </div>
          <div className="description">
            This image was made in Blender.
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="user icon"></i>
            22 Views
          </span>
        </div>
      </a>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ui container">
          <div className="ui four doubling stackable cards">
            <PostCard/>
            <ArtCard/>
          </div>
        </div>
      </div>
    );
  }  
}

export default Home;