import fetch from 'isomorphic-fetch'
import { QUOTE } from '../constants'

const url = 'http://localhost:5000'

export const getQuotes = async (dispatch, getState) => {
  console.log('getQuotes called')
  const quotesObjects = await fetch(`${url}/quotes`).then(res => res.json())
  dispatch({ type: QUOTE, payload: quotesObjects })
}
