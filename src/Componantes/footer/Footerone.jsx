import React from "react";
import "./footerone.css";
import Footer from "./Footer";
import "../automativetape/Automativetape"
function Footerone() {
  return (
    <>
    <Footer/>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="footer_title">
              <span style={{ color: "orange" }}>Part</span>     
                         <span>buddy</span>
              </div>
              <p className="footer_p">
                India's biggest online marketplace for car spare parts
              </p>
              <div className="social_links">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer_links">
                <p className="footer-heading1">about</p>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Suppliers Relations</a>
                  </li>
                  <li>
                    <a href="#">Discovery points</a>
                  </li>
                  <li>
                    <a href="#">Become a Vendor</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_links2">
                <p className="footer-heading2">policy</p>
                <ul>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy POlicy</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Buyers Policy</a>
                  </li>
                  <li>
                    <a href="#">Sellers Policy</a>
                  </li>
                  <li>
                    <a href="#">Anti-corruption Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_links3">
                <p className="footer-heading1three" style={{marginLeft:''}}>useful links</p>
                <ul>
                  <li>
                    <a href="#">Articles</a>
                  </li>
                  <li>
                    <a href="#">Brands</a>
                  </li>
                  <li>
                    <a href="#">Catalogues</a>
                  </li>
                  <li>
                    <a href="#">Car Makers</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Sitemap2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copyright">
            © 2015-2024 Smart Parts Online Pvt. Ltd. (v7.1.5 build 240821.1016)
          </p>
        </div>
      </div>
    </>
  );
}

export default Footerone;
