import React from 'react'

import { getLifehacks } from '../lib/api'

import GridContainer from '../common/GridContainer'

class LifehackIndex extends React.Component {
  state = {
    lifehacks: null
  }

  async componentDidMount() {
    const response = await getLifehacks()
    this.setState({
      lifehacks: response.data
    })
  }

  render() {
    if ( !this.state.lifehacks ) return null
    return (
      <GridContainer 
        lifehacks={this.state.lifehacks}
      />
    )
  }
}

export default LifehackIndex