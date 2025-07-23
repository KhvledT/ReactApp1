import React from 'react'
import style from './Portfolio.module.css'
import BlackStar from '../../components/BlackStar/BlackStar'
import port1 from '/assets/imgs/poert1.png'
import port2 from '/assets/imgs/port2.png'
import port3 from '/assets/imgs/port3.png'

export default function Portfolio() {
    function styling(...style) {
        return style.join(' ')
    }
  return (
    <>
      <div className={styling(style.portfolioPage)}>
                <h2 className='text-uppercase'>portfolio component</h2>

                <BlackStar/>

                <div className={styling(style.portfolio, "row container mt-3")}>
                    <div className="col-md-4">
                        <div className="inner m-4">
                            <img className='w-100 rounded' src="assets/imgs/poert1.png" alt="img" />
                            <div className="layer rounded"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner m-4">
                            <img className='w-100 rounded' src="assets/imgs/port2.png" alt="img" />
                            <div className="layer rounded"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner m-4">
                            <img className='w-100 rounded' src="assets/imgs/port3.png" alt="img" />
                            <div className="layer rounded"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner m-4">
                            <img className='w-100 rounded' src="assets/imgs/poert1.png" alt="img" />
                            <div className="layer rounded"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner m-4">
                            <img className='w-100 rounded' src="assets/imgs/port2.png" alt="img" />
                            <div className="layer rounded"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner m-4">
                            <img className='w-100 rounded' src="assets/imgs/port3.png" alt="img" />
                            <div className="layer rounded"></div>
                        </div>
                    </div>
                </div>
                
      </div>
    </>
  )
}
