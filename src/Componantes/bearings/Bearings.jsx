import React from "react";
import "./bearings.css";
import rarewheelbearings1 from "../../asstes/bearing1.webp";
import rarewheelbearings2 from "../../asstes/bearing2.webp";
import rarewheelbearings3 from "../../asstes/bearing3.webp";
import rarewheelbearings4 from "../../asstes/bearing4.webp";
import rarewheelbearings5 from "../../asstes/bearing5.webp";
import rarewheelbearings6 from "../../asstes/bearing6.webp";
import rarewheelbearings7 from "../../asstes/bearing7.webp";
import rarewheelbearings8 from "../../asstes/bearing8.webp";
import rarewheelbearings9 from "../../asstes/bearing9.webp";
import rarewheelbearings10 from "../../asstes/bearing10.webp";
import pilotbearing1 from "../../asstes/pilotbearing1.webp";
import pilotbearing2 from "../../asstes/pilotbearing2.webp";
import pilotbearing3 from "../../asstes/pilotbearing3.webp";
import pilotbearing4 from "../../asstes/pilotbearing4.webp";
import pilotbearing5 from "../../asstes/pilotbearing5.webp";
import pilotbearing6 from "../../asstes/pilotbearing6.webp";
import pilotbearing7 from "../../asstes/pilotbearing7.webp";
import pilotbearing8 from "../../asstes/pilotbearing8.webp";
import pilotbearing9 from "../../asstes/pilotbearing9.webp";
import pilotbearing10 from "../../asstes/pilotbearing10.webp";
import shockbearing1 from "../../asstes/shockbearing1.webp";
import shockbearing2 from "../../asstes/shockbearing2.webp";
import shockbearing3 from "../../asstes/shockbearing3.webp";
import shockbearing4 from "../../asstes/shockbearing4.webp";
import shockbearing5 from "../../asstes/shockbearing5.webp";
import shockbearing6 from "../../asstes/shockbearing6.webp";
import shockbearing7 from "../../asstes/shockbearing7.webp";
import shockbearing8 from "../../asstes/shockbearing8.webp";
import shockbearing9 from "../../asstes/shockbearing9.webp";
import TMbearing1 from "../../asstes/transmissionbearing1.webp";
import TMbearing2 from "../../asstes/transmissionbearing2.webp";
import TMbearing3 from "../../asstes/transmissionbearing3.webp";
import TMbearing4 from "../../asstes/transmissionbearing4.webp";
import TMbearing5 from "../../asstes/transmissionbearing5.webp";
import TMbearing6 from "../../asstes/transmissionbearing6.webp";
import TMbearing7 from "../../asstes/transmissionbearing7.webp";
import TMbearing8 from "../../asstes/transmissionbearing8.webp";
import TMbearing9 from "../../asstes/transmissionbearing9.webp";
import TMbearing10 from "../../asstes/transmissionbearing10.webp";
import TMbearing11 from "../../asstes/transmissionbearing11.webp";
import TMbearing12 from "../../asstes/transmissionbearing12.webp";
import alternator1 from "../../asstes/alternatorbearing1.webp";
import alternator2 from "../../asstes/alternatorbearing2.webp";
import alternator3 from "../../asstes/alternatorbearing3.webp";
import alternator4 from "../../asstes/alternatorbearing4.webp";
import alternator5 from "../../asstes/alternatorbearing5.webp";
import alternator6 from "../../asstes/alternatorbearing6.webp";
import alternator7 from "../../asstes/alternatorbearing7.webp";
import alternator8 from "../../asstes/alternatorbearing8.webp";
import BEbearing1 from "../../asstes/bigendbearing1.webp";
import BEbearing2 from "../../asstes/bigendbearing2.webp";
import BEbearing3 from "../../asstes/bigendbearing3.webp";
import BEbearing4 from "../../asstes/bigendbearing4.webp";
import BEbearing5 from "../../asstes/bigendbearing5.webp";
import BEbearing6 from "../../asstes/bigendbearing6.webp";
import BEbearing7 from "../../asstes/bigendbearing7.webp";
import BEbearing8 from "../../asstes/bigendbearing8.webp";
import BEbearing9 from "../../asstes/bigendbearing9.webp";
import BEbearing10 from "../../asstes/bigendbearing10.webp";
import clutchbearing1 from "../../asstes/clutchbearing1.webp";
import clutchbearing2 from "../../asstes/clutchbearing2.webp";
import clutchbearing3 from "../../asstes/clutchbearing3.webp";
import clutchbearing4 from "../../asstes/clutchbearing4.webp";
import clutchbearing5 from "../../asstes/clutchbearing5.webp";
import clutchbearing6 from "../../asstes/clutchbearing6.webp";
import clutchbearing7 from "../../asstes/clutchbearing7.webp";
import clutchbearing8 from "../../asstes/clutchbearing8.webp";
import cranks1 from "../../asstes/crankbearing1.webp";
import cranks2 from "../../asstes/crankbearing2.webp";
import cranks3 from "../../asstes/crankbearing3.webp";
import cranks4 from "../../asstes/crankbearing4.webp";
import cranks5 from "../../asstes/crankbearing5.webp";
import cranks6 from "../../asstes/crankbearing6.webp";
import cranks7 from "../../asstes/crankbearing7.webp";
import cranks8 from "../../asstes/crankbearing8.webp";
import cranks9 from "../../asstes/crankbearing9.webp";
import cranks10 from "../../asstes/crankbearing10.webp";
import { useNavigate } from "react-router-dom";
function Bearings() {
  const navigate = useNavigate()

  const rarewheelbearings = [
    {
      id: "rarewheel1",
      image: rarewheelbearings1,
      title: "Rear Wheel Bearing",
      price: "₹195.00",
      comp: "TATA",
    },
    {
      id: "rarewheel2",
      image: rarewheelbearings2,
      title: "DOUBLE ROW ANGULAR CONTACT BALL BEARING",
      price: "₹944.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "rarewheel3",
      image: rarewheelbearings3,
      title: "BEARING-FRONT WHEEL HUB",
      price: "₹1,103.00",
      comp: "Nissan / Renault",
    },
    {
      id: "rarewheel4",
      image: rarewheelbearings4,
      title: "BEARING-INNER,REAR AXLE",
      price: "₹1,317.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
    {
      id: "rarewheel5",
      image: rarewheelbearings5,
      title: "ANGULAR BALL BEARING",
      price: "₹2,084.00",
      comp: "Toyota / Lexus",
    },
    {
      id: "rarewheel6",
      image: rarewheelbearings6,
      title: "RETAINER, REAR AXLE BEARING, INNER RH",
      price: "₹604.00",
      comp: "MAHINDRA",
    },
    {
      id: "rarewheel7",
      image: rarewheelbearings7,
      title: "KIT BRG.(0052979 / 0052980)",
      price: "₹644.00",
      comp: "Toyota / Lexus",
    },
    {
      id: "rarewheel8",
      image: rarewheelbearings8,
      title: "WHEEL BEARING KIT",
      price: "₹712.00",
      comp: "MAHINDRA",
    },
    {
      id: "rarewheel9",
      image: rarewheelbearings9,
      title: "BEARING CARRIER 4.55R",
      price: "₹1,110.00",
      comp: "MAHINDRA",
    },
    {
      id: "rarewheel10",
      image: rarewheelbearings10,
      title: "BEARING ASSEMBLY TAPERED ROLLER PINION INNER",
      price: "₹1,452.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
  ];
  const pilotbearings = [
    {
      id: "pb1",
      image: pilotbearing1,
      title: "BEARING",
      price: "₹1,107.00",
      comp: "FORD",
    },
    {
      id: "pb2",
      image: pilotbearing2,
      title: "BEARING TPR RLR 35x72x18.25",
      price: "₹377.00",
      comp: "MAHINDRA",
    },
    {
      id: "pb3",
      image: pilotbearing3,
      title: "BEARING",
      price: "₹714.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
    {
      id: "pb4",
      image: pilotbearing4,
      title: "BEARING CYL RLR SR 25X52X15",
      price: "₹837.00",
      comp: "MAHINDRA",
    },
    {
      id: "pb5",
      image: pilotbearing5,
      title: "MASS BALANCER BEARING CA",
      price: "₹284.00",
      comp: "MAHINDRA",
    },
    {
      id: "pb6",
      image: pilotbearing6,
      title: "DGBB COUNTER 25 X 62 - 19",
      price: "₹481.00",
      comp: "MAHINDRA",
    },
    {
      id: "pb7",
      image: pilotbearing7,
      title: "BALL BEARING",
      price: "₹304.00",
      comp: "MAHINDRA",
    },
    {
      id: "pb8",
      image: pilotbearing8,
      title: "CONROD BEARING 'D' (FM)",
      price: "₹101.00",
      comp: "TATA",
    },
    {
      id: "pb9",
      image: pilotbearing9,
      title: "CONROD BEARING 'C' (FM)",
      price: "₹93.00",
      comp: "TATA",
    },
    {
      id: "pb10",
      image: pilotbearing10,
      title: "BALL BEARING",
      price: "₹291.00",
      comp: "MAHINDRA",
    },
  ];
  const shockabsorberbearings = [
    {
      id: "shockbearing1",
      image: shockbearing1,
      title: "DEEP GROOVE BALL THRUST BEARNG",
      price: "₹656.00",
      comp: "VAG (VW, AUDI, SKODA)",
    },
    {
      id: "shockbearing2",
      image: shockbearing2,
      title: "BEARING-STRUT",
      price: "₹587.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "shockbearing3",
      image: shockbearing3,
      title: "BEARING",
      price: "₹829.00",
      comp: "FORD",
    },
    {
      id: "shockbearing4",
      image: shockbearing4,
      title: " BEARING-STRUT",
      price: "₹1,552.00",
      comp: "MOBIS (Hyundai, Kia)",
    },
    {
      id: "shockbearing5",
      image: shockbearing5,
      title: " TOP STRUT MOUNTING",
      price: "₹2,079.00",
      comp: "FORD",
    },
    {
      id: "shockbearing6",
      image: shockbearing6,
      title: " BEARING, STRUT MOUNTING",
      price: "₹281.00",
      comp: "Toyota / Lexus ",
    },
    {
      id: "shockbearing7",
      image: shockbearing7,
      title: " BEARING ((+)IND)",
      price: "₹648.00",
      comp: "FORD",
    },
    {
      id: "shockbearing8",
      image: shockbearing8,
      title: " BEARING-STRUT",
      price: "₹686.00",
      comp: "MOBIS (Hyundai, Kia) ",
    },
    {
      id: "shockbearing9",
      image: shockbearing9,
      title: "  BEARING,FRT SUSP STRUT MT",
      price: "₹567.00",
      comp: "CHEVROLET",
    },
  ];
  const transmissionbearings = [
    {
      id: "TMbearing1",
      image: TMbearing1,
      title: "BEARING SET, INPUT SHAFT RR",
      price: "₹592.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "TMbearing2",
      image: TMbearing2,
      title: "BEARING,INPUT SHF",
      price: "₹659.00",
      comp: "CHEVROLET",
    },
    {
      id: "TMbearing3",
      image: TMbearing3,
      title: " BEARING, BALL, 25X52X14/15",
      price: "₹635.00",
      comp: "HONDA",
    },
    {
      id: "TMbearing4",
      image: TMbearing4,
      title: "BEARING",
      price: "₹613.00",
      comp: "MARUTI SUZUKI",
    },
    {
      id: "TMbearing5",
      image: TMbearing5,
      title: " BEARING, SEALED BALL, 6207 (NTN)",
      price: "₹660.00",
      comp: "HONDA",
    },
    {
      id: "TMbearing6",
      image: TMbearing6,
      title: "BEARING - TAPER ROLLER",
      price: "₹679.00",
      comp: "MOBIS (Hyundai, Kia) ",
    },
    {
      id: "TMbearing7",
      image: TMbearing7,
      title: "KIT BRG.(0052979 / 0052980)",
      price: "₹644.00",
      comp: "MAHINDRA ",
    },
    {
      id: "TMbearing8",
      image: TMbearing8,
      title: "TAPER ROLLER BEARING",
      price: "₹660.00",
      comp: "MAHINDRA ",
    },
    {
      id: "TMbearing9",
      image: TMbearing9,
      title: "BEARING NEEDLE",
      price: "₹692.00",
      comp: "MAHINDRA ",
    },
    {
      id: "TMbearing10",
      image: TMbearing10,
      title: "RETAINER INPUT SHF BRG",
      price: "₹831.00",
      comp: "CHEVROLET ",
    },
    {
      id: "TMbearing11",
      image: TMbearing11,
      title: "TAPER ROLLER BEARING (TATA STEEL)",
      price: "₹774.00",
      comp: "TATA",
    },
    {
      id: "TMbearing12",
      image: TMbearing12,
      title: "BEARING - NEEDLE, INPUT GEAR",
      price: "₹785.00",
      comp: "Nissan / Renault ",
    },
  ];
  const alternatorbearings = [
    {
      id:"alterbearing1",
      image:alternator1,
      title:"BEARING - BALL",
      price:"₹591.00",
      comp:"CHEVROLET"
    },
    {
      id:"alterbearing2",
      image:alternator2,
      title:"BALL BEARING",
      price:"₹779.00",
      comp:"CHEVROLET"
    },    {
      id:"alterbearing3",
      image:alternator3,
      title:"BEARING ASSEMBLING KIT",
      price:"₹839.00",
      comp:"CHEVROLET"
    },    {
      id:"alterbearing4",
      image:alternator4,
      title:"BEARING-RR",
      price:"₹893.00",
      comp:"MOBIS (Hyundai, Kia)"
    },    {
      id:"alterbearing5",
      image:alternator5,
      title:"BEARING ASSY KIT",
      price:"₹1,454.00",
      comp:"CHEVROLET"
    },    {
      id:"alterbearing6",
      image:alternator6,
      title:"BEARING - BALL (85A)",
      price:"₹412.00",
      comp:"CHEVROLET"
    },    {
      id:"alterbearing7",
      image:alternator7,
      title:"DE BALL BEARING",
      price:"₹715.00",
      comp:"MAHINDRA"
    },    {
      id:"alterbearing8",
      image:alternator8,
      title:"DEEP GROOVE BALL BEARING [F 00M 990 410]",
      price:"₹778.00",
      comp:"TATA"
    },
  ];
  const bigendbearings = [
    {
      id:"bigendbearing1",
      image:BEbearing1,
      title:"PLAIN HLF BEARING",
      price:"₹690.00",
      comp:"Nissan / Renault"
    },
    {
      id:"bigendbearing2",
      image:BEbearing2,
      title:"METAL SET C/R",
      price:"₹679.00",
      comp:"Honda"
    },    {
      id:"bigendbearing3",
      image:BEbearing3,
      title:"METAL SET STD;CONN/ROD",
      price:"₹631.00",
      comp:"MARUTI SUZUKI"
    },    {
      id:"bigendbearing4",
      image:BEbearing4,
      title:"HALF BEARING -0, 127_CONROD 1.4 8V",
      price:"₹747.00",
      comp:"TATA"
    },    {
      id:"bigendbearing5",
      image:BEbearing5,
      title:"CONNECTING ROD BEARING SHELL",
      price:"₹749.00",
      comp:"VAG (VW, AUDI, SKODA)"
    },    {
      id:"bigendbearing6",
      image:BEbearing6,
      title:"BEARING B, MAIN UPPER (BLACK) (DAIDO)",
      price:"₹704.00",
      comp:"HONDA"
    },    {
      id:"bigendbearing7",
      image:BEbearing7,
      title:"HALF-BEARING TOR.",
      price:"₹806.00",
      comp:"TATA"
    },    {
      id:"bigendbearing8",
      image:BEbearing8,
      title:"BEARING KIT, CONN ROD",
      price:"₹850.00",
      comp:"CHEVROLET"
    },    {
      id:"bigendbearing9",
      image:BEbearing9,
      title:"BEARING HALF-UPPER-NORMAL(CON.ROD)BIMETAL",
      price:"₹872.00",
      comp:"TATA"
    },    {
      id:"bigendbearing10",
      image:BEbearing10,
      title:"BEARING-CONNECTING ROD",
      price:"₹863.00",
      comp:"Nissan / Renault"
    },
  ];
  const clutchbearings = [
    {
      id:"clutchbearing1",
      image:clutchbearing1,
      title:"Clutch Slave Cylinder",
      price:"₹3,129.00",
      comp:"VALEO"
    },
    {
      id:"clutchbearing2",
      image:clutchbearing2,
      title:"BEARING-CLUTCH RELEASE",
      price:"₹1,263.00",
      comp:"MOBIS (Hyundai, Kia)"
    },    {
      id:"clutchbearing3",
      image:clutchbearing3,
      title:"BEARING - CLU - REL",
      price:"₹2,105.00",
      comp:"CHEVROLET"
    },    {
      id:"clutchbearing4",
      image:clutchbearing4,
      title:"HUB AND BEARING - CLUTCH RELEASE",
      price:"₹2,962.00",
      comp:"FORD"
    },    {
      id:"clutchbearing5",
      image:clutchbearing5,
      title:"Clutch Release Bearing",
      price:"₹1,936.00",
      comp:"SMR"
    },    {
      id:"clutchbearing6",
      image:clutchbearing6,
      title:"Clutch Release Bearing",
      price:"₹2,236.00",
      comp:"MotoJet"
    },    {
      id:"clutchbearing7",
      image:clutchbearing7,
      title:"BEARING,INPUT SHF",
      price:"₹659.00",
      comp:"CHEVROLET"
    },    {
      id:"clutchbearing8",
      image:clutchbearing8,
      title:"Slave Cylinder",
      price:"₹3,399.00",
      comp:"Schaeffler (LuK, INA, FAG)"
    },
  ];
  const crankbearings = [
    {
      id:"crankbearing1",
      image:cranks1,
      title:"BEARING PAIR SET-CRK/SHF, STD-C(NO COLOR)",
      price:"₹830.00",
      comp:"MOBIS (Hyundai, Kia)"
    },
    {
      id:"crankbearing2",
      image:cranks2,
      title:"CONNECTING ROD BEARING SHELLYELLOW",
      price:"₹821.00",
      comp:"VAG (VW, AUDI, SKODA)"
    },
    {
      id:"crankbearing3",
      image:cranks3,
      title:"WASHER THRUST",
      price:"₹555.00",
      comp:"Nissan / Renault"
    },    {
      id:"crankbearing4",
      image:cranks4,
      title:"WASHER, CRANKSHAFT THRUST, UPPER",
      price:"₹554.00",
      comp:"Toyota / Lexus"
    },    {
      id:"crankbearing5",
      image:cranks5,
      title:"BEARING PAIR SET-CRK/SHF CTR, STD-A>STD-A(BLUE)",
      price:"₹1,690.00",
      comp:"MOBIS (Hyundai, Kia)"
    },    {
      id:"crankbearing6",
      image:cranks6,
      title:"THRUST WASHER (UPPER) BIMETAL - 2.52",
      price:"₹522.00",
      comp:"TATA"
    },    {
      id:"crankbearing7",
      image:cranks7,
      title:"BEARING B, MAIN UPPER (BLACK) (DAIDO)",
      price:"₹476.00",
      comp:"HONDA"
    },    {
      id:"crankbearing8",
      image:cranks8,
      title:"BEARING B, MAIN LOWER (BLACK) (DAIDO)",
      price:"₹462.00",
      comp:"HONDA"
    },    {
      id:"crankbearing9",
      image:cranks9,
      title:"BEARING SET CRANK THRUST",
      price:"₹450.00",
      comp:"MARUTI SUZUKI"
    },    {
      id:"crankbearing10",
      image:cranks10,
      title:"THRUST WASHER, CRANKSHAFT",
      price:"₹421.00",
      comp:"VAG (VW, AUDI, SKODA)"
    },
  ];
  const viewproduct = (item) =>{
    navigate(`/Productpage/${item.id}`)
  }
  return (
    <>
      <div>
        <div  className="col-md-12 card_mng2">
          <div className="container">
            <h3 className="card_heading"
              style={{ marginRight: "76%", marginTop: "3%", color: "#0c2243" }}
            >
              Rear Wheel Bearing
            </h3>
            <div className="row">
              {rarewheelbearings.map((item) => (
                <div
                  className="card card_mng" onClick={()=>viewproduct(item)}  
                  style={{ width: "16rem", marginLeft: "2%", marginTop: "1%" }}
                >
                  <img
                    src={item.image}
                    className="card-img-top card_image"
                    alt="automotive tape"
                  />
                  <div className="card-body">
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href=""
                    >
                      <p className="card-title title_mng">{item.title}</p>
                    </a>
                    <p className="price_mng">MRP {item.price}</p>
                    <p className="comp_mng">{item.comp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div  className="col-md-12 card_mng2">
        <div className="container">
          <h3 className="card_heading"style={{ marginRight: "76%", marginTop: "3%" }}>
            Pilot Bearings
          </h3>
          <div className="row">
            {pilotbearings.map((item) => (
              <div
                className="card card_mng" onClick={()=>viewproduct(item)}
                style={{ width: "16rem", marginLeft: "2%", marginTop: "1%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top card_image"
                  alt="image error"
                />
                <div className="card-body">
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    <p className="card-title title_mng">{item.title}</p>
                  </a>
                  <p className="price_mng">MRP {item.price}</p>
                  <p className="comp_mng">{item.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div  className="col-md-12 card_mng2">
        <div className="container">
          <h3 className="card_heading"style={{ marginRight: "76%", marginTop: "3%", width: "30%" }}>
            Shock Absorber Bearing
          </h3>
          <div className="row">
            {shockabsorberbearings.map((item) => (
              <div
                className="card card_mng" onClick={()=>viewproduct(item)}
                style={{ width: "16rem", marginLeft: "2%", marginTop: "1%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top card_image"
                  alt="image error"
                />
                <div className="card-body">
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    <p className="card-title title_mng">{item.title}</p>
                  </a>
                  <p className="price_mng">MRP {item.price}</p>
                  <p className="comp_mng">{item.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div  className="col-md-12 card_mng2">
        <div className="container">
          <h3 className="card_heading"style={{ marginRight: "76%", marginTop: "3%", width: "30%" }}>
            Transmission Bearing
          </h3>
          <div className="row">
            {transmissionbearings.map((item) => (
              <div
                className="card card_mng" onClick={()=>viewproduct(item)}
                style={{ width: "16rem", marginLeft: "2%", marginTop: "1%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top card_image"
                  alt="image error"
                />
                <div className="card-body">
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    <p className="card-title title_mng">{item.title}</p>
                  </a>
                  <p className="price_mng">MRP {item.price}</p>
                  <p className="comp_mng">{item.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div  className="col-md-12 card_mng2">
        <div className="container">
          <h3 className="card_heading"style={{ marginRight: "76%", marginTop: "3%", width: "30%" }}>
            Alternator Bearing
          </h3>
          <div className="row">
            {alternatorbearings.map((item) => (
              <div
                className="card card_mng" onClick={()=>viewproduct(item)}
                style={{ width: "16rem", marginLeft: "2%", marginTop: "1%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top card_image"
                  alt="image error"
                />
                <div className="card-body">
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    <p className="card-title title_mng">{item.title}</p>
                  </a>
                  <p className="price_mng">MRP {item.price}</p>
                  <p className="comp_mng">{item.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div  className="col-md-12 card_mng2">
        <div className="container">
          <h3 className="card_heading"style={{ marginRight: "76%", marginTop: "3%", width: "30%" }}>
            Big End Bearing
          </h3>
          <div className="row">
            {bigendbearings.map((item) => (
              <div
                className="card card_mng" onClick={()=>viewproduct(item)}
                style={{ width: "16rem", marginLeft: "2%", marginTop: "1%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top card_image"
                  alt="image error"
                />
                <div className="card-body">
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    <p className="card-title title_mng">{item.title}</p>
                  </a>
                  <p className="price_mng">MRP {item.price}</p>
                  <p className="comp_mng">{item.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div  className="col-md-12 card_mng2">
        <div className="container">
          <h3 className="card_heading"style={{ marginRight: "76%", marginTop: "3%", width: "30%" }}>
          Clutch Release Bearing
          </h3>
          <div className="row">
            {clutchbearings.map((item) => (
              <div
                className="card card_mng" onClick={()=>viewproduct(item)}
                style={{ width: "16rem", marginLeft: "2%", marginTop: "1%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top card_image"
                  alt="image error"
                />
                <div className="card-body">
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    <p className="card-title title_mng">{item.title}</p>
                  </a>
                  <p className="price_mng">MRP {item.price}</p>
                  <p className="comp_mng">{item.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div  className="col-md-12 card_mng2">
        <div className="container">
          <h3 className="card_heading"style={{ marginRight: "76%", marginTop: "3%", width: "30%" }}>
          Crankshaft Bearing
          </h3>
          <div className="row">
            {crankbearings.map((item) => (
              <div
                className="card card_mng" onClick={()=>viewproduct(item)}
                style={{ width: "16rem", marginLeft: "2%", marginTop: "1%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top card_image"
                  alt="image error"
                />
                <div className="card-body">
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    <p className="card-title title_mng">{item.title}</p>
                  </a>
                  <p className="price_mng">MRP {item.price}</p>
                  <p className="comp_mng">{item.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bearings;
