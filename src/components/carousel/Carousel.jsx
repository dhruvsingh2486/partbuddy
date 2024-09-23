import React from 'react'
import carausel1 from '../../assets/carausel_images/carausel1.webp'
import carausel2 from '../../assets/carausel_images/carausel2.webp'
import carausel3 from '../../assets/carausel_images/carausel3.webp'
import './Carausel.css'

export const Carousel = () => {
  return (
    <div className='container-fluid'>

        <div className="row">
            <div className="col-md-12">

            <div id="carouselExampleInterval" class="carousel slide carausel" data-bs-ride="carousel" style={{border:"1px solid gray"}}>
  <div class="carousel-inner">
    <div class="carousel-item active " data-bs-interval="2000">
     <div className='crousal_img' style={{display:'flex'}}>
     <img src={carausel1} class="d-block w-50" alt="..." />
     <img src={carausel2} class="d-block w-50" alt="..." />
     </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div className='crousal_img' style={{display:'flex'}}>
      <img src={carausel2} class="d-block w-50" alt="..." />
      <img src={carausel3} class="d-block w-50" alt="..." />
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div className='crousal_img' style={{display:'flex'}}>
      <img src={carausel3} class="d-block w-50" alt="..." />
      <img src={carausel1} class="d-block w-50" alt="..." />
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            </div>
        </div>

    </div>
  )
}
