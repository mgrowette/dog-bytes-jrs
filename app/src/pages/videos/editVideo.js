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
  EDIT_FORM_DELETE_CHIP,
  CREATE_TAG,
  CLEAR_NEW_TAG,
  NEW_TAG_TEXT
} from '../../constants'
import { ChipGroup } from '../../components/ChipGroup'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'

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
      <center>
        <MenuAppBar title="Edit Video" />
      </center>
      <form style={{ paddingTop: '45px', paddingLeft: '15px' }}>
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
            id="notes"
            label="Notes"
            margin="normal"
            value={props.video.notes}
            onChange={e => props.onChange('notes', e.target.value)}
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
          <div>
            <TextField
              id="Content"
              label="New Content"
              category="Content"
              margin="normal"
              helperText="What tag would you like to add?"
              onChange={e => props.newTagText('Content', e.target.value)}
            />
            <Button onClick={props.createTag(props.newTag)}>Add New Tag</Button>
          </div>
          <Divider />
        </FormControl>
        <div>
          <br />
          <Button
            style={{ backgroundColor: '#AAB7B8' }}
            onClick={props.onSubmit(props.history, props.video)}
          >
            Submit
          </Button>
          <Button
            color="secondary"
            style={{ backgroundColor: 'black' }}
            onClick={props.cancel(props.history, props.video)}
          >
            Cancel
          </Button>
          <Button
            style={{ color: 'black', backgroundColor: 'red' }}
            onClick={props.toggleDelete}
          >
            Delete
          </Button>
        </div>
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
            <Button onClick={props.toggleDelete}>Cancel</Button>
            <Button
              onClick={() => props.deleteVideo(props.video._id, props.history)}
              style={{ color: 'red' }}
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
    videos: state.videos,
    newTag: state.newTag
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
    },
    createTag: tag => e => {
      dispatch({
        type: CREATE_TAG,
        payload: tag
      })
      dispatch({ type: CLEAR_NEW_TAG })
    },
    newTagText: (category, value) => {
      dispatch({
        type: NEW_TAG_TEXT,
        payload: { tags: [{ title: category, chips: [value] }] }
      })
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EditVideo)
