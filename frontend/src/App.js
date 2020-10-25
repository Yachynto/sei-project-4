import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './common/HomePage'

import LifehackIndex from './components/LifehackIndex'

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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/lifehacks" component={LifehackIndex} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
