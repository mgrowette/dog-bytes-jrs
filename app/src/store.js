import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  videos,
  video,
  addVideo,
  toggleExpanded,
  editVideo
} from './reducers/videos'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    videos,
    video,
    addVideo,
    toggleExpanded
  }),
  applyMiddleware(thunk)
)
export default store
