import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import VideoListItem from '../../components/VideoListItem'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import { getVideo } from '../../action-creators/videos'

class Video extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getVideo(id)
  }

  render() {
    const props = this.props
    return (
      <div>
        <MenuAppBar {...props} showBackArrow={true} title="Video" />

        <VideoListItem video={props.video} />
        <ReactPlayer
          url=" https://youtu.be/aWs-ZseP5TU"
          width="400"
          height="300px"
          controls={true}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    video: state.video
  }
}

const mapActionsToProps = dispatch => {
  return {
    getVideo: id => dispatch(getVideo(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Video)
