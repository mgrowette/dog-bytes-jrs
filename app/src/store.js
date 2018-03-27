import { createStore, combineReducers, applyMiddleware } from 'redux'
import { videos } from './reducers/videos'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    videos
  }),
  applyMiddleware(thunk)
)
export default store
