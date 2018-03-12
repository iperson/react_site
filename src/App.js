import React from 'react'
import {Route, Switch} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css'
import Menu from './NavBar'
import Home from './Home'
import Gallery from './Gallery'
import Blog from './Blog'
import About from './About'

class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/posts' component={Blog}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/about' component={About}/>
        <Route render={({ location }) => (
          <div className='ui inverted segment'>
            <h1>You have no business here</h1>
          </div>
        )} />
      </Switch>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu/>
        <Body/>
      </div>
    );
  }
}

export default App;
