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
import { compose, uniq, flatten, map, isEmpty } from 'ramda'
import {
  editVideoField,
  editVideo,
  cancelEdit,
  deleteVideo,
  getVideo
} from '../../action-creators/videos'
import {
  TOGGLE_DELETE,
  EDIT_FORM_ADD_CHIP,
  EDIT_FORM_DELETE_CHIP
} from '../../constants'
import { ChipGroup } from '../../components/ChipGroup'
import List from 'material-ui/List'

const EditVideo = props => {
  const videoTags = compose(uniq, flatten, map(video => video.tags))(
    props.videos
  )
  const id = props.match.params.id
  if (isEmpty(props.video)) {
    return (
      <Button onClick={props.retry(props.history, id)}>Refresh Data</Button>
    )
  }
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
          <List>
            <ChipGroup
              data={videoTags}
              click={props.handleClick}
              category="Difficulty"
              video={props.video}
              onDelete={props.handleDelete}
            />
          </List>
          <List>
            <ChipGroup
              data={videoTags}
              click={props.handleClick}
              category="Stack"
              video={props.video}
              onDelete={props.handleDelete}
            />
          </List>
          <List>
            <ChipGroup
              data={videoTags}
              click={props.handleClick}
              category="Content"
              video={props.video}
              onDelete={props.handleDelete}
            />
          </List>
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
  console.log('STATE.VIDEO:', state.video)
  return {
    video: state.video,
    videos: state.videos
  }
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
    deleteVideo: (id, history) => dispatch(deleteVideo(id, history)),
    handleClick: (category, chip) => {
      dispatch({
        type: EDIT_FORM_ADD_CHIP,
        payload: { title: category, chip: chip }
      })
    },
    handleDelete: (category, chip) => {
      dispatch({
        type: EDIT_FORM_DELETE_CHIP,
        payload: { title: category, chip: chip }
      })
    },
    retry: (history, id) => e => {
      dispatch(getVideo(id))
      // history.push(`/videos/${id}`)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EditVideo)
