import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import Footer from '../Homepage/Footer/Footer'

function courses() {
  return (
    <div>
        <Navbar/>
        <div className='container'>
          <h1 className='text-center mx-3 my-3 p-3'>Course Catalog</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default courses