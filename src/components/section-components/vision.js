import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/page-header";
import Footer from "../global-components/footer-v2";
import useLanguage from "../../hooks/useLanguage";

const Vision = () => {
  const [language, changeLanguage] = useLanguage();
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <PageHeader
        headertitle={language === "ch" ? "奇光视野" : "Vision of Difference"}
      />
      <div className="about-section pd-top-80">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 align-self-center wow animated fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="section-title mb-lg-0 mb-4 text-center text-lg-left">
                <h2 className="title">
                  {language === "ch" ? "奇光视野" : "Vision of Difference"}{" "}
                  <br />
                </h2>
                <p>
                  We are leaders in customized and budget-friendly South African
                  safaris. we aim To provide everyone with access to memorable
                  safari experiences of a lifetime by by opening up the magic of
                  safari to everyone, regardless of budget. Our aim is to create
                  ideal opportunities for you to experience and encounter the
                  wildlife and/or nature that surrounds you.
                </p>
                <Link className="btn btn-yellow" to="/about">
                  <span>
                    {language === "ch" ? "更多" : "Read More"}
                    <i className="la la-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6 offset-xl-1 wow animated fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="video-popup-wrap">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/others/video.jpeg"}
                    alt="video"
                  />
                </div>
                <div className="video-popup-btn">
                  <a
                    href={publicUrl + "assets/video/safari.mp4"}
                    className="video-play-btn mfp-iframe"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer language={language} changeLanguage={changeLanguage} />
    </>
  );
};

export default Vision;
