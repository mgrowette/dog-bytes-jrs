import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import VideoListItem from '../../components/VideoListItem'
import { TOGGLE_EXPANDED } from '../../constants'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { getVideo } from '../../action-creators/videos'
import { withStyles } from 'material-ui/styles'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import FavoriteIcon from 'material-ui-icons/Favorite'
import ShareIcon from 'material-ui-icons/Share'
import EditIcon from 'material-ui-icons/Edit'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Divider from 'material-ui/Divider'
// import MoreVertIcon from 'material-ui-icons/MoreVert'
import classnames from 'classnames'
import { join, flatten, map, propOr, isNil, contains } from 'ramda'
import { toggleFavorite } from '../../action-creators/favorites'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const styles = theme => ({
  card: {
    maxWidth: 'flex'
  },
  media: {
    height: 194
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  image: {
    height: 20
  }
})

class Video extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getVideo(id)
  }

  render() {
    const props = this.props
    const { classes } = props

    return (
      <div>
        <MenuAppBar {...props} showBackArrow={true} title="Video" />

        <VideoListItem video={props.video} />
        <ReactPlayer
          url={props.video.youTubeVideoURL}
          width="flex"
          height="300px"
          controls={true}
        />
        <Card className={classes.card}>
          <CardHeader
            avatar={
              isNil(props.video.photo) ? null : (
                <img
                  alt="screenshot of video"
                  src={props.video.photo}
                  imgProps={classes.image}
                />
              )
            }
            title={props.video.name}
            subheader={props.video.date}
          />
          <CardContent>
            <Typography component="p">{props.video.desc}</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              onClick={props.toggleFavorite}
              aria-label="Add to favorites"
              style={{ color: props.favorites ? 'red' : null }}
            >
              <FavoriteIcon />
            </IconButton>
            <CopyToClipboard text={props.video.youTubeVideoURL}>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </CopyToClipboard>
            <Link to={`/videos/${props.video._id}/edit`}>
              <IconButton aria-label="Edit Video">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: props.expanded.toggleExpanded
              })}
              onClick={props.handleExpandClick}
              aria-expanded={props.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse
            in={props.expanded.toggleExpanded}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph variant="body2">
                Video Tags:
              </Typography>
              <Typography paragraph>
                {join(
                  ', ',
                  flatten(
                    map(tag => tag.chips)(propOr([], ['tags'], props.video))
                  )
                )}
              </Typography>
              <Divider />
              <Typography paragraph>More placeholder text....</Typography>
              <Typography>
                {`After consumption of this video, do not swim for at least 30
                minutes. It's pretty dense.`}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    video: state.video,
    expanded: state.toggleExpanded,
    favorites: contains(state.video._id, state.favorites)
  }
}

const mapActionsToProps = dispatch => {
  return {
    getVideo: id => dispatch(getVideo(id)),
    handleExpandClick: () => dispatch({ type: TOGGLE_EXPANDED }),
    toggleFavorite: () => {
      dispatch(toggleFavorite)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Video))
