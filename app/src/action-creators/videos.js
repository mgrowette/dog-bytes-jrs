import fetch from 'isomorphic-fetch'
import {
  SET_VIDEOS,
  GET_VIDEO,
  CHANGE_VIDEO_CHARACTER,
  RESET_ADD_VIDEO_FORM,
  EDIT_FIELD_FORM,
  CHANGE_SEARCH_TEXT
} from '../constants'
import { map, assoc, join, split, filter, propOr } from 'ramda'

const url = 'http://localhost:5000'

export const getVideos = async (dispatch, getState) => {
  const videos = await fetch(`${url}/videos`).then(res => res.json())
  const datedVideos = map(video =>
    assoc(
      'videoDate',
      join('', filter(x => x !== '/', split('', propOr('', 'date', video)))),
      video
    )
  )(videos)
  function compare(a, b) {
    if (a.videoDate < b.videoDate) return 1
    if (a.videoDate > b.videoDate) return -1
    return 0
  }
  const sortedVideos = datedVideos.sort(compare)
  dispatch({ type: SET_VIDEOS, payload: sortedVideos })
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

export const editVideo = (history, video) => async (dispatch, getState) => {
  const method = 'PUT'
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(video)
  await fetch(`${url}/videos/${video._id}`, { method, headers, body })
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch(getVideo(video._id))
  dispatch(getVideos)
  history.push(`/videos/${video._id}`)
}

export const deleteVideo = (id, history) => async (dispatch, getState) => {
  const method = 'DELETE'
  const headers = { 'Content-Type': 'application/json' }
  await fetch(`${url}/videos/${id}`, { method, headers }).then(res =>
    res.json()
  )
  dispatch(getVideos)
  history.push('/videos')
}

export const changeVideo = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHANGE_VIDEO_CHARACTER, payload: { [field]: value } })
}

export const cancel = history => (dispatch, getState) => {
  dispatch({ type: RESET_ADD_VIDEO_FORM })
  history.push('/videos')
}

export const cancelEdit = (history, video) => (dispatch, getState) => {
  history.push(`/videos/${video._id}`)
}

export const editVideoField = (field, value) => (dispatch, getState) => {
  dispatch({ type: EDIT_FIELD_FORM, payload: { [field]: value } })
}

export const searchField = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHANGE_SEARCH_TEXT, payload: { [field]: value } })
}
