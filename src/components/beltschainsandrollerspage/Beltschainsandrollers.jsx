import React from "react";
import "../../components/maintainanceservicepartlistpage/Maintainancepart.css";
import "../tc/Tc.css";

import alterpullay1 from "../../asstes/alternatorpullay1.webp";
import alterpullay2 from "../../asstes/alternatorpullay2.webp";
import alterpullay3 from "../../asstes/alternatorpullay3.webp";
import alterpullay4 from "../../asstes/alternatorpullay4.webp";
import alterpullay5 from "../../asstes/alternatorpullay5.webp";
import alterpullay6 from "../../asstes/alternatorpullay6.webp";
import alterpullay7 from "../../asstes/alternatorpullay7.webp";
import alterpullay8 from "../../asstes/alternatorpullay8.webp";
import alterpullay9 from "../../asstes/alternatorpullay9.webp";
import alterpullay10 from "../../asstes/alternatorpullay10.webp";
import alterpullay11 from "../../asstes/alternatorpullay11.webp";
import alterpullay12 from "../../asstes/alternatorpullay12.webp";
import beltpullay1 from "../../asstes/beltpullay1.webp";
import beltpullay2 from "../../asstes/beltpullay2.webp";
import beltpullay3 from "../../asstes/beltpullay3.webp";
import beltpullay4 from "../../asstes/beltpullay4.webp";
import beltpullay5 from "../../asstes/beltpullay5.webp";
import beltpullay6 from "../../asstes/beltpullay6.webp";
import beltpullay7 from "../../asstes/beltpullay7.webp";
import beltpullay8 from "../../asstes/beltpullay8.webp";
import beltpullay9 from "../../asstes/beltpullay9.webp";
import beltpullay10 from "../../asstes/beltpullay10.webp";
import crankpullay1 from "../../asstes/crankpullay1.webp";
import crankpullay2 from "../../asstes/crankpullay2.webp";
import crankpullay3 from "../../asstes/crankpullay3.webp";
import crankpullay4 from "../../asstes/crankpullay4.webp";
import crankpullay5 from "../../asstes/crankpullay5.webp";
import crankpullay6 from "../../asstes/crankpullay6.webp";
import crankpullay7 from "../../asstes/crankpullay7.webp";
import crankpullay8 from "../../asstes/crankpullay8.webp";
import defpullay1 from "../../asstes/deflectionpullay1.webp";
import defpullay2 from "../../asstes/deflectionpullay2.webp";
import defpullay3 from "../../asstes/deflectionpullay3.webp";
import defpullay4 from "../../asstes/deflectionpullay4.webp";
import defpullay5 from "../../asstes/deflectionpullay5.webp";
import defpullay6 from "../../asstes/deflectionpullay6.webp";
import defpullay7 from "../../asstes/deflectionpullay7.webp";
import defpullay8 from "../../asstes/deflectionpullay8.webp";
import defpullay9 from "../../asstes/deflectionpullay9.webp";
import tbelt1 from "../../asstes/timingbelt1.webp";
import tbelt2 from "../../asstes/timingbelt2.webp";
import tbelt3 from "../../asstes/timingbelt3.webp";
import tbelt4 from "../../asstes/timingbelt4.webp";
import tbelt5 from "../../asstes/timingbelt5.webp";
import tbelt6 from "../../asstes/timingbelt6.webp";
import tbelt7 from "../../asstes/timingbelt7.webp";
import tbelt8 from "../../asstes/timingbelt8.webp";
import beltkit1 from "../../asstes/beltkit1.webp";
import beltkit2 from "../../asstes/beltkit2.webp";
import beltkit3 from "../../asstes/beltkit3.webp";
import beltkit4 from "../../asstes/beltkit4.webp";
import beltkit5 from "../../asstes/beltkit5.webp";
import beltkit6 from "../../asstes/beltkit6.webp";
import beltkit7 from "../../asstes/beltkit7.webp";
import beltkit8 from "../../asstes/beltkit8.webp";
import tchain1 from "../../asstes/chaintime1.webp";
import tchain2 from "../../asstes/chaintime2.webp";
import tchain3 from "../../asstes/chaintime3.webp";
import tchain4 from "../../asstes/chaintime4.webp";
import tchain5 from "../../asstes/chaintime5.webp";
import tchain6 from "../../asstes/chaintime6.webp";
import tchain7 from "../../asstes/chaintime7.webp";
import tchain8 from "../../asstes/chaintime8.webp";
import tchain9 from "../../asstes/chaintime9.webp";
import tchain10 from "../../asstes/chaintime10.webp";
import gchain1 from "../../asstes/guidechaine1.webp";
import gchain2 from "../../asstes/guidechaine2.webp";
import gchain3 from "../../asstes/guidechaine3.webp";
import gchain4 from "../../asstes/guidechaine4.webp";
import gchain5 from "../../asstes/guidechaine5.webp";
import gchain6 from "../../asstes/guidechaine6.webp";
import gchain7 from "../../asstes/guidechaine7.webp";
import gchain8 from "../../asstes/guidechaine8.webp";
import gchain9 from "../../asstes/guidechaine9.webp";
import vbelt1 from "../../asstes/vbelt1.webp";
import vbelt2 from "../../asstes/vbelt2.webp";
import vbelt3 from "../../asstes/vbelt3.webp";
import vbelt4 from "../../asstes/vbelt4.webp";
import vbelt5 from "../../asstes/vbelt5.webp";
import vbelt6 from "../../asstes/vbelt6.webp";
import vbelt7 from "../../asstes/vbelt7.webp";
import vbelt8 from "../../asstes/vbelt8.webp";
import vbelt9 from "../../asstes/vbelt9.webp";
import vbelt10 from "../../asstes/vbelt10.webp";
import vbelt11 from "../../asstes/vbelt11.webp";
import vbelt12 from "../../asstes/vbelt12.webp";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
export const Beltschainsandrollers = () => {
  const navigate = useNavigate();

  const alternatorpullay = [
    {
      id: "alterpullay1",
      image: alterpullay1,
      title: "PULLEY, GEN",
      price: "₹2,027.00",
      comp: "Schaeffler (LuK, INA, FAG)",
    },
    {
      id: "alterpullay2",
      image: alterpullay2,
      title: "Alternator Pulley",
      price: "₹2,373.00",
      comp: "Schaeffler (LuK, INA, FAG)",
    },
    {
      id: "alterpullay3",
      image: alterpullay3,
      title: "PULLEY-6PK (RANE POWER STG.PUMP)",
      price: "₹616.00",
      comp: "TATA",
    },
    {
      id: "alterpullay4",
      image: alterpullay4,
      title: "PULLEY-GENERATOR",
      price: "₹1,186.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "alterpullay5",
      image: alterpullay5,
      title: "PULLEY",
      price: "₹2,288.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
    {
      id: "alterpullay6",
      image: alterpullay6,
      title: "PULLEY ASSY",
      price: "₹496.00",
      comp: "Nissan / Renault",
    },
    {
      id: "alterpullay7",
      image: alterpullay7,
      title: "REPAIR KIT FORALTERNATOR",
      price: "₹468.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
    {
      id: "alterpullay8",
      image: alterpullay8,
      title: "PULLEY, ALTERNATOR W/CLUTCH",
      price: "₹3,687.00",
      comp: "Toyota / Lexus",
    },
    {
      id: "alterpullay9",
      image: alterpullay9,
      title: "PULLEY (4 GROOVE)",
      price: "₹444.00",
      comp: "CHEVROLET",
    },
    {
      id: "alterpullay10",
      image: alterpullay10,
      title: "PULLEY,GEN",
      price: "₹5,700.00",
      comp: "CHEVROLET",
    },
    {
      id: "alterpullay11",
      image: alterpullay11,
      title: "PULLEY",
      price: "₹956.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "alterpullay12",
      image: alterpullay12,
      title: "PULLEY, ALTERNATOR W/CLUTCH",
      price: "₹3,967.00",
      comp: "Toyota / Lexus",
    },
  ];
  const beltpullay = [
    {
      id: "beltpullay1",
      image: beltpullay1,
      title: "PULLEY ASSY-A/C COMPRESSOR",
      price: "₹4,116.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "beltpullay2",
      image: beltpullay2,
      title: "Tensioner Pulley, Timing Belt",
      price: "₹719.00",
      comp: "GATES",
    },
    {
      id: "beltpullay3",
      image: beltpullay3,
      title: "Tensioner Pulley, Timing Belt",
      price: "₹870.00",
      comp: "SMR BEARINGS",
    },
    {
      id: "beltpullay4",
      image: beltpullay4,
      title: "Tensioner Pulley, Timing Belt",
      price: "₹1,147.00",
      comp: "OPTIMAL",
    },
    {
      id: "beltpullay5",
      image: beltpullay5,
      title: "Idler Pulley, Timing Belt",
      price: "₹547.00",
      comp: "SBM",
    },
    {
      id: "beltpullay6",
      image: beltpullay6,
      title: "Idler Pulley, V-Ribbed Belt",
      price: "₹1,549.00",
      comp: "GATES",
    },
    {
      id: "beltpullay7",
      image: beltpullay7,
      title: "PULLEY, GEN",
      price: "₹2,027.00",
      comp: "Schaeffler (LuK, INA, FAG)",
    },
    {
      id: "beltpullay8",
      image: beltpullay8,
      title: "Alternator Pulley",
      price: "₹2,373.00",
      comp: "Schaeffler (LuK, INA, FAG)",
    },
    {
      id: "beltpullay9",
      image: beltpullay9,
      title: "Tensioner Pulley, V-Ribbed Belt",
      price: "₹2,571.00",
      comp: "SMR",
    },
    {
      id: "beltpullay10",
      image: beltpullay10,
      title: "Tensioner Pulley, Timing Belt",
      price: "₹494.00",
      comp: "SMR",
    },
  ];
  const crankpullay = [
    {
      id: "cpullay1",
      image: crankpullay1,
      title: "ASSY.INT.VIB.DAMPER (5-GROOVES) (HODEK)",
      price: "₹1,748.00",
      comp: "TATA",
    },
    {
      id: "cpullay2",
      image: crankpullay2,
      title: "PULLEY DAMPER",
      price: "₹3,165.00",
      comp: "MAHINDRA",
    },
    {
      id: "cpullay3",
      image: crankpullay3,
      title: "PULLEY, CRANK TIMING BELT",
      price: "₹836.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "cpullay4",
      image: crankpullay4,
      title: "CRANK SHAFT PULLEY",
      price: "₹1,109.00",
      comp: "TATA",
    },
    {
      id: "cpullay5",
      image: crankpullay5,
      title: "PULLEY CRANKSHA",
      price: "₹1,231.00",
      comp: "Nissan / Renault",
    },
    {
      id: "cpullay6",
      image: crankpullay6,
      title: "PULLEY CR SHF",
      price: "₹2,299.00",
      comp: "CHEVROLET",
    },
    {
      id: "cpullay7",
      image: crankpullay7,
      title: "PULLEY-DAMPER",
      price: "₹2,349.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "cpullay8",
      image: crankpullay8,
      title: "PULLEY - CRANKSHAFT",
      price: "₹2,499.00",
      comp: "FORD",
    },
  ];
  const deflationpullay = [
    {
      id: "defpullay1",
      image: defpullay1,
      title: "ADJUSTER ASSY,TENSIONER",
      price: "₹1,000.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "defpullay2",
      image: defpullay2,
      title: "TENSIONER, DRV BELT",
      price: "₹2,225.00",
      comp: "CHEVROLET",
    },
    {
      id: "defpullay3",
      image: defpullay3,
      title: "ASSEMBLY AUTO TENSIONER",
      price: "₹2,672.00",
      comp: "TATA",
    },
    {
      id: "defpullay4",
      image: defpullay4,
      title: "PULLEY - DRIVE BELT",
      price: "₹677.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "defpullay5",
      image: defpullay5,
      title: "Tensioner Pulley, Timing Belt",
      price: "₹719.00",
      comp: "GATES",
    },
    {
      id: "defpullay6",
      image: defpullay6,
      title: "Tensioner Pulley, Timing Belt",
      price: "₹870.00",
      comp: "SMR BEARINGS",
    },
    {
      id: "defpullay7",
      image: defpullay7,
      title: "TENSIONER HYDRAULIC (BORGWARNER)",
      price: "₹840.00",
      comp: "MAHINDRA",
    },
    {
      id: "defpullay8",
      image: defpullay8,
      title: "TENSIONER BELT DRIVE",
      price: "₹804.00",
      comp: "MAHINDRA",
    },
    {
      id: "defpullay9",
      image: defpullay9,
      title: "IDLER ASSY-TIMING BELT",
      price: "₹920.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
  ];
  const Timingbelt = [
    {
      id: "tbelt1",
      image: tbelt1,
      title: "Timing Belt",
      price: "₹596.00",
      comp: "Mitsuboshi",
    },
    {
      id: "tbelt2",
      image: tbelt2,
      title: "Timing Belt",
      price: "₹618.00",
      comp: "CONTITECH",
    },
    {
      id: "tbelt3",
      image: tbelt3,
      title: "Timing Belt",
      price: "₹609.00",
      comp: "CONTITECH",
    },
    {
      id: "tbelt4",
      image: tbelt4,
      title: "Timing Belt",
      price: "₹643.00",
      comp: "OPTIBELT",
    },
    {
      id: "tbelt5",
      image: tbelt5,
      title: "Timing Belt",
      price: "₹789.00",
      comp: "CONTITECH",
    },
    {
      id: "tbelt6",
      image: tbelt6,
      title: "Timing Belt",
      price: "₹859.00",
      comp: "CONTITECH",
    },
    {
      id: "tbelt7",
      image: tbelt7,
      title: "Timing Belt",
      price: "₹932.00",
      comp: "CONTITECH",
    },
    {
      id: "tbelt8",
      image: tbelt8,
      title: "Timing Belt",
      price: "₹957.00",
      comp: "CONTITECH",
    },
  ];
  const beltkit = [
    {
      id: "beltkit1",
      image: beltkit1,
      title: "Timing Belt kit",
      price: "₹1,687.00",
      comp: "OPTIBELT",
    },
    {
      id: "beltkit2",
      image: beltkit2,
      title: "Timing Belt Set",
      price: "₹2,527.00",
      comp: "FEBI BILSTEIN",
    },
    {
      id: "beltkit3",
      image: beltkit3,
      title: "Timing Belt kit",
      price: "₹3,106.00",
      comp: "GATES",
    },
    {
      id: "beltkit4",
      image: beltkit4,
      title: "Timing Belt kit",
      price: "₹5,736.00",
      comp: "CONTITECH",
    },
    {
      id: "beltkit5",
      image: beltkit5,
      title: "Timing Belt kit",
      price: "₹7,799.00",
      comp: "GATES",
    },
    {
      id: "beltkit6",
      image: beltkit6,
      title: "Timing Belt kit",
      price: "₹6,384.00",
      comp: "CONTITECH",
    },
    {
      id: "beltkit7",
      image: beltkit7,
      title: "REPAIR KIT",
      price: "₹12,833.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
    {
      id: "beltkit8",
      image: beltkit8,
      title: "REPAIR KIT FOR TOOTHED BELTWITH TENSIONING ROLLER",
      price: "₹14,082.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
  ];
  const timechain = [
    {
      id: "timechain1",
      image: tchain1,
      title: "CHAIN COMP, TIMING",
      price: "₹1,315.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "timechain2",
      image: tchain2,
      title: "CHAIN,CM/SHF TMG",
      price: "₹2,120.00",
      comp: "CHEVROLET",
    },
    {
      id: "timechain3",
      image: tchain3,
      title: "CHAIN ASM TMG",
      price: "₹1,089.00",
      comp: "CHEVROLET",
    },
    {
      id: "timechain4",
      image: tchain4,
      title: "CHAIN-TIMING",
      price: "₹1,259.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "timechain5",
      image: tchain5,
      title: "TIMING CHAIN-CAMCHAFT",
      price: "₹2,877.00",
      comp: "Nissan / Renault",
    },
    {
      id: "timechain6",
      image: tchain6,
      title: "",
      price: "",
      comp: "",
    },
    {
      id: "timechain7",
      image: tchain7,
      title: "CHAIN OIL PUMP",
      price: "₹603.00",
      comp: "MAHINDRA",
    },
    {
      id: "timechain8",
      image: tchain8,
      title: "CHAIN,TIMING",
      price: "₹870.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "timechain9",
      image: tchain9,
      title: "CHAIN-TIMING",
      price: "₹917.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "timechain10",
      image: tchain10,
      title: "BUSH TIMING CHAIN",
      price: "₹1,172.00",
      comp: "MAHINDRA",
    },
  ];
  const guidechain = [
    {
      id: "guidechain1",
      image: gchain1,
      title: "GUIDE,TIMING CHAIN",
      price: "₹245.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "guidechain2",
      image: gchain2,
      title: "LEVER-TIMING CHAIN",
      price: "₹623.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "guidechain3",
      image: gchain3,
      title: "TENSIONER ARM ASSY",
      price: "₹873.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "guidechain4",
      image: gchain4,
      title: "PAD",
      price: "₹547.00",
      comp: "TATA",
    },
    {
      id: "guidechain5",
      image: gchain5,
      title: "LEVER,TIMING CHAIN TENSIONER",
      price: "₹235.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "guidechain6",
      image: gchain6,
      title: "GUIDE RAIL",
      price: "₹2,093.00",
      comp: "BMW",
    },
    {
      id: "guidechain7",
      image: gchain7,
      title: "GUIDE RAIL",
      price: "₹2,552.00",
      comp: "BMW",
    },
    {
      id: "guidechain8",
      image: gchain8,
      title: "GUIDE-CHAIN",
      price: "₹444.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "guidechain9",
      image: gchain9,
      title: "GUIDETIMING CHAIN NO1",
      price: "₹654.00",
      comp: "MARUTI SUZUKI",
    },
  ];
  const vbelt = [
    {
      id: "vbelt1",
      image: vbelt1,
      title: "POLY-V-BELT",
      price: "₹608.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
    {
      id: "vbelt2",
      image: vbelt2,
      title: "POLY-V-BELT",
      price: "₹671.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
    {
      id: "vbelt3",
      image: vbelt3,
      title: "BELT, W/PMP & A/C CMPR & GEN & P/S PUMP",
      price: "₹998.00",
      comp: "CHEVROLET",
    },
    {
      id: "vbelt4",
      image: vbelt4,
      title: "BELT POLY V 5PK",
      price: "₹650.00",
      comp: "TATA",
    },
    {
      id: "vbelt5",
      image: vbelt5,
      title: "BELT-ALTNTR",
      price: "₹465.00",
      comp: "Nissan / Renault",
    },
    {
      id: "vbelt6",
      image: vbelt6,
      title: "RIBBED BELT-V",
      price: "₹454.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "vbelt7",
      image: vbelt7,
      title: "BELT, W/PMP & GEN",
      price: "₹371.00",
      comp: "CHEVROLET",
    },
    {
      id: "vbelt8",
      image: vbelt8,
      title: "BELT, COMPRESSOR",
      price: "₹435.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "vbelt9",
      image: vbelt9,
      title: "BELT,A/C CMPR & P/S PUMP",
      price: "₹291.00",
      comp: "CHEVROLET",
    },
    {
      id: "vbelt10",
      image: vbelt10,
      title: "BELT, WATER PUMP (5PK895)",
      price: "₹245.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "vbelt11",
      image: vbelt11,
      title: "V-BELT (4PK 780)",
      price: "₹240.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "vbelt12",
      image: vbelt12,
      title: "V-Ribbed Belt",
      price: "₹587.00",
      comp: "FENNER",
    },
  ];

  const openproduct = (item) => {
    navigate(`/Productpage/${item.id}`);
  }
  return (

    <>
    <Navbar/>
    
    <div style={{ justifyContent: "center", textAlign: "center" }}>
      <h1 className="text-shadow">Belts, Chains and Controllers</h1>

      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">Alternator pully</h3>
          {/* <div className='col-md-12'> */}

          {   alternatorpullay.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>




      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">Belt pully</h3>
          {/* <div className='col-md-12'> */}

          {   beltpullay.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>




      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">Crank pully</h3>
          {/* <div className='col-md-12'> */}

          {   crankpullay.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>



      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">Deflation pully</h3>
          {/* <div className='col-md-12'> */}

          {   deflationpullay.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>



      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">Timing Belt</h3>
          {/* <div className='col-md-12'> */}

          {   Timingbelt.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>



      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">Belt Kit</h3>
          {/* <div className='col-md-12'> */}

          {   beltkit.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>



      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">Time Chain</h3>
          {/* <div className='col-md-12'> */}

          {   timechain.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>



      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">Guide Chain</h3>
          {/* <div className='col-md-12'> */}

          {   guidechain.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>


      <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">V Belt</h3>
          {/* <div className='col-md-12'> */}

          {   vbelt.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.title}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.comp}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>

    </div>
    </>

  );
};
