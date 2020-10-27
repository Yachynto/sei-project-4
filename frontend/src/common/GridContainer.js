import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import LifehackCard from '../components/LifehackCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}))

const GridContainer = props => {
  const [spacing] = React.useState(2)
  const classes = useStyles()
  const { lifehacks } = props

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          { lifehacks.map(lifehack => (
            <Grid key={lifehack} item>
              <LifehackCard className={classes.paper} key={lifehack.id} {...lifehack} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
export default GridContainer