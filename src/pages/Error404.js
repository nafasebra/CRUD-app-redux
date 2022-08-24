import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function Error404() {
  return (
    <>
      <Navbar showPlusBtn={false} />
      <div className='items_center'>
        <h2 className='head_text m_0'>404 Not found</h2>
        <p className='text_light'>Please go to the <Link className='link' to={'/'}>main</Link> page</p>
      </div>
      <Footer />
    </>
  )
}

export default Error404;