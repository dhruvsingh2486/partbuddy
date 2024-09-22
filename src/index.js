import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Footer from "./Componantes/footer/Footerone.jsx"


import Homepage from './components/homepage/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Airconditioningpartspage } from './components/airconditioningpartslistpage/Airconditioningpartspage';
import { Beltschainsandrollers } from './components/beltschainsandrollerspage/Beltschainsandrollers';
import { Bodypartspage } from './components/bodypartspage/Bodypartspage';
import { Maintainancepartspage } from './components/maintainanceservicepartlistpage/Maintainancepartspage';
import Productpage from './components/productpage/Productpage';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from './components/Themecontext';
import { Auth0Provider } from '@auth0/auth0-react';
import Bearingspage from './components/bearingspage/Bearingspage.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Auth0Provider
  domain="dev-vgzp3cnpxkv3vrjt.us.auth0.com"
    clientId="eTXXBy3ZRoxDiXdcbUhc6rrduQVi1mGn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <ThemeProvider>
<App/>

  <BrowserRouter>
<Routes>
  
< Route path='/' element={<Homepage/>} />
< Route path='/Maintainancepartspage' element={<Maintainancepartspage/>} />
< Route path='/Airconditioningpartspage' element={<Airconditioningpartspage/>} />
< Route path='/Beltschainsandrollers' element={<Beltschainsandrollers/>} />
< Route path='/Bearingspage' element={<Bearingspage/>} />
< Route path='/Bodypartspage' element={<Bodypartspage/>} />
<Route path="/productpage/:id" element={ <Productpage/> } />
{/* < Route path='/' element={<Navbar/>} /> */}
</Routes>
   
<Footer/>

  </BrowserRouter>
  </ThemeProvider>
  </Auth0Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
