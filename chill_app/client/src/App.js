import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"
import axios from 'axios'
import NavBar from './components/Navbar'
import ProfilePage from './components/ProfilePage'
import LandingPage from './components/LandingPage'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">

            <div>
              <NavBar>
                <h1>Chill</h1>
              </NavBar>
              <div>

                <div><Link to="/users">ProfilePage</Link></div>
                <Link to="/">Home</Link>
              </div>
            </div>

            <Route exact path="/users/:id" component={ProfilePage} />
            <Route exact path="/users" component={LandingPage} />
            {/* <Route path="/users/:id" component={HomePage} /> */}

          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;


















// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


// import React, {Component} from "react";
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import ArtistList from "./components/ArtistList";
// import Artist from "./components/Artist";
// import "./App.css";
