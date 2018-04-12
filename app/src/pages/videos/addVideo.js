import React from 'react'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import Button from 'material-ui/Button'
import { changeVideo, cancel, addVideo } from '../../action-creators/videos'
import FileInput from '../../components/FileInput'
import { compose, path, head, map, uniq, flatten } from 'ramda'
import {
  SET_PHOTO,
  ADD_CHIP,
  DELETE_CHIP,
  NEW_TAG_TEXT,
  CREATE_TAG,
  CLEAR_NEW_TAG
} from '../../constants'
import List from 'material-ui/List'
import { ChipGroup } from '../../components/ChipGroup'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import BottomAppBar from '../../components/BottomAppBar'

const AddVideo = props => {
  const videoTags = compose(uniq, flatten, map(video => video.tags))(
    props.videos
  )

  return (
    <div>
      <center>
        <MenuAppBar title="Add a Video" />
      </center>
      <form style={{ paddingTop: '45px', paddingBottom: '45px' }}>
        <FormControl noValidate autoComplete="off">
          <TextField
            id="name"
            label="Video Name"
            margin="normal"
            value={props.video.name}
            onChange={e => props.onChange('name', e.target.value)}
          />
          <TextField
            id="instructor"
            label="Video Instructor"
            margin="normal"
            value={props.video.instructor}
            onChange={e => props.onChange('instructor', e.target.value)}
          />
          <TextField
            id="desc"
            label="Video Description"
            margin="normal"
            value={props.video.desc}
            onChange={e => props.onChange('desc', e.target.value)}
          />
          <TextField
            id="youTubeVideoURL"
            label="Youtube Video URL"
            margin="normal"
            value={props.video.youTubeVideoURL}
            onChange={e => props.onChange('youTubeVideoURL', e.target.value)}
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
          <Typography paragraph variant="body2">
            {`Don't see a tag you want? Add it below!`}
          </Typography>
          <div>
            <TextField
              id="Content"
              label="New Content"
              category="Content"
              margin="normal"
              helperText="What tag would you like to add?"
              onChange={e => props.newTagText('Content', e.target.value)}
            />
            <div>
              <Button onClick={props.createTag(props.newTag)}>
                Add New Tag
              </Button>
              <Divider />
            </div>
          </div>
        </FormControl>
        <div>
          <FileInput onChange={props.handlePhoto}>
            <img
              alt="video screenshot"
              src={
                props.video.photo
                  ? props.video.photo
                  : "https://placehold.it/64x64?text='photo'"
              }
            />
            <Button variant="flat" component="span" color="primary">
              Upload Photo
            </Button>
          </FileInput>
        </div>
        <Button
          variant="flat"
          component="span"
          color="primary"
          onClick={props.onSubmit(props.history, props.video)}
        >
          Submit
        </Button>
        <Button color="secondary" onClick={props.cancel(props.history)}>
          Cancel
        </Button>
        <center>
          <BottomAppBar />
        </center>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
    video: state.addVideo,
    addChip: state.toggleAddChip,
    newTag: state.newTag
  }
}

const mapActionsToProps = dispatch => {
  const doDispatch = (field, value) => {
    dispatch({ type: SET_PHOTO, payload: value })
  }
  return {
    onChange: (field, value) => dispatch(changeVideo(field, value)),
    onSubmit: (history, video) => e => {
      e.preventDefault()
      dispatch(addVideo(video, history))
    },
    handleClick: (category, chip) => {
      dispatch({
        type: ADD_CHIP,
        payload: { title: category, chip: chip }
      })
    },
    handleDelete: (category, chip) => {
      dispatch({
        type: DELETE_CHIP,
        payload: { title: category, chip: chip }
      })
    },
    cancel: history => e => {
      dispatch(cancel(history))
    },
    handlePhoto: (e, results) => {
      const blob = compose(path(['target', 'result']), head, head)(results)
      doDispatch('PHOTO', blob)
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

export default connector(AddVideo)

// <Button onClick={props.toggleAddChip}>Never Mind</Button>
