import React from 'react'
import {Link} from 'react-router-dom'

function Error404() {
  return (
    <div className=''>
      <h2>404 Not found</h2>
      <p>Please go to the <Link to={'/'}>main</Link> page</p>
    </div>
  )
}

export default Error404