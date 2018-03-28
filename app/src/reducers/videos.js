import {
  SET_VIDEOS,
  GET_VIDEO,
  RESET_ADD_VIDEO_FORM,
  CHANGE_VIDEO_CHARACTER
} from '../constants'
import { merge } from 'ramda'

export const videos = (state = [], action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return action.payload
    default:
      return state
  }
}

export const video = (state = {}, action) => {
  switch (action.type) {
    case GET_VIDEO:
      return action.payload
    default:
      return state
  }
}

export const addVideo = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_VIDEO_CHARACTER:
      return merge(state, action.payload)
    case RESET_ADD_VIDEO_FORM:
      return {}
    default:
      return state
  }
}
