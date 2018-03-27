import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  firstButton: {
    marginLeft: -12,
    marginRight: 12
  },
  lastButton: {
    marginLeft: 12,
    marginRight: -12
  }
})

const MenuAppBar = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {props.showBackArrow ? (
            <IconButton
              className={classes.firstButton}
              color="primary"
              aria-label="Menu"
              onClick={e => props.navigateBack(props.history)}
            >
              <GoBackIcon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.firstButton}
              color="primary"
              aria-label="Menu"
              onClick={props.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography className={classes.flex} variant="title" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(MenuAppBar)
