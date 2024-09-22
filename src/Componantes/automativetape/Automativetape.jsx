import React from "react";
// import "./automative.css";
import "../../components/tc/Tc.css";
import "../../components/maintainanceservicepartlistpage/Maintainancepart.css";
import automativetape1 from "../../asstes/automativetape1.webp";
import automativetape2 from "../../asstes/automativetape2.webp";
import automativetape3 from "../../asstes/automativetape3.webp";
import automativetape4 from "../../asstes/automativetape4.webp";
import automativetape5 from "../../asstes/automativetape5.webp";
import automativetape6 from "../../asstes/automativetape6.webp";
import automativetape7 from "../../asstes/automativetape7.webp";
import automativetape8 from "../../asstes/automativetape8.webp";
import antenaimage1 from "../../asstes/antena1.webp";
import antenaimage2 from "../../asstes/antena2.webp";
import antenaimage3 from "../../asstes/antena3.webp";
import antenaimage4 from "../../asstes/antena4.webp";
import antenaimage5 from "../../asstes/antena5.webp";
import antenaimage6 from "../../asstes/antena6.webp";
import antenaimage7 from "../../asstes/antena7.webp";
import antenaimage8 from "../../asstes/antena8.webp";
import beamaxle1 from "../../asstes/Beamaxle1.webp";
import beamaxle2 from "../../asstes/Beamaxle2.webp";
import beamaxle3 from "../../asstes/Beamaxle3.webp";
import beamaxle4 from "../../asstes/Beamaxle4.webp";
import beamaxle5 from "../../asstes/Beamaxle5.webp";
import beamaxle6 from "../../asstes/Beamaxle6.webp";
import beamaxle7 from "../../asstes/Beamaxle7.webp";
import beamaxle8 from "../../asstes/Beamaxle8.webp";
import bumpertraker1 from "../../asstes/bumperbraket1.webp";
import bumpertraker8 from "../../asstes/bumperbraket8.webp";
import bumpertraker2 from "../../asstes/bumperbraket2.webp";
import bumpertraker3 from "../../asstes/bumperbraket3.webp";
import bumpertraker4 from "../../asstes/bumperbraket4.webp";
import bumpertraker5 from "../../asstes/bumperbraket5.webp";
import bumpertraker6 from "../../asstes/bumperbraket6.webp";
import bumpertraker7 from "../../asstes/bumperbraket7.webp";
import bumpertrim1 from "../../asstes/bumpertrim1.webp"
import bumpertrim2 from "../../asstes/bumpertrim2.webp"
import bumpertrim3 from "../../asstes/bumpertrim3.webp"
import bumpertrim4 from "../../asstes/bumpertrim4.webp"
import bumpertrim5 from "../../asstes/bumpertrim5.webp"
import bumpertrim6 from "../../asstes/bumpertrim6.webp"
import bumpertrim7 from "../../asstes/bumpertrim7.webp"
import bumpertrim8 from "../../asstes/bumpertrim8.webp"
import canopy1 from "../../asstes/canopy1.webp"
import canopy2 from "../../asstes/canopy2.webp"
import canopy3 from "../../asstes/canopy3.webp"
import canopy4 from "../../asstes/canopy4.webp"
import canopy5 from "../../asstes/canopy5.webp"
import canopy6 from "../../asstes/canopy6.webp"
import centrallock1 from "../../asstes/cantrallock1.webp"
import centrallock2 from "../../asstes/cantrallock2.webp"
import centrallock3 from "../../asstes/cantrallock3.webp"
import centrallock4 from "../../asstes/cantrallock4.webp"
import centrallock5 from "../../asstes/cantrallock5.webp"
import centrallock6 from "../../asstes/cantrallock6.webp"
import centrallock7 from "../../asstes/cantrallock7.webp"
import centrallock8 from "../../asstes/cantrallock8.webp"
import centrallock9 from "../../asstes/cantrallock9.webp"
import centrallock10 from "../../asstes/cantrallock10.webp"
import mirrorglass1 from "../../asstes/mirrorglass1.webp"
import mirrorglass2 from "../../asstes/mirrorglass2.webp"
import mirrorglass3 from "../../asstes/mirrorglass3.webp"
import mirrorglass4 from "../../asstes/mirrorglass4.webp"
import mirrorglass5 from "../../asstes/mirrorglass5.webp"
import mirrorglass6 from "../../asstes/mirrorglass6.webp"
import mirrorglass7 from "../../asstes/mirrorglass7.webp"
import mirrorglass8 from "../../asstes/mirrorglass8.webp"
import indicator1 from "../../asstes/indicator1.webp"
import indicator2 from "../../asstes/indicator2.webp"
import indicator3 from "../../asstes/indicator3.webp"
import indicator4 from "../../asstes/indicator4.webp"
import indicator5 from "../../asstes/indicator5.webp"
import indicator6 from "../../asstes/indicator6.webp"
import indicator7 from "../../asstes/indicator7.webp"
import indicator8 from "../../asstes/indicator8.webp"
import indicator9 from "../../asstes/indicator9.webp"
import indicator10 from "../../asstes/indicator10.webp"
import indicator11 from "../../asstes/indicator11.webp"
import indicator12 from "../../asstes/indicator12.webp"
import fronwindshield1 from "../../asstes/frontwindshield1.webp"
import fronwindshield2 from "../../asstes/frontwindshield2.webp"
import fronwindshield3 from "../../asstes/frontwindshield3.webp"
import fronwindshield4 from "../../asstes/frontwindshield4.webp"
import fronwindshield5 from "../../asstes/frontwindshield5.webp"
import fronwindshield6 from "../../asstes/frontwindshield6.webp"
import fronwindshield7 from "../../asstes/frontwindshield7.webp"
import fronwindshield8 from "../../asstes/frontwindshield8.webp"
import rarewindshield1 from "../../asstes/rarewindshield1.webp"
import rarewindshield2 from "../../asstes/rarewindshield2.webp"
import rarewindshield3 from "../../asstes/rarewindshield3.webp"
import rarewindshield4 from "../../asstes/rarewindshield4.webp"
import rarewindshield5 from "../../asstes/rarewindshield5.webp"
import rarewindshield6 from "../../asstes/rarewindshield6.webp"
import rarewindshield7 from "../../asstes/rarewindshield7.webp"
import rarewindshield8 from "../../asstes/rarewindshield8.webp"
import { useNavigate } from "react-router-dom";
function Automativetape() {
  const navigate = useNavigate()
  const autotape = [
    {
      id: "at1",
      image: automativetape1,
      title: "Sill Tape Carbon Black",
      price: "₹605.00",
    },
    {
      id: "at2",
      image: automativetape2,
      title: "Trimmable Carbon Finish Tape",
      price: "₹1,060.0",
    },
    {
      id: "at3",
      image: automativetape3,
      title: "Trimmable Carbon Finish Lip Tape",
      price: "₹605.00",
    },
    {
      id: "at4",
      image: automativetape4,
      title:
        "Universal Multifunctional Light",
      price: "₹2,166.0",
    },
    {
      id: "at5",
      image: automativetape5,
      title: " BLACK TAPEFRT DOOR FRAME UPR",
      price: "₹646.00",
    },
    {
      id: "at6",
      image: automativetape6,
      title: "TAPE BLACK OUT QTR PANEL LH",
      price: "₹573.00",
    },
    {
      id: "at7",
      image: automativetape7,
      title: "TAPE, R. FR. DOOR SASH",
      price: "₹868.00",
    },
    {
      id: "at8",
      image: automativetape8,
      title: "INSULATION PLATE(SELF-ADHESIVE)",
      price: "₹987.00",
    },
  ];
  const antena = [
    {
      id: "an1",
      image: antenaimage1,
      title: "Universal Shark Fin Antenna Roof - Black",
      price: "₹549.00",
    },
    {
      id: "an2",
      image: antenaimage2,
      title: "Universal Shark Fin Antenna Roof - Silver",
      price: "₹549.00",
    },
    {
      id: "an3",
      image: antenaimage3,
      title: "Universal Shark Fin Antenna Roof - White",
      price: "₹549.00",
    },
    {
      id: "an4",
      image: antenaimage4,
      title: "ROD AASY",
      price: "₹582.00",
    },
    {
      id: "an5",
      image: antenaimage5,
      title: "POLE-ROOF ANTENNA",
      price: "₹1,186.0",
    },
    {
      id: "an6",
      image: antenaimage6,
      title: "ROOF ANTENNA FOR U203",
      price: "₹1,241.0",
    },
    {
      id: "an7",
      image: antenaimage7,
      title: "ROD TYPE AERIAL",
      price: "₹1,898.0",
    },
    {
      id: "an8",
      image: antenaimage8,
      title: "SUPPORT RADIO AERIAL",
      price: "₹462.00",
    },
  ];
  const beamaxle = [
    {
      id: "ba1",
      image: beamaxle1,
      title: "AXLEREAR",
      price: "₹3,327.0",
    },
    {
      id: "ba2",
      image: beamaxle2,
      title: "MEMBER,FRONT CROSS",
      price: "₹1,030.0",
    },
    {
      id: "ba3",
      image: beamaxle3,
      title: "FRAME,FRONT SUSPENSION",
      price: "₹6,650.0",
    },
    {
      id: "ba4",
      image: beamaxle4,
      title: "TORSION,AXLE COMPLETE",
      price: "₹11,531",
    },
    {
      id: "ba5",
      image: beamaxle5,
      title: "TORSION,AXLE COMPLETE",
      price: "₹7,784.0",
    },
    {
      id: "ba6",
      image: beamaxle6,
      title: "TWIST BEAM STRUCTURE ASSY WELDED STRUCTURE",
      price: "₹12,915",
    },
    {
      id: "ba7",
      image: beamaxle7,
      title: "AXLE SET REAR",
      price: "₹8,990.0",
    },
    {
      id: "ba8",
      image: beamaxle8,
      title: "AXLE,RR",
      price: "₹11,115",
    },
  ];
  const bumpertraker = [
    {
      id: "bt1",
      image: bumpertraker1,
      title: "BRACKET ASSY REAR BUMPER LH",
      price: "₹606.00",
    },
    {
      id: "bt2",
      image: bumpertraker2,
      title: "BRACKET ASSY REAR BUMPER RH",
      price: "₹606.00",
    },
    {
      id: "bt3",
      image: bumpertraker3,
      title: "BRACKET ASSY BUMPER FRT LH",
      price: "₹1,521.0",
    },
    {
      id: "bt4",
      image: bumpertraker4,
      title: "BRACKET ASSY BUMPER FRT RH",
      price: "₹1,521.00",
    },
    {
      id: "bt5",
      image: bumpertraker5,
      title: "BRKT ASSY-FRT BUMPER UPR-RH",
      price: "₹585.00",
    },
    {
      id: "bt6",
      image: bumpertraker6,
      title: "BRKT ASS Y-R/BPR SIDE INR RH",
      price: "₹664.00",
    },
    {
      id: "bt7",
      image: bumpertraker7,
      title: "BRACKET-FR BUMPER UPR SIDE MTG",
      price: "₹705.00",
    },
    {
      id: "bt8",
      image: bumpertraker8,
      title: "RETAINER NO 1 BMPR",
      price: "₹709.00",
    },
  ];
  const bumpertrim = [
    {
      id: "btrim1",
      image: bumpertrim1,
      title: "Bumper Protector Guard (Set of 4) - Black",
      price: "₹570.00",
    },
    {
      id: "btrim2",
      image: bumpertrim2,
      title: "ASSY FUEL FILLER",
      price: "₹710.00",
    },
    {
      id: "btrim3",
      image: bumpertrim3,
      title: "ASSY FOG LAMP BEZEL CHROME - LH",
      price: "₹656.00",
    },
    {
      id: "btrim4",
      image: bumpertrim4,
      title: "BUMPER GRILL-L LOWER",
      price: "₹697.00",
    },
    {
      id: "btrim5",
      image: bumpertrim5,
      title: "GARNISH,FR BUMPER LOWER",
      price: "₹610.00",
    },
    {
      id: "btrim6",
      image: bumpertrim6,
      title: "GARNISH RR BUMPER LOWER",
      price: "₹835.00",
    },
    {
      id: "btrim7",
      image: bumpertrim7,
      title: "SKID PLATE LOWER",
      price: "₹823.00",
    },
    {
      id: "btrim8",
      image: bumpertrim8,
      title: "MAT REAR BUMPER-REFRESH",
      price: "₹904.00",
    },
  ];
  const canopy = [
    {
      id: "cy1",
      image: canopy1,
      title: "CANOPY ASSY ROLL OVER LH",
      price: "₹3,363.0",
    },
    {
      id: "cy2",
      image: canopy2,
      title: "CANOPY ASSY ROLL OVER RH",
      price: "₹3,363.0",
    },
    {
      id: "cy3",
      image: canopy3,
      title: "TOP DECK ASSY(OLIVE GREEN)",
      price: "₹6,755.0",
    },
    {
      id: "cy4",
      image: canopy4,
      title: "KIT CANOPY COMPLETE",
      price: "₹11,948.0",
    },
    {
      id: "cy5",
      image: canopy5,
      title: "DECK ASSY, TOP",
      price: "₹7,711.0",
    },
    {
      id: "cy6",
      image: canopy6,
      title: "KIT CANOPY",
      price: "₹13,857.0",
    },
  ];
  const centrallock = [
    {
      id:"cL1",
      image: centrallock1,
      title:"Lock Cylinder and Key Set (Set of 5)",
      price:"1,128.00",
    },
    {
      id:"cL2",
      image: centrallock2,
      title:"SWITCH ASSY, FOR PASSENGERS SIDE",
      price:"669.00",
    },
    {
      id:"cL3",
      image: centrallock3,
      title:"SWITCH FOR ELECTRIC WINDOW REGULATOR",
      price:"718.00",
    },
    {
      id:"cL4",
      image: centrallock4,
      title:"POWER WINDOW SUB SWITCH",
      price:"566.00",
    },
    {
      id:"cL5",
      image: centrallock5,
      title:"SWITCH ORVM",
      price:"965.00",
    },
    {
      id:"cL6",
      image: centrallock6,
      title:"CONTROLLER ASSY, IMMOBILIZER",
      price:"1,055.00",
    },
    {
      id:"cL7",
      image: centrallock7,
      title:"SWITCHTAIL GATE DOOR RELEASE",
      price:"1,009.00",
    },
    {
      id:"cL8",
      image: centrallock8,
      title:"ORVM SWITCH",
      price:"1,057.00",
    },
    {
      id:"cL9",
      image: centrallock9,
      title:"SWITCH TAILGATE DOOR RELEASE",
      price:"1,098.00",
    },
    {
      id:"cL10",
      image: centrallock10,
      title:"SWITCH ASSY",
      price:"1,377.00",
    },
  ];
  const mirrorglass = [
    {
      id:"mg1",
      image: mirrorglass1,
      title:"GLASS PLATE SUB-ASSY. RH",
      price:"₹667.00",
    },
    {
      id:"mg2",
      image: mirrorglass2,
      title:"G/HOLDER ASSY-O/S RR VIEW,RH",
      price:"₹650.00",
    },
    {
      id:"mg3",
      image: mirrorglass3,
      title:"MIRROR & HOLDER-OUTSIDE RR,RH",
      price:"₹585.00",
    },
    {
      id:"mg4",
      image: mirrorglass4,
      title:"GLASS PLATE ASSY RH",
      price:"₹803.00",
    },
    {
      id:"mg5",
      image: mirrorglass5,
      title:"GLASS PLATE ASSY LH",
      price:"₹803.00",
    },
    {
      id:"mg6",
      image: mirrorglass6,
      title:"GLASS, RH",
      price:"₹773.00",
    },
    {
      id:"mg7",
      image: mirrorglass7,
      title:"G/HOLDER ASSY-O/S RR VIEW,RH",
      price:"₹566.00",
    },
    {
      id:"mg8",
      image: mirrorglass8,
      title:"G/HOLDER ASSY-O/S RR VIEW,LH",
      price:"₹566.00",
    },
  ]
  const indicator = [
    {
      id:"indi1",
      image: indicator1,
      title:"TURN SIGNAL",
      price:"₹621.00",
    },
    {
      id:"indi2",
      image: indicator2,
      title:"SIDE TURN INDICATOR ASSY RH",
      price:"₹648.00",
    },
    {
      id:"indi3",
      image: indicator3,
      title:"BLINKER ASSY,ORVM,RH",
      price:"₹775.00",
    },
    {
      id:"indi4",
      image: indicator4,
      title:"SIDE TURN INDICATOR ORVM RH",
      price:"₹713.00",
    },
    {
      id:"indi5",
      image: indicator5,
      title:"LAMP ASSEMBLY, RH",
      price:"₹774.00",
    },
    {
      id:"indi6",
      image: indicator6,
      title:"LAMP ASSY, SIDE TURN SIG, RH",
      price:"₹855.00",
    },
    {
      id:"indi7",
      image: indicator7,
      title:"LAMP ASSY, TURN SIGNAL RH",
      price:"₹890.00",
    },
    {
      id:"indi8",
      image: indicator8,
      title:"LAMP ASSY, TURN SIGNAL LH",
      price:"₹965.00",
    },
    {
      id:"indi9",
      image: indicator9,
      title:"LAMP ASSY, SIDE TURN SIG, RH",
      price:"₹1,020.00",
    },
    {
      id:"indi10",
      image: indicator10,
      title:"BLINKER ASSY. RH",
      price:"₹1,077.00",
    },
    {
      id:"indi11",
      image: indicator11,
      title:"LAMP ASSY, SIDE TURN SIG, LH",
      price:"₹1,083.00",
    },
    {
      id:"indi12",
      image: indicator12,
      title:"BLINKER ASSY. LH",
      price:"₹1,166.00",
    },
  ];
  const frontwindshield = [
    {
      id:"fw1",
      image:fronwindshield1,
      title:"GLASS WINDSHIELD",
      price:"₹2,528.00",
    },
    {
      id:"fw2",
      image:fronwindshield2,
      title:"GLASS ASSY-WINDSHIELD",
      price:"₹4,922.00",
    },
    {
      id:"fw3",
      image:fronwindshield3,
      title:"ASSY WIND SCREEN GLASS TINTED",
      price:"₹6,001.00",
    },
    {
      id:"fw4",
      image:fronwindshield4,
      title:"GLASS,WINDSHIELD",
      price:"₹3,060.00",
    },
    {
      id:"fw5",
      image:fronwindshield5,
      title:"GLASS WINDSHIELD",
      price:"₹2,926.00",
    },
    {
      id:"fw6",
      image:fronwindshield6,
      title:"GLASS, WINDSHIELD",
      price:"₹3,305.00",
    },
    {
      id:"fw7",
      image:fronwindshield7,
      title:"WIND SCREEN GLASS(DELUXE)",
      price:"₹3,476.00",
    },
    {
      id:"fw8",
      image:fronwindshield8,
      title:"GLASS ASSY - WINDSHIELD",
      price:"₹3,320.00",
    },
  ];
  const rarewindshield = [
    {
      id:"rw1",
      image:rarewindshield1,
      title:"GLASS, BACK DOOR WINDOW (CLEAR)",
      price:"₹1,335.00",
    },
    {
      id:"rw2",
      image:rarewindshield2,
      title:"GLASS ASSY-REAR WINDOW",
      price:"₹1,653.00",
    },
    {
      id:"rw3",
      image:rarewindshield3,
      title:"GLASS-REAR WINDOW",
      price:"₹2,061.00",
    },
    {
      id:"rw4",
      image:rarewindshield4,
      title:"WINDOW, L/GATE",
      price:"₹2,103.00",
    },
    {
      id:"rw5",
      image:rarewindshield5,
      title:"ASSY GLASS DOOR BACK - BASE",
      price:"₹2,148.00",
    },
    {
      id:"rw6",
      image:rarewindshield6,
      title:"GLASS ASSY-REAR WINDOW",
      price:"₹3,041.00",
    },
    {
      id:"rw7",
      image:rarewindshield7,
      title:"GLASS-TAIL GATE",
      price:"₹3,094.00",
    },
    {
      id:"rw8",
      image:rarewindshield8,
      title:"GLASS ASSY-TAIL GATE",
      price:"₹3,200.00",
    },
  ];
  const openproduct = (item) =>{
    navigate(`/Productpage/${item.id}`)
  }

  return (
    <>
   <div 
    style={{justifyContent:'center', textAlign:'center'}}
    >

    <h1 className='text-shadow'>Air Conditioning Parts</h1>

     <div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Auto Tape</h3>
{/* <div className='col-md-12'> */}


{
  autotape.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>
<div className="row"
 style={{gap:'4vw', margin:'50px 20px'}}
>

<h3 className='text-shadow'>Antena</h3>
{/* <div className='col-md-12'> */}


{
  antena.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>

     

<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Beamaxle</h3>
{/* <div className='col-md-12'> */}


{
  beamaxle.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>

<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Bumper Traker</h3>
{/* <div className='col-md-12'> */}


{
  bumpertraker.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>

<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Bumper Trim</h3>
{/* <div className='col-md-12'> */}


{
  bumpertrim.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>

<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Canopy</h3>
{/* <div className='col-md-12'> */}


{
  canopy.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>

<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Central Lock</h3>
{/* <div className='col-md-12'> */}


{
  centrallock.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>

<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Mirror Glass</h3>
{/* <div className='col-md-12'> */}


{
  mirrorglass.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>


<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>


<h3 className='text-shadow'>Indicator</h3>
{/* <div className='col-md-12'> */}


{
  indicator.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>

<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Front Wind Shield</h3>
{/* <div className='col-md-12'> */}


{
  frontwindshield.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>
<div className="row" style={{gap:'4vw', margin:'50px 20px'}}>

<h3 className='text-shadow'>Rare Wind shield</h3>
{/* <div className='col-md-12'> */}


{
  rarewindshield.map((item)=>(
    <div className='col-md-3 product_card '
    onClick={() => openproduct(item)}
>
      <img className='product_image' src={item.image} alt="" />
      <p className='product_name'>
        {item.title}
      </p>
      <p className='product_price'>
        {item.price}
      </p>
      <h6 className='product_brand'>
        {item.brand}
      </h6>
    </div>
  ))
}
{/* </div> */}

</div>
</div>
    </>
  );
}

export default Automativetape;
