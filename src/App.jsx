import React from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Header from './Components/Header/Header.jsx'
import Tab from './Components/Tab'
import { Timer } from 'iconsax-react'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Tab/>
    <Footer/>
    </>
  )
}

export default App