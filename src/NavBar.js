import React from 'react'
import { Link } from 'react-router-dom'

class MenuContainer extends React.Component {
  render() {
    return (
      <div className="ui inverted stackable menu">
        <Link to="/" className="item">
          <i className="home icon"></i> 
          Home
        </Link>
        
        <Link to="/posts" className="item">
          <i className="file code outline icon"></i>
          Posts
        </Link>

        <Link to={`/posts/${"?tag=tutorials"}`} className="item">
          <i className="file code outline icon"></i>
          Tutorials
        </Link>

        <Link to="/gallery" className="item">
          <i className="grid layout icon"></i> 
          Gallery
        </Link>
        
        <div className="ui simple dropdown item">
          More
          <i className="dropdown icon"></i>
          <div className="menu">
            <Link to="about" className="item"><i className="edit icon"></i> About Me</Link>
          </div>
        </div>
        
        {/* <div className="right item">
          <div className="ui input"><input type="text" placeholder="Search..."/></div>
        </div> */}
      </div>
    )
  }
}

export default MenuContainer;