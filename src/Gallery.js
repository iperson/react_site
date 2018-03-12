import React from 'react'


class Gallery extends React.Component {  
  
  render() {
    return (
      <div className="container">
        


        
<div className="ui stackable grid">
  <div className="four column row">
    <div className="column">
      <a href="http://google.com" className="ui fluid image">
        <img src="http://placehold.it/512x1024" alt=""/>
      </a>
    </div>
    <div className="column">
      <a href="http://google.com" className="ui fluid image">
        <img src="http://placehold.it/512x512" alt=""/>
      </a>
    </div> 
    <div className="column">
      <a href="http://google.com" className="ui fluid image">
        <img src="http://placehold.it/1024x512" alt=""/>
      </a>
    </div> 
    <div className="column">
      <a href="http://google.com" className="ui fluid image">
        <img src="http://placehold.it/512x512" alt=""/>
      </a>
    </div>
  </div>
</div>
        
        
      
        
      </div>
    );
  }  
}

export default Gallery;