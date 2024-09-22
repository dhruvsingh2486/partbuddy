import React from 'react'
import "./Cards.css"
function Cards() {
  return (
    <>
    <div className='container'>
    <div className="row">
      <div className="col-md-12">
        <h1 className='heading'>Why Choose <span>Aftermarket Products?</span></h1>
      </div>
    </div>
    <div className="row">
        <div className="col-md-4 card" style={{width:"22rem", height:"20rem"}}>
        <div className='card1_mng' style={{marginTop:"9%"}}>
        <img style={{
         width:"40%"
        }} className='img1_mng' src="/photos/aftermaerket product1.png" alt="" />
            <h3 className='title'>Original Products</h3>
            <p className='card_txt1'>Only reliable parts from trusted Aftermarket brands</p>
        </div>
        </div>
        <div className="col-md-4 card" style={{width:"22rem", height:"20rem"}}>
        <div className='card1_mng'>
        <img className='img1_mng' src="/photos/aftermaerket product2.png" alt="" />
            <h3 className='title'>Affordable Rates</h3>
            <p className='card_txt2'>Repairing a damaged vehicle can be expensive. Using the aftermarket products is a good solution if you're on a budget</p>
        </div>

        </div>
        <div className="col-md-4 card" style={{width:"22rem", height:"20rem",}}>
        <div className='card1_mng'>
        <img className='img1_mng' src="/photos/aftermaerket product3.png" alt="" />
            <h3 className='title2'>Wide variety</h3>
            <p className='card_txt'>We have something for everyone when it comes to aftermarket products. Just apply the "Aftermarket" filter in the catalogue and check the offers</p>
        </div>

        </div>
    </div>
      
    </div>
    </>

  )
}

export default Cards
