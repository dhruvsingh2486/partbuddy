import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div
      className="container-fluid footerbluearea"
    >
      <div className="row">
        <div className="col-md-6">
          <div
            className="1st_side"
            style={{ textAlign: "justify", margin: "15% 0 15% 20%" }}
          >
            <div className="head_line">download</div>
            <div className="head_line2">our mobile app</div>
            <p className="text">And get the full boodmo experience on the go</p>
          </div>
        </div>
        <div
          className="col-md-6"
          style={{ marginTop: "6%", paddingLeft: "-8%", marginLeft: "-10%" }}
        >
          <div class="footer_buttons">
            <a href="https://www.apple.com/app-store/" classname="app-store" >
              {" "}
              <div className="icom_mgn">
                <i class="fa-brands fa-app-store footer_icon"></i>
              </div>
              {/* <p className="line"> available on the </p> */}
              <p className="line-2">app store</p>
            </a>
          </div>

          <div class="footer_buttons-2">
            <a href="https://play.google.com/store" class="app-store">
              {" "}
              <div className="icom_mgn2">
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
