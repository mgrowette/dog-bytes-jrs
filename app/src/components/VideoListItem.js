import React from 'react'
// import Icon from 'material-ui/Icon'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const VideoListItem = props => {
  const { name, instructor, imgPath } = props.video

  return (
    <div style={{ backgroundColor: '#EAEDED' }}>
      <ListItem>
        <img
          src={imgPath ? imgPath : '/jrs-dog-logo.jpg'}
          alt="video content"
          style={{ maxWidth: '60px' }}
        />
        <ListItemText primary={name} secondary={instructor} />
      </ListItem>
      <Divider />
    </div>
  )
}

export default VideoListItem
