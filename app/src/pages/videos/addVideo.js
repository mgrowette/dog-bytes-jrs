import React from 'react'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import Button from 'material-ui/Button'
import { changeVideo, addVideo, cancel } from '../../action-creators/videos'
import FileInput from '../../components/FileInput'
import { split, compose, path, head, toUpper } from 'ramda'
import { SET_PHOTO } from '../../constants'

const AddVideo = props => {
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
            id="tags"
            label="Video Content Tags"
            margin="normal"
            value={props.video.tags}
            helperText="Enter videos tags separated by spaces"
            onChange={e => props.onChange('tags', e.target.value)}
          />
        </FormControl>
        <Button
          variant="flat"
          component="span"
          color="primary"
          onClick={props.onSubmit(props.history, props.video)}
        >
          Submit
        </Button>
        <Button onClick={props.cancel(props.history)}>Cancel</Button>
        <div>
          <FileInput onChange={props.handlePhoto}>
            <img
              src={
                props.photo
                  ? props.photo
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
    video: state.addVideo
  }
}

const mapActionsToProps = dispatch => {
  const doDispatch = (field, value) => {
    dispatch({ type: SET_PHOTO + toUpper(field), payload: value })
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
      console.log('HANDLE PHOTO RESULTS:', results)
      const blob = compose(path(['target', 'result']), head, head)(results)
      console.log('CHECK OUT THE BLOB', blob)
      doDispatch('PHOTO', blob)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(AddVideo)
