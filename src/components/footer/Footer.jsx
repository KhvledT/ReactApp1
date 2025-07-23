import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
        <div className="footer d-flex justify-content-center">
            <div className="container row text-center p-5">
                <div className="about col-md-4">
                <h3>lOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="about col-md-4">
                <h3>AROUND THE WEB</h3>
                <div className="icons d-flex justify-content-center gap-3">
                    <i className="fa-brands fa-facebook-f border border-2 rounded-circle p-2"></i>
                    <i className="fa-brands fa-twitter border border-2 rounded-circle p-2"></i>
                    <i className="fa-brands fa-linkedin-in border border-2 rounded-circle p-2"></i>
                    <i className="fa-brands fa-dribbble border border-2 rounded-circle p-2"></i>
                </div>
            </div>
            <div className="about col-md-4">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            </div>
        </div>
        <div className="Copyright">
            <p className="text-center py-3 text-white" style={{backgroundColor: "#1A252F", marginBottom: "0"}}>Copyright © Your Website 2025</p>
        </div>
    </>
  )
}
