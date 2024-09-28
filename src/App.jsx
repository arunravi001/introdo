import React from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Header from './Components/Header/Header.jsx'
import Tab from './Components/Tab'
import Footer from './Components/Footer/Footer'
import UnlockThePerks from './Components/UnlockThePerks.jsx'

const App = () => {
  return (
    <>
    <Header/>
    <Tab/>
    <UnlockThePerks/>
    <Footer/>
    </>
  )
}

export default App