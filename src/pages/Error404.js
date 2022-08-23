import React from 'react'
import { Link } from 'react-router-dom'


function Error404() {
  return (
    <div className='items_center'>
      <h2 className='text_light'>404 Not found</h2>
      <p className='text_light'>Please go to the <Link to={'/'}>main</Link> page</p>
    </div>
  )
}

export default Error404;