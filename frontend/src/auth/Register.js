import React from 'react'
// import axios from 'axios'
// import clsx from 'clsx'
// import { useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import InputLabel from '@material-ui/core/InputLabel'
// import OutlinedInput from '@material-ui/core/OutlinedInput'
// import IconButton from '@material-ui/core/IconButton'
// import Visibility from '@material-ui/icons/Visibility'
// import VisibilityOff from '@material-ui/icons/VisibilityOff'
// import FormControl from '@material-ui/core/FormControl'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { registerUser } from '../lib/auth'

import ImageUpload from '../components/ImageUpload'

class Register extends React.Component {
  state = {
    formData: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      image: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {},
    imageChange: null
  }
  

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    const errors = {
      ...this.state.errors,
      [event.target.name]: ''
    }
    this.setState({ formData, errors })
  }
  
  handleImageChange = url => {
    const formData = { ...this.state.formData, image: url }
    this.setState({ formData })
    console.log('Image upload successful')
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await registerUser(this.state.formData)
      console.log(response.config.data.username, 'just registered!')
      this.props.history.push('/login')
    } catch (err) {
      console.log(err.response.data)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    
    const { firstName, lastName, email, username, image, password, passwordConfirmation } = this.state.formData
    return (
      <Box component="span" m={1}>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
            <TextField
              id="outlined-required"
              name="firstName"
              label="First Name"
              variant="outlined"
              defaultValue={firstName}
              onChange={this.handleChange}
            />
            <TextField
              id="outlined"
              name="lastName"
              label="Last Name"
              variant="outlined"
              defaultValue={lastName}
              onChange={this.handleChange}
            />
            <TextField
              required
              id="outlined"
              name="username"
              label="Username"
              variant="outlined"
              defaultValue={username}
              onChange={this.handleChange}
            />
            <TextField
              required
              id="outlined"
              name="email"
              label="Email"
              variant="outlined"
              defaultValue={email}
              onChange={this.handleChange}
            />
            <TextField
              required
              id="outlined-password-input"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              defaultValue={password}
              onChange={this.handleChange}
            />
            <TextField
              required
              id="outlined-confirm-password-input"
              name="passwordConfirmation"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              defaultValue={passwordConfirmation}
              onChange={this.handleChange}
            />
          </div>
          
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span" onClick={this.handleFileUpload}>
              <ImageUpload
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                name="image"
                type="file"
                onChange={this.handleImageChange}
                defaultValue={image}
              />
            </Button>
          </label>
          <Button variant="contained" color="secondary" type="submit">Submit</Button>
        </form>
      </Box>
      
    )
  }
}
export default Register