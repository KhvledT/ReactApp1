import React from 'react'
import style from './Contact.module.css'
import BlackStar from '../../components/BlackStar/BlackStar'

export default function Contact() {
  function styling(...style) {
    return style.join(' ')
  }
  return (
    <>
         <div className={styling(style.contactPage)}>
            <h2 className='text-uppercase'>conatct section</h2>

                <BlackStar/>
                <div className={styling(style.form) + " row container mt-3"}>
                    <input className='form-control mt-4' type="text" placeholder='User Name'/>
                    <input className='form-control mt-4' type="number" placeholder='User Age'/>
                    <input className='form-control mt-4' type="email" placeholder='Email'/>
                    <input className='form-control mt-4' type="password" placeholder='Password'/>
                    <button className='btn btn-primary mt-4'>Send Message</button>
                </div>
         </div>
    </>
  )
}
