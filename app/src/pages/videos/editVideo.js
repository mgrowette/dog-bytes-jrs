import React from 'react'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import { editVideo } from '../../action-creators/videos'

const EditVideo = props => {
  console.log('PROPS.VIDEO.NAME', props.video.name)
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
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return { video: state.video }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => dispatch(editVideo(field, value))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EditVideo)
