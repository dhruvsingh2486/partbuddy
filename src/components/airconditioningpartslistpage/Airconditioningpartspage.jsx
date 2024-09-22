import React from "react";
import "../../components/maintainanceservicepartlistpage/Maintainancepart.css";
import image1 from "../../assets/airconditioningpart/accompresser/image1.webp";
import image2 from "../../assets/airconditioningpart/accompresser/image2.webp";
import image3 from "../../assets/airconditioningpart/accompresser/image3.webp";
import image4 from "../../assets/airconditioningpart/accompresser/image4.webp";
import image5 from "../../assets/airconditioningpart/accompresser/image5.webp";
import image6 from "../../assets/airconditioningpart/accompresser/image6.webp";
import image7 from "../../assets/airconditioningpart/accompresser/image7.webp";
import image8 from "../../assets/airconditioningpart/accompresser/image8.webp";
import image9 from "../../assets/airconditioningpart/accompresser/image9.webp";

import compclutch1 from "../../assets/airconditioningpart/compressorclutch/compclutch1.webp";
import compclutch2 from "../../assets/airconditioningpart/compressorclutch/compclutch2.webp";
import compclutch3 from "../../assets/airconditioningpart/compressorclutch/compclutch3.webp";
import compclutch4 from "../../assets/airconditioningpart/compressorclutch/compclutch4.webp";
import compclutch5 from "../../assets/airconditioningpart/compressorclutch/compclutch5.webp";
import compclutch6 from "../../assets/airconditioningpart/compressorclutch/compclutch6.webp";
import compclutch7 from "../../assets/airconditioningpart/compressorclutch/compclutch7.webp";
import compclutch8 from "../../assets/airconditioningpart/compressorclutch/compclutch8.webp";
import compclutch9 from "../../assets/airconditioningpart/compressorclutch/compclutch9.webp";

import controlunit1 from "../../assets/airconditioningpart/accontrolunitparts/controlunit1.webp";
import controlunit2 from "../../assets/airconditioningpart/accontrolunitparts/controlunit2.webp";
import controlunit3 from "../../assets/airconditioningpart/accontrolunitparts/controlunit3.webp";
import controlunit4 from "../../assets/airconditioningpart/accontrolunitparts/controlunit4.webp";
import controlunit5 from "../../assets/airconditioningpart/accontrolunitparts/controlunit6.webp";
import controlunit6 from "../../assets/airconditioningpart/accontrolunitparts/controlunit6.webp";
import Navbar from "../navbar/Navbar";
import "../tc/Tc.css";
import { useNavigate } from "react-router-dom";

export const Airconditioningpartspage = () => {
  const navigate = useNavigate();

  const arrayOfACCompressor = [
    {
      id: "ACcompressor1",
      image: image1,
      name: "compressor assembly",
      price: "₹5287.00",
      brand: "behr",
    },
    {
      id: "ACcompressor2",
      image: image2,
      name: "air compressor",
      price: "₹5903.00",
      brand: "fiat",
    },
    {
      id: "ACcompressor3",
      image: image3,
      name: "valve a/c press rel",
      price: "₹118.00",
      brand: "ford",
    },
    {
      id: "ACcompressor4",
      image: image4,
      name: "compressor",
      price: "₹7667.00",
      brand: "subros",
    },
    {
      id: "ACcompressor5",
      image: image5,
      name: "compressor assey",
      price: "₹8140.00",
      brand: "subros",
    },
    {
      id: "ACcompressor6",
      image: image6,
      name: "compressor assembly",
      price: "₹13188.00",
      brand: "ford",
    },

    {
      id: "ACcompressor7",
      image: image7,
      name: "compressor assembly",
      price: "₹74.00",
      brand: "doowon",
    },
    {
      id: "ACcompressor8",
      image: image8,
      name: "compressor assembly",
      price: "₹9810.00",
      brand: "subros",
    },
    {
      id: "ACcompressor9",
      image: image9,
      name: "compressor assembly",
      price: "₹9558.00",
      brand: "subros",
    },
  ];
  const arrayOfACCompressorClutch = [
    {
      id: "ACcompressorclutch1",
      image: compclutch1,
      name: "coil-field",
      price: "₹1099.00",
      brand: "mobis (hyundai, kia)",
    },
    {
      id: "ACcompressorclutch2",
      image: compclutch2,
      name: "magnetic clutch compressor",
      price: "₹1635.00",
      brand: "nrf",
    },
    {
      id: "ACcompressorclutch3",
      image: compclutch3,
      name: "disk & hub a/c",
      price: "₹2553.00",
      brand: "mobis (hyundai, kia)",
    },
    {
      id: "ACcompressorclutch4",
      image: compclutch4,
      name: "pully assy-a/con",
      price: "₹4394.00",
      brand: "mobis (hyundai, kia)",
    },
    {
      id: "ACcompressorclutch5",
      image: compclutch5,
      name: "idler ac compressor",
      price: "₹589.00",
      brand: "mahindra",
    },
    {
      id: "ACcompressorclutch6",
      image: compclutch6,
      name: "pully and bearing",
      price: "₹5489.00",
      brand: "chevrolet",
    },

    {
      id: "ACcompressorclutch7",
      image: compclutch7,
      name: "assy tensiom pulley",
      price: "₹628.00",
      brand: "tata",
    },
    {
      id: "ACcompressorclutch8",
      image: compclutch8,
      name: "disk and hub assy-a/c",
      price: "₹1637.00",
      brand: "mobis (hyundai, kia)",
    },
    {
      id: "ACcompressorclutch9",
      image: compclutch9,
      name: "disk and hub assy-a/c",
      price: "₹1727.00",
      brand: "mobis (hyundai, kia)",
    },
  ];
  const arrayOfACConrolUnit = [
    {
      id: "ACcontrolunit1",
      image: controlunit1,
      name: "control assy air",
      price: "₹1012.00",
      brand: "toyota, lexux",
    },
    {
      id: "ACcontrolunit2",
      image: controlunit2,
      name: "control assy air",
      price: "₹1037.00",
      brand: "toyota, lexux",
    },
    {
      id: "ACcontrolunit3",
      image: controlunit3,
      name: "control unit heater",
      price: "₹1353.00",
      brand: "maruti suzuki",
    },
    {
      id: "ACcontrolunit4",
      image: controlunit4,
      name: "assy manual control unit",
      price: "₹3320.00",
      brand: "tata",
    },
    {
      id: "ACcontrolunit5",
      image: controlunit5,
      name: "control htr and ac",
      price: "₹2089.00",
      brand: "chevrolet",
    },
    {
      id: "ACcontrolunit6",
      image: controlunit6,
      name: "lever asm mode",
      price: "₹2180.00",
      brand: "chevrolet",
    },
  ];
  function openproduct(item) {
    navigate(`/Productpage/${item.id}`);
  }

  return (
    <>
      <Navbar />

      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <h1 className="text-shadow">Air Conditioning Parts</h1>

        <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">AC Compressors</h3>
          {/* <div className='col-md-12'> */}

          {arrayOfACCompressor.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.name}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.brand}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>


        <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">AC Compressor clutch</h3>
          {/* <div className='col-md-12'> */}

          {arrayOfACCompressorClutch.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.name}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.brand}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>

        
        <div className="row" style={{ gap: "4vw", margin: "50px 20px" }}>
          <h3 className="text-shadow">AC Control Unit</h3>
          {/* <div className='col-md-12'> */}

          {arrayOfACConrolUnit.map((item) => (
            <div
              className="col-md-3 product_card "
              onClick={() => openproduct(item)}
            >
              <img className="product_image" src={item.image} alt="" />
              <p className="product_name">{item.name}</p>
              <p className="product_price">{item.price}</p>
              <h6 className="product_brand">{item.brand}</h6>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
