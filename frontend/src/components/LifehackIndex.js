import React from 'react'

import { getLifehacks } from '../lib/api'

class LifehackIndex extends React.Component {
  state = {
    lifehacks: null
  }

  async componentDidMount() {
    const response = await getLifehacks()
    this.setState({
      lifehacks: response.data
    })
    console.log(this.state.lifehacks, 'from LifehackIndex api request')
  }

  render() {
    return (
      <h1>hi</h1>
    )
  }
}

export default LifehackIndex