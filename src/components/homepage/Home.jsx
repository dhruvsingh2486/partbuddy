import React from 'react'
import { Carousel } from '../carousel/Carousel'
import Categorycards from '../categorycards/Categorycards'
import Navbar from '../navbar/Navbar'
import '../tc/Tc.css'
import Cards from '../../Componantes/ourcards/Cards'


function Home() {
  return (
    <div>
      <Navbar/>
        <Carousel/>
        <Categorycards/>
        <Cards/>
    </div>
  )
}

export default Home