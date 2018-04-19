import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { getVideos } from './action-creators/videos'
import { getQuotes } from './action-creators/quotes'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import 'animate.css'

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#EAEDED'
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={customTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()

store.dispatch(getQuotes)
store.dispatch(getVideos)
