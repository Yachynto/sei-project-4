import React from 'react'

import { getUser } from '../lib/auth'

import Modal from '../common/Modal'

import { capitalize } from '@material-ui/core'
// import Grid from '@material-ui/core/Grid'
// import GridContainer from '../common/GridContainer'
import ProfileGridContainer from '../common/ProfileGridContainer'

class Profile extends React.Component {
  state = {
    profile: 'null',
    isOpen: false
  }

  async componentDidMount() {
    try {
      const res = await getUser()
      this.setState({
        profile: res.data,
        isOpen: true
      })
    } catch (err) {
      console.log(err)
    }
    // console.log(typeof(this.state.profile.username))
  }

  setModalClosed = () => {
    this.setState({ isOpen: false })
  }



  render() {
    const { image, username, email, createdLifehack } = this.state.profile
    if ( !createdLifehack ) return null
    return (
      <Modal
        isOpen={this.state.isOpen}
        onOverlayClick={this.setModalClosed}
      >
        <section className="card">
          <div className="container">
            <div className="columns" style={{ backgroundColor: '#14BCCA' }}>
              <div className="column is-half">
                <div className="card-image">
                  <figure className="image" style={{ width: '200px', height: '200px' }}>
                    <img src={image} alt="just an image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{capitalize(`${username}`)}</p>
                      <p className="title is-4">{email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <p className="title is-4" style={{ textAlign: 'center' }}>Your lifehacks</p>
                <ProfileGridContainer 
                  lifehacks={createdLifehack}
                />
              </div>
            </div>
          </div>
        </section>
      </Modal>
      
    )
  }
}
export default Profile