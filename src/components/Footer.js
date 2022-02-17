import React from 'react'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>
        <p className={style.copyright_text}>
            Created by  
            <a href="https://github.com/nafasebra"> nafasebra</a>
        </p>
    </div>
  )
}

export default Footer