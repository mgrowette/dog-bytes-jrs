import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import { withStyles } from 'material-ui/styles'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { TOGGLE_DRAWER } from '../constants'

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
              color="secondary"
              aria-label="Menu"
              onClick={null}
              //{e => props.navigateBack(props.history)}
            >
              <GoBackIcon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.firstButton}
              color="secondary"
              aria-label="Menu"
              onClick={null}
              //{props.toggleDrawer}
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

// const mapStateToProps = state => {
//   return {
//     drawerToggleState: state.drawer
//   }
// }

// const mapActionsToProps = dispatch => {
//   return {
//     toggleDrawer: () => dispatch({ type: TOGGLE_DRAWER }),
//     navigateBack: history => {
//       history.goBack()
//     }
//   }
// }

export default withStyles(styles)(MenuAppBar)
