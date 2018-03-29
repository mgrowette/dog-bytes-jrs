import React from 'react'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import { join } from 'ramda'
import {
  editVideoField,
  editVideo,
  cancelEdit,
  deleteVideo
} from '../../action-creators/videos'
import { TOGGLE_DELETE } from '../../constants'

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
          <TextField
            id="desc"
            label="Description"
            margin="normal"
            value={props.video.desc}
            onChange={e => props.onChange('desc', e.target.value)}
          />
          <TextField
            id="url"
            label="Youtube Video URL"
            margin="normal"
            value={props.video.youTubeVideoURL}
            onChange={e => props.onChange('url', e.target.value)}
          />
          <TextField
            id="tags"
            label="Video Content Tags"
            margin="normal"
            value={join(' ', props.video.tags)}
            onChange={e => props.onChange('tags', e.target.value)}
          />
        </FormControl>
        <Button onClick={props.onSubmit(props.history, props.video)}>
          Submit
        </Button>
        <Button onClick={props.cancel(props.history, props.video)}>
          Cancel
        </Button>
        <Button color="secondary" onClick={props.toggleDelete}>
          Delete
        </Button>
        <Dialog
          open={props.video.toggleDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Are you sure you want to delete this video?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Confirm Delete
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.toggleDelete} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => props.deleteVideo(props.video._id, props.history)}
              color="primary"
              autoFocus
            >
              Confirm Delete
            </Button>
          </DialogActions>
        </Dialog>
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
    cancel: (history, video) => e => dispatch(cancelEdit(history, video)),
    toggleDelete: () => dispatch({ type: TOGGLE_DELETE }),
    deleteVideo: (id, history) => dispatch(deleteVideo(id, history))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EditVideo)
