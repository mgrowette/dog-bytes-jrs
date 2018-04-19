import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import BottomAppBar from '../../components/BottomAppBar'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { RANDOM_QUOTE } from '../../constants'
import { not, isEmpty } from 'ramda'

const Home = props => {
  return (
    <div>
      <Paper style={{ backgroundColor: '#EAEDED', paddingBottom: '200px' }}>
        <center>
          <MenuAppBar position="fixed" title="Home Page" />
          <div style={{ textAlign: 'center' }}>
            <img
              src="/jrs-coding-logo.jpg"
              alt="coding school logo"
              style={{ maxWidth: '480px', width: 'flex', paddingTop: '55px' }}
            />
          </div>
          <div style={{ paddingBottom: '45px' }}>
            <h2>Need a JavaScript Refresher?</h2>
            <h3>{`You've Come to the Right Place`}</h3>
          </div>
          <div>
            {not(isEmpty(props.quotes)) ? (
              <Button
                onClick={() => props.onClick(props.quotes)}
                style={{ backgroundColor: '#F94330' }}
              >
                Click Me. Wisdom Awaits.
              </Button>
            ) : (
              <h4>Loading...</h4>
            )}
            <div style={{ margin: '15px' }}>
              {props.quote ? <h4>{props.quote}</h4> : null}
              {props.quote ? <h5> - Trip Ottinger, esq. </h5> : null}
            </div>
          </div>
          <BottomAppBar position="fixed" />
        </center>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    quote: state.quote
  }
}

const mapActionsToProps = dispatch => {
  return {
    onClick: quotes => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      dispatch({ type: RANDOM_QUOTE, payload: randomQuote })
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)
