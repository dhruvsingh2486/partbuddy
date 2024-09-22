import React from "react";
import "./Maintainancepart.css";
import beltTiming15l from "../../assets/maintainanceservicepart/belts/belt timmimg (1.5l sohc).webp";
import timingbelt5 from "../../assets/maintainanceservicepart/belts/timimg belt 5.webp";
import timingbelt from "../../assets/maintainanceservicepart/belts/timing belt.webp";
import timingbelt6 from "../../assets/maintainanceservicepart/belts/timing belt6.webp";
import timingbelt2 from "../../assets/maintainanceservicepart/belts/timing belt2.webp";
import timingbelt3 from "../../assets/maintainanceservicepart/belts/timimg belt 3.webp";
import timingbelt4 from "../../assets/maintainanceservicepart/belts/timing belt 4.webp";
import toothedbelt from "../../assets/maintainanceservicepart/belts/toothed belt.webp";
import breaks1 from "../../assets/maintainanceservicepart/breaks/breaks1.webp";
import breaks2 from "../../assets/maintainanceservicepart/breaks/breaks2.webp";
import break3 from "../../assets/maintainanceservicepart/breaks/break3.webp";
import break4 from "../../assets/maintainanceservicepart/breaks/break4.webp";
import break5 from "../../assets/maintainanceservicepart/breaks/break5.webp";
import break6 from "../../assets/maintainanceservicepart/breaks/break6.webp";
import break7 from "../../assets/maintainanceservicepart/breaks/break7.webp";
import break8 from "../../assets/maintainanceservicepart/breaks/break8.webp";
import break9 from "../../assets/maintainanceservicepart/breaks/break9.webp";
import break10 from "../../assets/maintainanceservicepart/breaks/break10.webp";
import servicemanual1 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 1.webp";
import servicemanual2 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 2.webp";
import servicemanual3 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 3.webp";
import servicemanual4 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 4.webp";
import servicemanual5 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 5.webp";
import servicemanual6 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 6.webp";
import servicemanual7 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 7.webp";
import servicemanual8 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 8.webp";
import servicemanual9 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 9.webp";
import servicemanual10 from "../../assets/maintainanceservicepart/servicemanualbooks/service manual 10.webp";
import disk1 from "../../assets/maintainanceservicepart/disks/disk1.webp";
import disk2 from "../../assets/maintainanceservicepart/disks/disk2.webp";
import disk3 from "../../assets/maintainanceservicepart/disks/disk3.webp";
import disk4 from "../../assets/maintainanceservicepart/disks/disk4.webp";
import disk5 from "../../assets/maintainanceservicepart/disks/disk5.webp";
import disk6 from "../../assets/maintainanceservicepart/disks/disk6.webp";
import oil1 from "../../assets/maintainanceservicepart/engineoils/OIL1.webp";
import oil2 from "../../assets/maintainanceservicepart/engineoils/OIL2.webp";
import oil3 from "../../assets/maintainanceservicepart/engineoils/OIL3.webp";
import oil6 from "../../assets/maintainanceservicepart/engineoils/OIL6.webp";
import oil7 from "../../assets/maintainanceservicepart/engineoils/OIL7.webp";
import oil8 from "../../assets/maintainanceservicepart/engineoils/OIL8.webp";
import oil9 from "../../assets/maintainanceservicepart/engineoils/OIL9.webp";
import filter1 from "../../assets/maintainanceservicepart/filters/filter1.webp";
import filter2 from "../../assets/maintainanceservicepart/filters/filter2.webp";
import filter3 from "../../assets/maintainanceservicepart/filters/filter3.webp";
import filter4 from "../../assets/maintainanceservicepart/filters/filter4.webp";
import filter5 from "../../assets/maintainanceservicepart/filters/filter5.webp";
import filter6 from "../../assets/maintainanceservicepart/filters/filter6.webp";
import filter7 from "../../assets/maintainanceservicepart/filters/filter7.webp";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "../tc/Tc.css";

export const Maintainancepartspage = () => {
  const navigate = useNavigate();

  const arrayOfBelt = [
    {
      id: "belt1",
      name: "BELT TIMIMG (1.5L SOHC DI TC I4 DIESEL DV5)",
      image: beltTiming15l,
      price: "₹877.00",
      brand: "FORD",
    },
    {
      id: "belt2",
      name: "TOOTHED BELT",
      image: toothedbelt,
      price: "₹1414.00",
      brand: "VAG(VW,AUDI,SKODA)",
    },
    {
      id: "belt3",
      name: "TIMING BELT",
      image: timingbelt,
      price: "₹1844.00",
      brand: "Nissan/Renault",
    },
    {
      id: "belt4",
      name: "TIMIMG BELT",
      image: timingbelt2,
      price: "₹618.00",
      brand: "CONTITECH",
    },
    {
      id: "belt5",
      name: "TIMIMG BELT",
      image: timingbelt3,
      price: "₹623.00",
      brand: "Mitsubishi",
    },
    {
      id: "belt6",
      name: "TIMING BELT",
      image: timingbelt4,
      price: "₹643.00",
      brand: "OPTIBELT",
    },

    {
      id: "belt7",
      name: "TIMING BELT",
      image: timingbelt6,
      price: "₹673.00",
      brand: "CONTITECH",
    },

    {
      id: "belt8",
      name: "TIMING BELT",
      image: timingbelt5,
      price: "₹706.00",
      brand: "Mitsubishi",
    },
  ];

  function openproduct(item) {
    navigate(`/Productpage/${item.id}`);
  }

  const arrayOfBreaks = [
    {
      id: "break1",
      name: "front breaks",
      price: "₹887.00",
      image: breaks1,
      brand: "BOSCH",
    },
    {
      id: "break2",
      name: "front breaks",
      price: "₹780.00",
      image: breaks2,
      brand: "BOSCH",
    },
    {
      id: "break3",
      name: "Rear Breaks Assembly",
      price: "₹2540.00",
      image: break3,
      brand: "TVS Girling",
    },
    {
      id: "break4",
      name: "Break Drum",
      price: "₹1089.00",
      image: break4,
      brand: "KTEK",
    },
    {
      id: "break5",
      name: "Rear Break Shoe set",
      price: "₹622.00",
      image: break5,
      brand: "Super circle",
    },
    {
      id: "break6",
      name: "Rear Break Shoe set",
      price: "₹2523.00",
      image: break6,
      brand: "RANE",
    },
    {
      id: "break7",
      name: "Break Fluid (1L)",
      price: "₹920.00",
      image: break7,
      brand: "BOSCH",
    },
    {
      id: "break8",
      name: "Break Fluid DOT4 (0.5L)",
      price: "₹187.00",
      image: break8,
      brand: "BOSCH",
    },
    {
      id: "break9",
      name: "Pink kit, Front Disk slide",
      price: "₹727.00",
      image: break9,
      brand: "Toyota/Lexus",
    },
    {
      id: "break10",
      name: "1 set of guide Bushing",
      price: "₹989.00",
      image: break10,
      brand: "BOSCH",
    },
  ];

  const arrayOfServiveManual = [
    {
      id: "servicemanual1",
      image: servicemanual1,
      name: "part catalogue ignis",
      price: "₹795.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "servicemanual2",
      image: servicemanual2,
      name: "xl6 service manual",
      price: "₹1,515.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "servicemanual3",
      image: servicemanual3,
      name: "part catalogue Swift ans dzire2",
      price: "₹835.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "servicemanual4",
      image: servicemanual4,
      name: "case documents",
      price: "₹259.00",
      brand: "ford",
    },
    {
      id: "servicemanual5",
      image: servicemanual5,
      name: "part catalogue swift",
      price: "₹795.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "servicemanual6",
      image: servicemanual6,
      name: "Literature - owner",
      price: "₹790.00",
      brand: "FORD",
    },
    {
      id: "servicemanual7",
      image: servicemanual7,
      name: "case - documents",
      price: "₹536.00",
      brand: "FORD",
    },
    {
      id: "servicemanual8",
      image: servicemanual8,
      name: "noise and vibration manual",
      price: "₹575.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "servicemanual9",
      image: servicemanual9,
      name: "part catalogue ciaz",
      price: "₹580.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "servicemanual10",
      image: servicemanual10,
      name: "part catalogue esteem",
      price: "₹545.00",
      brand: "Maruti Suzuki",
    },
  ];
  const arrayOfDisk = [
    {
      id: "disk1",
      image: disk1,
      name: "disk assy clutch",
      price: "₹1495.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "disk2",
      image: disk2,
      name: "disk assy clutch",
      price: "₹3817.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "disk3",
      image: disk3,
      name: "disk assy clutch",
      price: "₹7835.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "disk4",
      image: disk4,
      name: "clutch disk",
      price: "₹1179.00",
      brand: "FORD",
    },
    {
      id: "disk5",
      image: disk5,
      name: "disk clutch",
      price: "₹1247.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "disk6",
      image: disk6,
      name: "disk comp-clutch",
      price: "₹1790.00",
      brand: "FORD",
    },
  ];
  const arrayOfEngineoils = [
    {
      id: "oil1",
      image: oil1,
      name: "Enginr oil 5w-30l (4l)",
      price: "₹2495.00",
      brand: "Shell",
    },
    {
      id: "oil2",
      image: oil2,
      name: "Enginr oil 0w-20l (3.5l)",
      price: "₹3817.00",
      brand: "Shell",
    },
    {
      id: "oil3",
      image: oil3,
      name: "dEnginr oil 0w-20l (3.5l)",
      price: "₹1224.00",
      brand: "Castrol",
    },
    {
      id: "oil4",
      image: oil9,
      name: "Enginr oil 0w-20l (5l)",
      price: "₹1938.00",
      brand: "BOSCH",
    },
    {
      id: "oil5",
      image: oil2,
      name: "Enginr oil 0w-20l (3.5l)",
      price: "₹2249.00",
      brand: "Shell",
    },
    {
      id: "oil6",
      image: oil6,
      name: "Enginr oil 20w-50 (5l)",
      price: "₹1872.00",
      brand: "Castrol",
    },

    {
      id: "oil7",
      image: oil7,
      name: "Enginr oil 5w-30 (1l)",
      price: "₹488.00",
      brand: "Patronas",
    },

    {
      id: "oil8",
      image: oil8,
      name: "Enginr oil 5w-40 (1l)",
      price: "₹936.00",
      brand: "Shell",
    },
    {
      id: "oil9",
      image: oil9,
      name: "Enginr oil 5w-30 (5l)",
      price: "₹1938.00",
      brand: "BOSCH",
    },
  ];
  const arrayOfFilters = [
    {
      id: "filter1",
      image: filter1,
      name: "Element foam cleaner",
      price: "₹670.00",
      brand: "MAHINDRA",
    },
    {
      id: "filter2",
      image: filter2,
      name: "Element a/cl",
      price: "₹738.00",
      brand: "CHEVROLET",
    },
    {
      id: "filter3",
      image: filter3,
      name: "air filter assy-mesh",
      price: "₹621.00",
      brand: "MAHINDRA",
    },
    {
      id: "filter4",
      image: filter4,
      name: "cabin air filter",
      price: "₹599.00",
      brand: "Maruti Suzuki",
    },
    {
      id: "filter5",
      image: filter5,
      name: "kit filter element",
      price: "₹613.00",
      brand: "Mahindra",
    },
    {
      id: "filter6",
      image: filter6,
      name: "Element fuel filter",
      price: "₹700.00",
      brand: "Maruti suzuki",
    },

    {
      id: "filter7",
      image: filter7,
      name: "kit fuel filter",
      price: "₹1000.00",
      brand: "Ford",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h1 className="text-shadow">Maintainance Parts</h1>

        <div className="belts container-fluid">
          <div className="row " style={{gap: "2.5vw", margin: "50px 20px" }} >
            <h3 className="text-shadow">Belts</h3>
            {/* <div className='col-md-12'> */}

            {arrayOfBelt.map((item) => (
              <div className="col-md-3  product_card "
              onClick={() => openproduct(item)}>
                <img className="product_image" src={item.image} alt="" />
                <p className="product_name">{item.name}</p>
                <p className="product_price">{item.price}</p>
                <h6 className="product_brand">{item.brand}</h6>
              </div>
            ))}
            {/* </div> */}
          </div>
          <div
            className="row " 
            style={{ gap: "2.5vw", margin: "50px 20px" }}
            
          >
            <h3 className="text-shadow">Breaks</h3>
            {/* <div className='col-md-12'> */}

            {arrayOfBreaks.map((item) => (
              <div
                className="col-md-3 product_card  "
                onClick={() => openproduct(item)}
              >
                <img className="product_image" src={item.image} alt="" />
                <p className="product_name">{item.name}</p>
                <p className="product_price">{item.price}</p>
                <h6 className="product_brand">{item.brand}</h6>
              </div>
            ))}

            <div className="row "
            style={{ gap: "2.5vw", margin: "50px 20px" }}>
            <h3 className="text-shadow">Service Manuals</h3>
              {arrayOfServiveManual.map((item) => (
                <div
                  className="col-md-3 product_card  chhotecards"
                  onClick={() => openproduct(item)}
                >
                  <img className="product_image" src={item.image} alt="" />
                  <p className="product_name">{item.name}</p>
                  <p className="product_price">{item.price}</p>
                  <h6 className="product_brand">{item.brand}</h6>
                </div>
              ))}
            </div>
            <div className="row" 
            style={{ gap: "2.5vw", margin: "50px 0px" }}
            >
              <h3 className="text-shadow">Disk Brakes</h3>
              {arrayOfDisk.map((item) => (
                <div
                  className="col-md-3 product_card chhote_card2"
                  onClick={() => openproduct(item)}
                >
                  <img className="product_image" src={item.image} alt="" />
                  <p className="product_name">{item.name}</p>
                  <p className="product_price">{item.price}</p>
                  <h6 className="product_brand">{item.brand}</h6>
                </div>
              ))}
            </div>
            <div className="row " style={{ gap: "2.5vw", margin: "50px 0px" }}
 >
              <h3 className="text-shadow">Engine Olis</h3>
              {arrayOfEngineoils.map((item) => (
                <div
                  className="col-md-3 product_card chhote_card3"
                  onClick={() => openproduct(item)}
                >
                  <img className="product_image" src={item.image} alt="" />
                  <p className="product_name">{item.name}</p>
                  <p className="product_price">{item.price}</p>
                  <h6 className="product_brand">{item.brand}</h6>
                </div>
              ))}
            </div>
            <div className="row" style={{gap: "2.5vw", margin: "50px 20px" }}
 >
              <h3 className="text-shadow">Filters</h3>
              {arrayOfFilters.map((item) => (
                <div
                  className="col-md-3 product_card chhote_card4"
                  onClick={() => openproduct(item)}
                >
                  <img className="product_image" src={item.image} alt="" />
                  <p className="product_name">{item.name}</p>
                  <p className="product_price">{item.price}</p>
                  <h6 className="product_brand">{item.brand}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
