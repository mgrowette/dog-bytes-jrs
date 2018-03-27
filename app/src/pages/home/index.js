import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'

const Home = props => {
  return (
    <div>
      <MenuAppBar title="Home Page" />
      <center>
        <h1 style={{ paddingTop: '60px' }}> Home page </h1>
        <img
          src="/jrs-coding-logo.jpg"
          alt="JRS coding school logo"
          style={{ width: '300px' }}
        />
      </center>
    </div>
  )
}

export default Home
