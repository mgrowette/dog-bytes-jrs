import React from 'react'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import Button from 'material-ui/Button'
import { changeVideo, addVideo, cancel } from '../../action-creators/videos'
import FileInput from '../../components/FileInput'
import {
  split,
  compose,
  path,
  head,
  toUpper,
  map,
  uniq,
  flatten,
  reduce,
  concat,
  props
} from 'ramda'
import { SET_PHOTO } from '../../constants'
import ChipComponent from '../../components/ChipComponent'
import List, { ListItem } from 'material-ui/List'
import Chip from 'material-ui/Chip'

const AddVideo = props1 => {
  console.log('PROPS1:', props1)
  console.log('PROPS1.VIDEOS:', props1.videos)
  console.log('PROPS1.VIDEO', props1.video)
  console.log('PROPS1', props1)

  return (
    <div>
      <MenuAppBar title="Add a Video" {...props1} />
      <form>
        <FormControl noValidate autoComplete="off">
          <TextField
            id="name"
            label="Video Name"
            margin="normal"
            value={props1.video.name}
            onChange={e => props1.onChange('name', e.target.value)}
          />
          <TextField
            id="instructor"
            label="Video Instructor"
            margin="normal"
            value={props1.video.instructor}
            onChange={e => props1.onChange('instructor', e.target.value)}
          />
          <TextField
            id="desc"
            label="Video Description"
            margin="normal"
            value={props1.video.desc}
            onChange={e => props1.onChange('desc', e.target.value)}
          />
          <TextField
            id="youTubeVideoURL"
            label="Youtube Video URL"
            margin="normal"
            value={props1.video.youTubeVideoURL}
            onChange={e => props1.onChange('youTubeVideoURL', e.target.value)}
          />
          <List>
            {map(tag => (
              <ListItem id={tag}>
                <Chip label={tag} onClick={props1.handleClick} />
              </ListItem>
            ))(
              compose(
                uniq,
                flatten,
                reduce(
                  (acc, video) =>
                    concat(
                      props(['difficulty', 'content', 'stack'], video.tags),
                      acc
                    ),
                  []
                )
              )(props1.videos)
            )}
          </List>
        </FormControl>
        <Button
          variant="flat"
          component="span"
          color="primary"
          onClick={props1.onSubmit(props1.history, props1.video)}
        >
          Submit
        </Button>
        <Button onClick={props1.cancel(props1.history)}>Cancel</Button>
        <div>
          <FileInput onChange={props1.handlePhoto}>
            <img
              src={
                props1.video.photo
                  ? props1.video.photo
                  : "https://placehold.it/64x64?text='photo'"
              }
            />
            <Button variant="flat" component="span" color="primary">
              Upload Photo
            </Button>
          </FileInput>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
    video: state.addVideo
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
      video.tags = split(' ', video.tags)
      dispatch(addVideo(video, history))
    },
    cancel: history => e => {
      dispatch(cancel(history))
    },
    handlePhoto: (e, results) => {
      const blob = compose(path(['target', 'result']), head, head)(results)
      doDispatch('PHOTO', blob)
    },
    handleClick: e => console.log('TAG CHIP CLICKED')
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(AddVideo)
