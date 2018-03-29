import fetch from 'isomorphic-fetch'
import {
  SET_VIDEOS,
  GET_VIDEO,
  CHANGE_VIDEO_CHARACTER,
  RESET_ADD_VIDEO_FORM,
  EDIT_FIELD_FORM,
  RESET_EDIT_VIDEO_FORM
} from '../constants'

const url = 'http://localhost:5000'

export const getVideos = async (dispatch, getState) => {
  const videos = await fetch(`${url}/videos`).then(res => res.json())
  dispatch({ type: SET_VIDEOS, payload: videos })
}

export const getVideo = id => async (dispatch, getState) => {
  const video = await fetch(`${url}/videos/${id}`).then(res => res.json())
  dispatch({ type: GET_VIDEO, payload: video })
}

export const addVideo = (video, history) => async (dispatch, getState) => {
  const method = 'POST'
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(video)
  await fetch(`${url}/videos`, { method, headers, body })
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch(getVideos)
  dispatch({ type: RESET_ADD_VIDEO_FORM })
  history.push('/videos')
}

export const editVideo = (video, history) => async (dispatch, getState) => {
  const method = 'PUT'
  const headers = { 'Content-Type': 'applicaton/json' }
  const body = JSON.stringify(video)
  await fetch(`${url}/videos/${video._id}`, { method, headers, body })
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch(getVideo(video._id))
  history.push(`/videos/${video._id}`)
}

export const changeVideo = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHANGE_VIDEO_CHARACTER, payload: { [field]: value } })
}

export const cancel = history => (dispatch, getState) => {
  dispatch({ type: RESET_ADD_VIDEO_FORM })
  history.push('/videos')
}

export const cancelEdit = (history, video) => (dispatch, getState) => {
  dispatch({ type: RESET_EDIT_VIDEO_FORM })
  history.push(`/videos/${video._id}`)
}

export const editVideoField = (field, value) => (dispatch, getState) => {
  dispatch({ type: EDIT_FIELD_FORM, payload: { [field]: value } })
}
