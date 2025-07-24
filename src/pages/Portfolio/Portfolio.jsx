import style from './Portfolio.module.css'
import BlackStar from '../../components/BlackStar/BlackStar'
import port1 from '/assets/imgs/poert1.png'
import port2 from '/assets/imgs/port2.png'
import port3 from '/assets/imgs/port3.png'

export default function Portfolio() {

    const imgs =[
        {
            id: 1,
            img: port1
        },
        {
            id: 2,
            img: port2
        },
        {
            id: 3,
            img: port3
        },
        {
            id: 4,
            img: port1
        },
        {
            id: 5,
            img: port2
        },
        {
            id: 6,
            img: port3
        },
    ]

    function styling(...style) {
        return style.join(' ')
    }

    function inner(imgPort) {
        document.getElementById('modal').classList.remove('d-none')
        document.getElementById('modalImg').src = imgPort
    }
    
  return (
    <>
      <div className={styling(style.portfolioPage) + " position-relative"}>
                <h2 className='text-uppercase'>portfolio component</h2>

                <BlackStar/>

                <div className={styling(style.portfolio, "row container mt-3")}>
                    {imgs.map((img) => {
                        return (
                            <div className="col-md-4" key={img.id}>
                                <div className={`${styling(style.inner)} m-4`} onClick={() => inner(img.img)}>
                                    <img className='w-100 rounded' src={img.img} alt="img" />
                                    <div className={`${style.layer} rounded d-flex align-items-center justify-content-center`}>
                                        <i className={`${style.plus} fa-solid fa-plus`}></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div id='modal' className={`${styling(style.modal)} d-none position-absolute top-0 left-0 right-0 bottom-0 w-100 h-100 bg-primary`}>
                    <div className={` d-flex align-items-center justify-content-center h-100`} id='inner'>
                        <i className={`fa-solid fa-xmark text-white ${styling(style.close)}`} onClick={() => document.getElementById('modal').classList.add('d-none')}></i>
                        <img id='modalImg' className='w-25 rounded' src={port1} alt="img" />
                    </div>
                </div>
      </div>
    </>
  )
}