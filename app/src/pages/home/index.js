import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import BottomAppBar from '../../components/BottomAppBar'

const Home = props => {
  return (
    <div>
      <center>
        <MenuAppBar position="fixed" title="Home Page" />
        <div style={{ textAlign: 'center' }}>
          <img
            src="/jrs-coding-logo.jpg"
            alt="coding school logo"
            style={{ maxWidth: '480px' }}
          />
        </div>
        <div style={{ paddingBottom: '45px' }}>
          <h2>Need a JavaScript Refresher?</h2>
          <h3>{`You've Come to the Right Place`}</h3>
        </div>
        <BottomAppBar position="fixed" />
      </center>
    </div>
  )
}

export default Home
