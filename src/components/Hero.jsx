import React from 'react'

function Hero() {
  return (
    <div className='hero vh-100 p-lg-3 p-sm-0 '>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 p-lg-3 p-sm-0 d-flex justify-content-center flex-column align-content-center">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-appointment-7301315-5979639.png" alt="" width={450} className='mob-img img-fluid ms-3 d-lg-none d-sm-block'/>
          <h1 className='w-100 fw-bold  m-lg-5 m-sm-5 p-3 heroTitle ' >
            Smart <span className='text-primary'>AI</span> <br className='br' />scheduling <br /> <span className='text-primary'>ahead</span>
          <p className='fs-4 mt-4 w-lg-75 fw-bold text-muted' style={{fontFamily:"'Indie Flower', cursive"}}>
          Innovative hospital appointment scheduling solution technology use AI for smart decision-making to minimize patient wait times and improve healthcare efficiency.
          </p>
          </h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center">

          <img src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-appointment-7301315-5979639.png"className='des-img img-fluid w-100 rounded-5 ' alt="" />
        </div>

      </div>
    </div>
  )
}

export default Hero
