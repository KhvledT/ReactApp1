import React from 'react'
import './About.css'
import Star from '../../components/Star/Star'

export default function About() {
  return (
    <>
      <div className="aboutPage">
                <h2 className='text-uppercase'>about component</h2>

                <Star/>
                <div className="text row container mt-3">
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                </div>
      </div>
    </>
  )
}
