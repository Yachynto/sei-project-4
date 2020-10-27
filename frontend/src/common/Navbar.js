import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
// import Link from '@material-ui/core/Link'
import { withRouter } from 'react-router-dom'

import LifehackIndex from '../components/LifehackIndex'
import LifehackCreate from '../components/LifehackCreate'

import { logout } from '../lib/auth'
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
        <Box p={3}>
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
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
            <HomeIcon>
            </HomeIcon>
          </IconButton>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Create One" {...a11yProps(1)} />
            <Tab label="My Lifehacks" {...a11yProps(2)} />
          </Tabs>
          <Button color="inherit" onClick={handleLogout} href="/">Logout</Button>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LifehackIndex />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LifehackCreate />
      </TabPanel>
      <TabPanel value={value} index={2}>
    Item Three
      </TabPanel>
    </div>
  )
}
export default withRouter(Navbar)