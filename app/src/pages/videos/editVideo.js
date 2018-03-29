import React from 'react'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { split, join } from 'ramda'
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
      video.tags = split(' ', video.tags)
      dispatch(editVideo(history, video))
    },
    cancel: (history, video) => e => dispatch(cancelEdit(history, video))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EditVideo)
