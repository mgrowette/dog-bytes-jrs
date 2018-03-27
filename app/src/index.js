import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { getVideos } from './action-creators/videos'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import 'animate.css'
// import red from 'material-ui/colors/red'
// import yellow from 'material-ui/colors/yellow'

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#800000'
    },
    secondary: {
      main: '#FFDF00'
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

store.dispatch(getVideos)
