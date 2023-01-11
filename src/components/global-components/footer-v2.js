import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer_v2 extends Component {
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "Footer logo";

    return (
      <footer className="footer-area style-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7">
              <div className="section-title mb-4 text-center">
                <h2 className="title">Newsletter</h2>
                <p>Sign up to receive the best offers</p>
              </div>
              <div className="widget input-group newslatter-wrap">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-yellow" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="about_us_widget text-center">
                <Link to="/" className="footer-logo">
                  <img
                    src={publicUrl + "assets/img/vision.png"}
                    alt="footerlogo"
                    style={{
                      height: "20px",
                      width: "100%",
                    }}
                  />
                </Link>
                {/* <p>
                  We offer exceptional value without compromising on quality. On our
                  tours, you can see more sights, have more local experiences,
                  and enjoy more delicious, authentic meals—all while staying in
                  high quality, boutique hotels and charming, family-run inns.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12">
              <div className="footer-widget widget text-center">
                <div className="widget-contact d-inline-flex">
                  <p className="telephone text-left">
                    <i className="fa fa-phone base-color" />
                    <span>(+27) 10 822 7588</span>
                  </p>
                  <p className="location text-left">
                    <i className="fa fa-envelope-o" />
                    <span>info@visiontravel.co.za</span>
                  </p>
                  <p className="text-left">
                    <i className="fa fa-map-marker" />
                    <span>
                      7 Stirrup Lane,Woodmead Office Park
                      <br />
                      Sandton 2191. Johannesburg
                    </span>
                  </p>
                </div>
              </div>
              <div className="footer-widget widget text-center">
                <ul className="widget_nav_menu text-center viaje-go-top">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/destination-list">Vision of Difference</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-inner border-tp-solid">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-9">
                <div className="copyright-text text-left">
                  © Vision Africa 2022 All rights reserved. Powered by{" "}
                  <a href="/#" target="_blank">
                    <i className="fa fa-heart" />
                    <span>Vision Africa.</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-3">
                <ul className="social-icon float-lg-right">
                  <li>
                    <a className="facebook" href="/#" target="_blank">
                      <i className="fa fa-facebook  " />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="/#" target="_blank">
                      <i className="fa fa-twitter  " />
                    </a>
                  </li>
                  <li>
                    <a className="pinterest" href="/#" target="_blank">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer_v2;
