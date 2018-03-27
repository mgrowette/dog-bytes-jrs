import fetch from 'isomorphic-fetch'
import { SET_VIDEOS } from '../constants'

const url = 'http://localhost:5000'

export const getVideos = async (dispatch, getState) => {
  const videos = await fetch(`${url}/videos`).then(res => res.json())
  dispatch({ type: SET_VIDEOS, payload: videos })
}
