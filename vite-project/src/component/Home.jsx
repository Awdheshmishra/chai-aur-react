import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
    const name = "Learn coding"
  return (
    <>
    <Navbar/>
    <div>welcome {name}</div>
    <Footer/>
    </>
  )
}

export default Home