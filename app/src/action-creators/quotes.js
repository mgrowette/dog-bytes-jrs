import fetch from 'isomorphic-fetch'
import { QUOTE } from '../constants'
import { map } from 'ramda'

const url = 'http://localhost:5000'

export const getQuotes = async (dispatch, getState) => {
  const quotesObjects = await fetch(`${url}/quotes`).then(res => res.json())
  const quotes = map(quote => quote.quote)(quotesObjects)
  dispatch({ type: QUOTE, payload: quotes })
}
