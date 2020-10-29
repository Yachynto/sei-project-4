import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
// import Link from '@material-ui/core/Link'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { withRouter } from 'react-router-dom'

import LifehackIndex from '../components/LifehackIndex'
import LifehackCreate from '../components/LifehackCreate'
import Profile from '../auth/Profile'

import { logout } from '../lib/auth'
import { Modal } from '@material-ui/core'
// import HomePage from './HomePage'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [navOpen, navSetOpen] = React.useState(false)
  const open = Boolean(anchorEl)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const setModalOpen = () => {
    navSetOpen(true)
    console.log('opened state')
  }

  const setModalClosed = () => {
    navSetOpen(false)
  }

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#0C8540' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
            <HomeIcon>
            </HomeIcon>
          </IconButton>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Create One" {...a11yProps(1)} />
          </Tabs>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose, setModalOpen}>Profile</MenuItem>
              <MenuItem color="inherit" onClick={handleLogout} href="/">Logout</MenuItem>
            </Menu>
          </div>
          
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LifehackIndex />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LifehackCreate />
      </TabPanel>
      <Modal
        open={navOpen}
        onClose={setModalClosed}
      >
        <Profile />
      </Modal>
    </div>
  )
}
export default withRouter(Navbar)