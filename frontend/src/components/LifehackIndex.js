import React from 'react'

import { getLifehacks } from '../lib/api'
import LifehackCard from './LifehackCard'

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
    if ( !this.state.lifehacks ) return null
    return (
      <div>
        { this.state.lifehacks.map(lifehack => (
          <LifehackCard key={lifehack.id} {...lifehack} />
        ))}
      </div>
    )
  }
}

export default LifehackIndex