import React from 'react'

import { getLifehacks } from '../lib/api'

import GridContainer from '../common/GridContainer'

class LifehackIndex extends React.Component {
  state = {
    lifehacks: null,
    isOpen: false
  }

  setModalOpen = () => {
    this.setState({ isOpen: true })
  }

  setModalClosed = () => {
    this.setState({ isOpen: false })
  }

  async componentDidMount() {
    const response = await getLifehacks()
    this.setState({
      lifehacks: response.data
    })
    console.log(this.state.lifehacks[0].owner.username)
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