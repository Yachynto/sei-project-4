import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import Modal from '../common/Modal'
// import { capitalize } from '@material-ui/core'

import { getLifehacks, deleteLifehack } from '../lib/api'
import { getUser } from '../lib/auth'

import { Link } from 'react-router-dom'

class ProfileLifehackCard extends React.Component {
  state = {
    isOpen: false,
    lifehacks: null,
    profile: null
  }

  async componentDidMount() {
    const response = await getLifehacks()
    const userResponse = await getUser()
    this.setState({
      lifehacks: response.data,
      profile: userResponse.data
    })
  }

  setModalOpen = () => {
    this.setState({ isOpen: true })
  }

  setModalClosed = () => {
    this.setState({ isOpen: false })
  }

  handleDelete = async () => {
    const lifehackId = this.props.match.params.id
    await deleteLifehack(lifehackId)
  }

  
  render() {
    const { id, name, image, text } = this.props
    if ( !this.state.lifehacks ) return null
    return (
      <>
        <Card id={id} onClick={this.setModalOpen} style={{ height: '50px', width: '80px', marginRight: '5px' }}>
          <CardActionArea>
            <Link to='/'>
              <img src={image} alt={name} style={{ height: '100%', width: '100%' }}
              />
            </Link>
          </CardActionArea>
        </Card>
        <Modal
          isOpen={this.state.isOpen}
          onOverlayClick={this.setModalClosed}
        >
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{name}</p>
                  <p className="subtitle is-6"style={{ marginTop: '5px' }}>What does it do?</p>
                </div>
              </div>

              <div className="content">
                {text}
                <br />
                <Button color="primary" onClick={this.handleDelete} className="button is-danger" style={{ marginTop: '20px' }}>
            Delete
                </Button>
                <br />
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}
export default ProfileLifehackCard