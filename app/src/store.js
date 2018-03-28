import { createStore, combineReducers, applyMiddleware } from 'redux'
import { videos, video } from './reducers/videos'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    videos,
    video
  }),
  applyMiddleware(thunk)
)
export default store
