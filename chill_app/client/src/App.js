import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"
import axios from 'axios'
import NavBar from './components/Navbar'
import ProfilePage from './components/ProfilePage'
import LandingPage from './components/LandingPage'
import JournalEntries from './components/JournalEntries'

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
              </div>
            </div>

            <Route exact path="/users/:id" component={ProfilePage} />
            <Route exact path="/users" component={LandingPage} />
            <Route exact path="/users/:user_id/journal_entries" component={JournalEntries} />

          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

















