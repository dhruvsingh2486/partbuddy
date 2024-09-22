import React, {  } from 'react'
import { useParams } from 'react-router-dom'
import image1 from '../../assets/airconditioningpart/accompresser/image1.webp'
import image2 from '../../assets/airconditioningpart/accompresser/image2.webp'
import image3 from '../../assets/airconditioningpart/accompresser/image3.webp'
import image4 from '../../assets/airconditioningpart/accompresser/image4.webp'
import image5 from '../../assets/airconditioningpart/accompresser/image5.webp'
import image6 from '../../assets/airconditioningpart/accompresser/image6.webp'
import image7 from '../../assets/airconditioningpart/accompresser/image7.webp'
import image8 from '../../assets/airconditioningpart/accompresser/image8.webp'
import image9 from '../../assets/airconditioningpart/accompresser/image9.webp'

import compclutch1 from '../../assets/airconditioningpart/compressorclutch/compclutch1.webp'
import compclutch2 from '../../assets/airconditioningpart/compressorclutch/compclutch2.webp'
import compclutch3 from '../../assets/airconditioningpart/compressorclutch/compclutch3.webp'
import compclutch4 from '../../assets/airconditioningpart/compressorclutch/compclutch4.webp'
import compclutch5 from '../../assets/airconditioningpart/compressorclutch/compclutch5.webp'
import compclutch6 from '../../assets/airconditioningpart/compressorclutch/compclutch6.webp'
import compclutch7 from '../../assets/airconditioningpart/compressorclutch/compclutch7.webp'
import compclutch8 from '../../assets/airconditioningpart/compressorclutch/compclutch8.webp'
import compclutch9 from '../../assets/airconditioningpart/compressorclutch/compclutch9.webp'

import controlunit1 from '../../assets/airconditioningpart/accontrolunitparts/controlunit1.webp'
import controlunit2 from '../../assets/airconditioningpart/accontrolunitparts/controlunit2.webp'
import controlunit3 from '../../assets/airconditioningpart/accontrolunitparts/controlunit3.webp'
import controlunit4 from '../../assets/airconditioningpart/accontrolunitparts/controlunit4.webp'
import controlunit5 from '../../assets/airconditioningpart/accontrolunitparts/controlunit6.webp'
import controlunit6 from '../../assets/airconditioningpart/accontrolunitparts/controlunit6.webp'
import beltTiming15l from '../../assets/maintainanceservicepart/belts/belt timmimg (1.5l sohc).webp'
import timingbelt5 from '../../assets/maintainanceservicepart/belts/timimg belt 5.webp'
import timingbelt from '../../assets/maintainanceservicepart/belts/timing belt.webp'
import timingbelt6 from '../../assets/maintainanceservicepart/belts/timing belt6.webp'
import timingbelt2 from '../../assets/maintainanceservicepart/belts/timing belt2.webp'
import timingbelt3 from '../../assets/maintainanceservicepart/belts/timimg belt 3.webp'
import timingbelt4 from '../../assets/maintainanceservicepart/belts/timing belt 4.webp'
import toothedbelt from '../../assets/maintainanceservicepart/belts/toothed belt.webp'
import breaks1 from '../../assets/maintainanceservicepart/breaks/breaks1.webp'
import breaks2 from '../../assets/maintainanceservicepart/breaks/breaks2.webp'
import break3 from '../../assets/maintainanceservicepart/breaks/break3.webp'
import break4 from '../../assets/maintainanceservicepart/breaks/break4.webp'
import break5 from '../../assets/maintainanceservicepart/breaks/break5.webp'
import break6 from '../../assets/maintainanceservicepart/breaks/break6.webp'
import break7 from '../../assets/maintainanceservicepart/breaks/break7.webp'
import break8 from '../../assets/maintainanceservicepart/breaks/break8.webp'
import break9 from '../../assets/maintainanceservicepart/breaks/break9.webp'
import break10 from '../../assets/maintainanceservicepart/breaks/break10.webp'
import servicemanual1 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 1.webp'
import servicemanual2 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 2.webp'
import servicemanual3 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 3.webp'
import servicemanual4 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 4.webp'
import servicemanual5 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 5.webp'
import servicemanual6 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 6.webp'
import servicemanual7 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 7.webp'
import servicemanual8 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 8.webp'
import servicemanual9 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 9.webp'
import servicemanual10 from '../../assets/maintainanceservicepart/servicemanualbooks/service manual 10.webp'
import disk1 from '../../assets/maintainanceservicepart/disks/disk1.webp'
import disk2 from '../../assets/maintainanceservicepart/disks/disk2.webp'
import disk3 from '../../assets/maintainanceservicepart/disks/disk3.webp'
import disk4 from '../../assets/maintainanceservicepart/disks/disk4.webp'
import disk5 from '../../assets/maintainanceservicepart/disks/disk5.webp'
import disk6 from '../../assets/maintainanceservicepart/disks/disk6.webp'
import oil1 from '../../assets/maintainanceservicepart/engineoils/OIL1.webp'
import oil2 from '../../assets/maintainanceservicepart/engineoils/OIL2.webp'
import oil3 from '../../assets/maintainanceservicepart/engineoils/OIL3.webp'
import oil6 from '../../assets/maintainanceservicepart/engineoils/OIL6.webp'
import oil7 from '../../assets/maintainanceservicepart/engineoils/OIL7.webp'
import oil8 from '../../assets/maintainanceservicepart/engineoils/OIL8.webp'
import oil9 from '../../assets/maintainanceservicepart/engineoils/OIL9.webp'
import filter1 from '../../assets/maintainanceservicepart/filters/filter1.webp'
import filter2 from '../../assets/maintainanceservicepart/filters/filter2.webp'
import filter3 from '../../assets/maintainanceservicepart/filters/filter3.webp'
import filter4 from '../../assets/maintainanceservicepart/filters/filter4.webp'
import filter5 from '../../assets/maintainanceservicepart/filters/filter5.webp'
import filter6 from '../../assets/maintainanceservicepart/filters/filter6.webp'
import filter7 from '../../assets/maintainanceservicepart/filters/filter7.webp'
import './Product.css'
import ReactImageMagnify from 'react-image-magnify';
import Navbar from '../navbar/Navbar'

// bearingspage

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

// chains and belts


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

// body parts

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
function Productpage() {
    
    const allproducts = [

  
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
      

      // upper parts are body parts

     
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
    

      // uppers are chains and belts

        {
          id:"ACcompressor1",
          image:image1,
          name:"compressor assembly",
          price: "₹5287.00",
          brand:"behr"
        },
        {
          id:"ACcompressor2",
          image:image2,
          name:"air compressor",
          price: "₹5903.00",
          brand:"fiat"
        },
        {
          id:"ACcompressor3",
          image:image3,
          name:"valve a/c press rel",
          price: "₹118.00",
          brand:"ford"
        },
        {
          id:"ACcompressor4",
          image:image4,
          name:"compressor",
          price: "₹7667.00",
          brand:"subros"
        },
        {
          id:"ACcompressor5",
          image:image5,
          name:"compressor assey",
          price: "₹8140.00",
          brand:"subros"
        },
        {
          id:"ACcompressor6",
          image:image6,
          name:"compressor assembly",
          price: "₹13188.00",
          brand:"ford"
        },
        
        {
          id:"ACcompressor7",
          image:image7,
          name:"compressor assembly",
          price: "₹74.00",
          brand:"doowon"
        }
        ,
        
        {
          id:"ACcompressor8",
          image:image8,
          name:"compressor assembly",
          price: "₹9810.00",
          brand:"subros"
        }
        ,
        
        {
          id:"ACcompressor9",
          image:image9,
          name:"compressor assembly",
          price: "₹9558.00",
          brand:"subros"
        }
        
    
      ,        {
          id:"ACcompressorclutch1",
          image:compclutch1,
          name:"coil-field",
          price: "₹1099.00",
          brand:"mobis (hyundai, kia)"
        },
        {
          id:"ACcompressorclutch2",
          image:compclutch2,
          name:"magnetic clutch compressor",
          price: "₹1635.00",
          brand:"nrf"
        },
        {
          id:"ACcompressorclutch3",
          image:compclutch3,
          name:"disk & hub a/c",
          price: "₹2553.00",
          brand:"mobis (hyundai, kia)"
        },
        {
          id:"ACcompressorclutch4",
          image:compclutch4,
          name:"pully assy-a/con",
          price: "₹4394.00",
          brand:"mobis (hyundai, kia)"
    
        },
        {
          id:"ACcompressorclutch5",
          image:compclutch5,
          name:"idler ac compressor",
          price: "₹589.00",
          brand:"mahindra"
        },
        {
          id:"ACcompressorclutch6",
          image:compclutch6,
          name:"pully and bearing",
          price: "₹5489.00",
          brand:"chevrolet"
        },
        
        {
          id:"ACcompressorclutch7",
          image:compclutch7,
          name:"assy tensiom pulley",
          price: "₹628.00",
          brand:"tata"
        }
        ,
        
        {
          id:"ACcompressorclutch8",
          image:compclutch8,
          name:"disk and hub assy-a/c",
          price: "₹1637.00",
          brand:"mobis (hyundai, kia)"
    
        }
        ,
        
        {
          id:"ACcompressorclutch9",
          image:compclutch9,
          name:"disk and hub assy-a/c",
          price: "₹1727.00",
          brand:"mobis (hyundai, kia)"
        }
        
    
      ,
        {
          id:"ACcontrolunit1",
          image:controlunit1,
          name:"control assy air",
          price: "₹1012.00",
          brand:"toyota, lexux"
        },
        {
          id:"ACcontrolunit2",
          image:controlunit2,
          name:"control assy air",
          price: "₹1037.00",
          brand:"toyota, lexux"
        },
        {
          id:"ACcontrolunit3",
          image:controlunit3,
          name:"control unit heater",
          price: "₹1353.00",
          brand:"maruti suzuki"
        },
        {
          id:"ACcontrolunit4",
          image:controlunit4,
          name:"assy manual control unit",
          price: "₹3320.00",
          brand:"tata"
    
        },
        {
          id:"ACcontrolunit5",
          image:controlunit5,
          name:"control htr and ac",
          price: "₹2089.00",
          brand:"chevrolet"
        },
        {
          id:"ACcontrolunit6",
          image:controlunit6,
          name:"lever asm mode",
          price: "₹2180.00",
          brand:"chevrolet"
        }
        
       
    
        
    
      ,


        {
          id:"belt1",
          name:"BELT TIMIMG (1.5L SOHC DI TC I4 DIESEL DV5)",
          image:beltTiming15l,
          price:"₹877.00",
          brand:"FORD"
        },
        {
          id:"belt2",
          name:"TOOTHED BELT",
          image:toothedbelt,
          price:"₹1414.00",
          brand:"VAG(VW,AUDI,SKODA)"
        },
        {
          id:"belt3",
          name:"TIMING BELT",
          image:timingbelt,
          price:"₹1844.00",
          brand:"Nissan/Renault"
        },
        {
          id:"belt4",
          name:"TIMIMG BELT",
          image:timingbelt2,
          price:"₹618.00",
          brand:"CONTITECH"
        },
        {
          id:"belt5",
          name:"TIMIMG BELT",
          image:timingbelt3,
          price:"₹623.00",
          brand:"Mitsubishi"
        },
        {
          id:"belt6",
          name:"TIMING BELT",
          image:timingbelt4,
          price:"₹643.00",
          brand:"OPTIBELT"
        },
        
        {
          id:"belt7",
          name:"TIMING BELT",
          image:timingbelt6,
          price:"₹673.00",
          brand:"CONTITECH"
        },
        
        {
          id:"belt8",
          name:"TIMING BELT",
          image:timingbelt5,
          price:"₹706.00",
          brand:"Mitsubishi"
        }
        
    ,
        { id:"break1",
         name:"front breaks",
         price:"₹887.00",
         image:breaks1,
         brand:"BOSCH"
     
        },
        { id:"break2",
         name:"front breaks",
         price:"₹780.00",
         image:breaks2,
          brand:"BOSCH"
     
        },
        { id:"break3",
         name:"Rear Breaks Assembly",
         price:"₹2540.00",
         image:break3,
          brand:"TVS Girling"
     
        },
        { id:"break4",
         name:"Break Drum",
         price:"₹1089.00",
         image:break4,
          brand:"KTEK"
     
        },
        { id:"break5",
         name:"Rear Break Shoe set",
         price:"₹622.00",
         image:break5,
          brand:"Super circle"
     
        },
        { id:"break6",
         name:"Rear Break Shoe set",
         price:"₹2523.00",
         image:break6,
          brand:"RANE"
     
        },
        { id:"break7",
         name:"Break Fluid (1L)",
         price:"₹920.00",
         image:break7,
          brand:"BOSCH"
     
        },
        { id:"break8",
         name:"Break Fluid DOT4 (0.5L)",
         price:"₹187.00",
         image:break8,
          brand:"BOSCH"
     
        },
        { id:"break9",
         name:"Pink kit, Front Disk slide",
         price:"₹727.00",
         image:break9,
          brand:"Toyota/Lexus"
     
        },
        { id:"break10",
         name:"1 set of guide Bushing",
         price:"₹989.00",
         image:break10,
          brand:"BOSCH"
     
        },
       
         {
           id:"servicemanual1",
           image:servicemanual1,
           name:"part catalogue ignis",
           price: "₹795.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"servicemanual2",
           image:servicemanual2,
           name:"xl6 service manual",
           price: "₹1,515.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"servicemanual3",
           image:servicemanual3,
           name:"part catalogue Swift ans dzire2",
           price: "₹835.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"servicemanual4",
           image:servicemanual4,
           name:"case documents",
           price: "₹259.00",
           brand:"ford"
         },
         {
           id:"servicemanual5",
           image:servicemanual5,
           name:"part catalogue swift",
           price: "₹795.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"servicemanual6",
           image:servicemanual6,
           name:"Literature - owner",
           price: "₹790.00",
           brand:"FORD"
         },
         {
           id:"servicemanual7",
           image:servicemanual7,
           name:"case - documents",
           price: "₹536.00",
           brand:"FORD"
         },
         {
           id:"servicemanual8",
           image:servicemanual8,
           name:"noise and vibration manual",
           price: "₹575.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"servicemanual9",
           image:servicemanual9,
           name:"part catalogue ciaz",
           price: "₹580.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"servicemanual10",
           image:servicemanual10,
           name:"part catalogue esteem",
           price: "₹545.00",
           brand:"Maruti Suzuki"
         },
      
         {
           id:"disk1",
           image:disk1,
           name:"disk assy clutch",
           price: "₹1495.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"disk2",
           image:disk2,
           name:"disk assy clutch",
           price: "₹3817.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"disk3",
           image:disk3,
           name:"disk assy clutch",
           price: "₹7835.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"disk4",
           image:disk4,
           name:"clutch disk",
           price: "₹1179.00",
           brand:"FORD"
         },
         {
           id:"disk5",
           image:disk5,
           name:"disk clutch",
           price: "₹1247.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"disk6",
           image:disk6,
           name:"disk comp-clutch",
           price: "₹1790.00",
           brand:"FORD"
         },
                {
           id:"oil1",
           image:oil1,
           name:"Enginr oil 5w-30l (4l)",
           price: "₹2495.00",
           brand:"Shell"
         },
         {
           id:"oil2",
           image:oil2,
           name:"Enginr oil 0w-20l (3.5l)",
           price: "₹3817.00",
           brand:"Shell"
         },
         {
           id:"oil3",
           image:oil3,
           name:"dEnginr oil 0w-20l (3.5l)",
           price: "₹1224.00",
           brand:"Castrol"
         },
         {
           id:"oil4",
           image:oil9,
           name:"Enginr oil 0w-20l (5l)",
           price: "₹1938.00",
           brand:"BOSCH"
         },
         {
           id:"oil5",
           image:oil2,
           name:"Enginr oil 0w-20l (3.5l)",
           price: "₹2249.00",
           brand:"Shell"
         },
         {
           id:"oil6",
           image:oil6,
           name:"Enginr oil 20w-50 (5l)",
           price: "₹1872.00",
           brand:"Castrol"
         },
         
         {
           id:"oil7",
           image:oil7,
           name:"Enginr oil 5w-30 (1l)",
           price: "₹488.00",
           brand:"Patronas"
         }
         
       
         ,
         {
           id:"oil8",
           image:oil8,
           name:"Enginr oil 5w-40 (1l)",
           price: "₹936.00",
           brand:"Shell"
         }, 
          {
           id:"oil9",
           image:oil9,
           name:"Enginr oil 5w-30 (5l)",
           price: "₹1938.00",
           brand:"BOSCH"
         },
     
         {
           id:"filter1",
           image:filter1,
           name:"Element foam cleaner",
           price: "₹670.00",
           brand:"MAHINDRA"
         },
         {
           id:"filter2",
           image:filter2,
           name:"Element a/cl",
           price: "₹738.00",
           brand:"CHEVROLET"
         },
         {
           id:"filter3",
           image:filter3,
           name:"air filter assy-mesh",
           price: "₹621.00",
           brand:"MAHINDRA"
         },
         {
           id:"filter4",
           image:filter4,
           name:"cabin air filter",
           price: "₹599.00",
           brand:"Maruti Suzuki"
         },
         {
           id:"filter5",
           image:filter5,
           name:"kit filter element",
           price: "₹613.00",
           brand:"Mahindra"
         },
         {
           id:"filter6",
           image:filter6,
           name:"Element fuel filter",
           price: "₹700.00",
           brand:"Maruti suzuki"
         },
         
         {
           id:"filter7",
           image:filter7,
           name:"kit fuel filter",
           price: "₹1000.00",
           brand:"Ford"
         }

        //  bearingsdata

    ,
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
  
   

    const {id} = useParams()

    //  const [product, setproduct] = useState(null)


    //  useEffect(()=>{
      const products = allproducts.find((product)=> product.id === id) ;
      if(!allproducts){
        return <h2>Product not found!!</h2>
        // console.log(allproducts)
      }
      // setproduct(product)
    //  },[])
   
 

    

   
  return (

<>

<Navbar/>


    <div class="card mb-3 crd_mng">
  <div class="row g-0">
    <div class="col-md-4">
    <div className="product-image">
          <ReactImageMagnify {...{
    smallImage: {
      className:'product-image',
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: products.image
    },
    largeImage: {
      className:'product-image',
        src: products.image,
        width: 1600,
        height: 1200
    }
}} />
          </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">{products.name}</h2>
        <h2 class="card-title">{products.title}</h2>
        <h3 className='product-price'>{products.price}</h3>
        <h3 className='product-brand'>{products.brand}</h3>

        <p class="card-text">Cars have a variety of belts that connect and power different components, including the engine, alternator, water pump, and power steering pump: 
V-belts
These belts have a groove in the center that resembles a "V" and connect to the crankshaft to power accessories like the alternator and water pump. 
Serpentine belts
These belts loop around the engine and power multiple components, such as the alternator, water pump, power steering pump, and air conditioning. 
Timing belts
Also called camshaft drive belts, these belts connect to the crankshaft and turn the camshaft to open and close the engine valves. 
Here are some things to know about car belts: 
Regular maintenance
Belts can wear down, stretch, or crack over time, so it's important to inspect and maintain them regularly to prevent breakdowns. 
Belt tension
If the belt isn't tensioned correctly, it can slip off or cause strain on other components. 
Belt type
The number and type of belts a car has depends on its make, model, and size. 
Belt cost
The average cost to replace a serpentine belt is between $109 and $134. </p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Productpage