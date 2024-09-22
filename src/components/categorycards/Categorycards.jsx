import React from 'react'
import './Categoriescars.css'
import maintainanceServiceParts from "../../assets/categorycards/maintainance parts.png"
import airConditioningParts from "../../assets/categorycards/air conditioning.png"
import beltsChainsAndRollersParts from "../../assets/categorycards/Belts chains and bearings.png"
import bearingsParts from "../../assets/categorycards/bearings.png"
import bodypParts from "../../assets/categorycards/bodyparts.png"
import { useNavigate } from 'react-router-dom'

function Categorycards() {

    const arrayOfCategories = [
        {
            id: "C1",
            image:maintainanceServiceParts,
            name: "Maintainance Service Parts",
            routeKeys:"/Maintainancepartspage"

        },
        {
            id: "C2",
            image:airConditioningParts,
            name: "Air Conditioning",
              routeKeys:"/Airconditioningpartspage"

        },
        {
            id: "C3",
            image:beltsChainsAndRollersParts,
            name: "Belts Chains And Rollers",
              routeKeys:"/Beltschainsandrollers"

        },
        {
            id: "C4",
            image:bearingsParts,
            name: "Bearings",
              routeKeys:"/Bearingspage"

        },
        {
            id: "C5",
            image:bodypParts,
            name: "Body",
              routeKeys:"/Bodypartspage"

        }
    ]

    const navigate = useNavigate()

     function selectCategoryHandler(routeKeyofCategory) {
        navigate(routeKeyofCategory)
    }
  return (
   <>
    {/* <div>Categorycards</div> */}

    <div className="container-fluid" >
        <div className="row category_cards_container" >
        <div className='categorycardcontainer' 
        // style={{border:'2px solid green'}}
        style={{ }}
        >
        {
        arrayOfCategories.map((items) => 
        
      
            <div className=' col-md-2 categoriesCards' onClick={() => selectCategoryHandler(items.routeKeys)} >
            <img src={items.image} alt="" />
            <h4>{items.name}</h4>        
        </div>     
    )
    
    }
    </div>
        </div>
    </div>


   </>
  )
}

export default Categorycards