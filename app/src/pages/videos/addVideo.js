import React from 'react'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import { addVideo } from '../../action-creators/videos'
import { connect } from 'react-redux'

const addVideo = props => {
  return (
    <div>
      <MenuAppBar title="Add a Video" {...props} showBackArrow={true} />
      <form>
        <FormControl noValidate autoComplete="off">
          <TextField
            id="name"
            label="Video Name"
            margin="normal"
            value={props.video.name}
            onChange={e => props.onChange('name', e.target.value)}
          />
        </FormControl>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    video: state.addVideo
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => dispatch(changeVideo(field, value))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(addVideo)
