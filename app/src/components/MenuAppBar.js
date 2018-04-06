import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'

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
    <div>
      <AppBar position="static">
        <Toolbar>
          {props.showBackArrow ? (
            <IconButton
              className={classes.firstButton}
              color="secondary"
              aria-label="Menu"
              onClick={e => props.navigateBack(props.history)}
            >
              <GoBackIcon />
            </IconButton>
          ) : null}
          <Typography
            className={classes.flex}
            variant="title"
            color="secondary"
          >
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

const mapActionsToProps = dispatch => {
  return {
    // toggleDrawer: () => dispatch({ type: TOGGLE_DRAWER }),
    navigateBack: history => {
      history.goBack()
    }
  }
}

const connector = connect(mapActionsToProps)

export default connector(withStyles(styles)(MenuAppBar))
