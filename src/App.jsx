import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Car from './components/Car'
import Lottery from './components/Lottery'
import About from './components/About'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <main className='min-h-screen'>
        <Navbar/>
        <Home/>
        <Car/>
        <Lottery/>
        <About/>
        <Footer/>
      </main>
    </>
  )
}

export default App