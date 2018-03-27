import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Videos from './pages/videos'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/videos" component={Videos} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
