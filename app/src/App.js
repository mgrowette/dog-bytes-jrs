import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Videos from './pages/videos'
import Video from './pages/videos/show'
import AddVideo from './pages/videos/addVideo'
import EditVideo from './pages/videos/editVideo'
import Search from './pages/search'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos/add" component={AddVideo} />
            <Route exact path="/videos/:id/edit" component={EditVideo} />
            <Route exact path="/videos/search" component={Search} />
            <Route exact path="/videos/:id" component={Video} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
