import React from 'react'
import style from './StartPage.module.css'
import Srar from '../../components/Star/Star'
import avatar from '/assets/imgs/avataaars.svg'

export default function StartPage() {
  function styling(...style) {
    return style.join(' ')
  }
  return (
    <>
      <div className={styling(style.startPage)}>
          <img className={styling(style.avatar)} src={avatar} alt="logo" />
          <h2>Start Framework</h2>
          <Srar/>
          <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
