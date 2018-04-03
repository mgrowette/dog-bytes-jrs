import React from 'react'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import Button from 'material-ui/Button'
import { changeVideo, cancel } from '../../action-creators/videos'
import FileInput from '../../components/FileInput'
import { compose, path, head, map, uniq, flatten, contains } from 'ramda'
import { SET_PHOTO, ADD_CHIP, DELETE_CHIP } from '../../constants'
import List from 'material-ui/List'
import { ChipGroup } from '../../components/ChipGroup'

const AddVideo = props => {
  const videoTags = compose(uniq, flatten, map(video => video.tags))(
    props.videos
  )

  return (
    <div>
      <MenuAppBar title="Add a Video" {...props} />
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
          <List>
            <ChipGroup
              data={videoTags}
              click={props.handleClick}
              category="Content"
              video={props.video}
              onDelete={props.handleDelete}
            />
          </List>
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
        </FormControl>
        <Button
          variant="flat"
          component="span"
          color="primary"
          // onClick={props.onSubmit(props.history, props.video)}
        >
          Submit
        </Button>
        <Button onClick={props.cancel(props.history)}>Cancel</Button>
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
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('STATE.ADDVIDEO', state.addVideo)
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
    // onSubmit: (history, video) => e => {
    //   e.preventDefault()
    //   // video.tags = split(' ', video.tags)
    //   dispatch(addVideo(video, history))
    // },
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
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(AddVideo)
