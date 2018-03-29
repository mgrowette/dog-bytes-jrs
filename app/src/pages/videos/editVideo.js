import React from 'react'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {
  editVideoField,
  editVideo,
  cancelEdit
} from '../../action-creators/videos'

const EditVideo = props => {
  return (
    <div>
      <MenuAppBar title="Edit Video" showBackArrow={true} {...props} />
      <form>
        <FormControl noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            margin="normal"
            value={props.video.name}
            onChange={e => props.onChange('name', e.target.value)}
          />
        </FormControl>
        <Button onClick={props.onSubmit(props.history, props.video)}>
          Submit
        </Button>
        <Button onClick={props.cancel(props.history, props.video)}>
          Cancel
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return { video: state.video }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => dispatch(editVideoField(field, value)),
    onSubmit: (history, video) => e => {
      e.preventDefault()
      dispatch(editVideo(history, video))
    },
    cancel: (history, video) => e => dispatch(cancelEdit(history, video))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EditVideo)
