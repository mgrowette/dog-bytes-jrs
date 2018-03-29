import React from 'react'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import Button from 'material-ui/Button'
import { changeVideo, addVideo, cancel } from '../../action-creators/videos'
import { split } from 'ramda'

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
            value={props.video.tags}
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
    onChange: (field, value) => dispatch(changeVideo(field, value)),
    onSubmit: (history, video) => e => {
      e.preventDefault()
      video.tags = split(' ', video.tags)
      console.log('VIDEO TAGS', video.tags)
      dispatch(addVideo(video, history))
    },
    cancel: history => e => {
      dispatch(cancel(history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(AddVideo)
