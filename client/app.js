import React from 'react'
import {Navbar, Footer} from './components'
import Routes from './routes'
import GlobalStyle from './theme/GlobalStyle'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <GlobalStyle />
    </div>
  )
}

export default App
