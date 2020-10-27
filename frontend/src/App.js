import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './common/HomePage'

import Navbar from './common/Navbar'
import HomeNavbar from './common/HomeNavbar'

import LifehackIndex from './components/LifehackIndex'
import Register from './auth/Register'
import Login from './auth/Login'

import { isAuthenticated } from './lib/auth'

class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch('/api/lifehacks')
      const data = await response.json()
      console.log(data, 'from app fetch')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <BrowserRouter>
        { !isAuthenticated() ?
          <div>
            <HomeNavbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </div> :
          <div>
            <Navbar />
            <Switch>
              <Route path="/lifehacks" component={LifehackIndex} />
            </Switch>
          </div>
        }
      </BrowserRouter>
    )
  }
}

export default App
