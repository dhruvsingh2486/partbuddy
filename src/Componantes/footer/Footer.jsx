import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="container-fluid footerbluearea">
      <div className="row">
        <div className="col-md-6">
          <div
            className="first_side"
            // style={{ textAlign: "justify", margin: "15% 0 15% 20%" }}
          >
            <div className="head_line">download</div>
            <div className="head_line2">our mobile app</div>
          </div>
          <p className="text">And get the full boodmo experience on the go</p>
        </div>
        <div
          className="col-md-6 app-buttons"
          // style={{ marginTop: "6%", paddingLeft: "-8%", marginLeft: "-10%" }}
        >
          <div class="footer_buttons">
            <a href="https://www.apple.com/app-store/" classname="app-store"
            // style={{border:"3px solid yellow"}}
            >
              {" "}
              <div className="icom_mgn">
                <i class="fa-brands fa-app-store footer_icon"></i>
              </div>
              {/* <p className="line"> available on the </p> */}
              <p className="line-2">app store</p>
            </a>
          </div>

          <div class="footer_buttons">
            <a href="https://play.google.com/store" class="app-store">
              {" "}
              <div className="icom_mgn">
                <i class="fa-brands fa-google-play"></i>
              </div>
              {/* <p className="line"> available on the </p> */}
              <p className="line-2">play store</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
