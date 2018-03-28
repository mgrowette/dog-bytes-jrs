import fetch from 'isomorphic-fetch'
import {
  SET_VIDEOS,
  GET_VIDEO,
  CHANGE_VIDEO_CHARACTER,
  RESET_ADD_VIDEO_FORM
} from '../constants'

const url = 'http://localhost:5000'

export const getVideos = async (dispatch, getState) => {
  const videos = await fetch(`${url}/videos`).then(res => res.json())
  dispatch({ type: SET_VIDEOS, payload: videos })
}

export const getVideo = id => async (dispatch, getState) => {
  const video = await fetch(`${url}/videos/${id}`).then(res => res.json())
  console.log('RESULT OF VIDEO FETCH', video)
  dispatch({ type: GET_VIDEO, payload: video })
}

export const addVideo = (video, history) => async (dispatch, getState) => {
  const method = 'POST'
  const headers = { 'Conetent-Type': 'application/json' }
  const body = JSON.stringify(video)
  await fetch(`${url}/videos`, { method, headers, body })
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch(getVideos)
  dispatch({ type: RESET_ADD_VIDEO_FORM })
  history.push('/videos')
}

export const changeVideo = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHANGE_VIDEO_CHARACTER, payload: { [field]: value } })
}
