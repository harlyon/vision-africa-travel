import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ language, changeLanguage }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imgattr = "logo";

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        textAlign: "center",
      }}
      className="navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top"
    >
      <div
        className="container nav-container"
        // style={{
        //   paddingLeft: "38px",
        //   paddingRight: "0px",
        // }}
      >
        <div className="responsive-mobile-menu">
          <div className="mobile-logo">
            <Link to="/">
              <img src={publicUrl + "assets/img/vision.png"} alt={imgattr} />
            </Link>
          </div>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#tp_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </span>
          </button>
          <div className="nav-right-content">
            <ul className="pl-0">
              <li className="top-bar-btn-booking">
                <Link className="btn btn-yellow" to="/login">
                  VIP Entrance <i className="fa fa-paper-plane" />
                </Link>
              </li>
              <li style={{ color: "#333" }} className="tp-lang">
                <div className="tp-lang-wrap">
                  <select
                    className="single-select"
                    value={language}
                    onChange={changeLanguage}
                  >
                    <option value="en">English</option>
                    <option value="ch">中文</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="tp_main_menu">
          <div className="logo-wrapper desktop-logo">
            <Link to="/" className="main-logo">
              <img
                src={publicUrl + "assets/img/vision.png"}
                alt="logo"
                style={{
                  transform: "scale(3.1,4)",
                  display: "block",
                  paddingLeft: "30px",
                }}
              />
            </Link>
            <Link to="/" className="sticky-logo">
              <img
                src={publicUrl + "assets/img/vision.png"}
                style={{
                  transform: "scale(3.1,4)",
                  display: "block",
                  paddingLeft: "30px",
                }}
                alt="logo"
              />
            </Link>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link style={{ color: "#333" }} to="/">
                {language === "ch" ? "首页" : "Home"}
              </Link>
            </li>
            <li>
              <Link style={{ color: "#333" }} to="/vision">
                {language === "ch" ? "奇光视野" : "Vision of Difference"}
              </Link>
            </li>
            <li style={{ color: "#333" }} className="menu-item-has-children">
              <a style={{ color: "#333" }} href="#">
                {language === "ch" ? "活动" : "Activities"}
              </a>
              <ul className="sub-menu">
                <li>
                  <Link to="/city-tour">
                    {language === "ch" ? "城市观光" : "City Tour"}
                  </Link>
                </li>
                <li>
                  <Link to="/safari-tour">
                    {language === "ch" ? "游猎" : "Safari"}
                  </Link>
                </li>
                <li>
                  <Link to="/fishing-tour">
                    {language === "ch" ? "海钓" : "Fishing"}
                  </Link>
                </li>
                <li>
                  <Link to="/golf-tour">
                    {language === "ch" ? "高尔夫" : "Golfing"}
                  </Link>
                </li>
                <li>
                  <Link to="/diving-tour">
                    {language === "ch" ? "潜水" : "Diving"}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link style={{ color: "#333" }} to="/about">
                {language === "ch" ? "关于我们" : "About Us"}
              </Link>
            </li>
            <li>
              <Link style={{ color: "#333" }} to="/contact">
                {language === "ch" ? "联系我们" : "Contact"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right-content">
          <ul>
            <li>
              <Link className="btn btn-yellow" to="/login">
                {language === "ch" ? "VIP 入口" : "VIP Access"}{" "}
                <i className="fa fa-paper-plane" />
              </Link>
            </li>
            <li style={{ color: "#333" }} className="tp-lang">
              <div className="tp-lang-wrap">
                <select
                  className="single-select"
                  value={language}
                  onChange={changeLanguage}
                >
                  <option value="en">English</option>
                  <option value="ch">中文</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
