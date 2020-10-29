import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { loginUser, setToken } from '../lib/auth'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    },
    errors: {}
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    try {
      event.preventDefault()
      const response = await loginUser(this.state.formData)
      setToken(response.data.token)
      window.location.href = '/'
      console.log(response.data.message)
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
      console.log(err.response.data)
    }
  }

  render() {
    const { email, password } = this.state.formData
    return (
      <Box component="span" m={1}>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit} style={{ display: 'flex', height: '300px', flexDirection: 'column', marginTop: '80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  id="outlined"
                  name="email"
                  label="Email"
                  variant="outlined"
                  defaultValue={email}
                  onChange={this.handleChange}
                  style={{ backgroundColor: 'white' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  id="outlined-password-input"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  defaultValue={password}
                  onChange={this.handleChange}
                  style={{ marginTop: '20px', backgroundColor: 'white' }}
                />
              </div>
            </div>
            <Button variant="contained" color="secondary" type="submit" style={{ maxWidth: '50px', alignSelf: 'center', marginTop: '20px', fontWeight: '700' }}>Login</Button>
          </div>
        </form>
      </Box>
    )
  } 
}
export default Login