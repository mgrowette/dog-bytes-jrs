import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  videos,
  video,
  addVideo,
  toggleExpanded,
  newTag
} from './reducers/videos'
import { favorites } from './reducers/favorites'
import { quotes, quote } from './reducers/quotes'
import { searchCriteria } from './reducers/search'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    videos,
    video,
    addVideo,
    toggleExpanded,
    searchCriteria,
    favorites,
    newTag,
    quotes,
    quote
  }),
  applyMiddleware(thunk)
)
export default store
