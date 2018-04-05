import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  videos,
  video,
  addVideo,
  toggleExpanded,
  toggleAddChip
} from './reducers/videos'
import { favorites } from './reducers/favorites'
import { searchCriteria } from './reducers/search'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    videos,
    video,
    addVideo,
    toggleExpanded,
    toggleAddChip,
    searchCriteria,
    favorites
  }),
  applyMiddleware(thunk)
)
export default store
