import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
// import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import Modal from '../common/Modal'
import { capitalize } from '@material-ui/core'

// import PlayCode from '../common/PlayCode'
// import LifehackShow from './LifehackShow'
// import LifehackShow from './LifehackShow'

class LifehackCard extends React.Component {
  state = {
    isOpen: false
  }

  setModalOpen = () => {
    this.setState({ isOpen: true })
  }

  setModalClosed = () => {
    this.setState({ isOpen: false })
  }

  
  render() {
    const { id, name, image, text, owner } = this.props
    return (
      <>
        <Card id={id} onClick={this.setModalOpen} style={{ height: '200px', width: '320px' }}>
          <CardActionArea>
            <Link to='/'>
              <img src={image} alt={name} style={{ height: '100%', width: '100%' }}
              />
            </Link>
          </CardActionArea>
          {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
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
                <br />
                <p style={{ textAlign: 'right' }}>{capitalize(`${owner.username}`)}</p>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}
export default LifehackCard