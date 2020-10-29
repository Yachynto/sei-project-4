import React from 'react'

// import Homepage from './HomePage'

import { Link, withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const HomeNavbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#0C8540' }}>
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            <Button style={{ color: 'white', fontWeight: '700' }}>Homepage</Button>
          </Typography>
          <Typography component={Link} to="/register" color="inherit" >
            <Button style={{ color: 'white', fontWeight: '700' }}>Register</Button>
          </Typography>
          <Typography component={Link} to="/login" color="inherit" >
            <Button style={{ color: 'white', fontWeight: '700' }}>Login</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default withRouter(HomeNavbar)