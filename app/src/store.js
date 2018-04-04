import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  videos,
  video,
  addVideo,
  toggleExpanded,
  toggleAddChip
} from './reducers/videos'
import { searchCriteria } from './reducers/search'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    videos,
    video,
    addVideo,
    toggleExpanded,
    toggleAddChip,
    searchCriteria
  }),
  applyMiddleware(thunk)
)
export default store
