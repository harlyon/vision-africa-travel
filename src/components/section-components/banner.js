import React, { Component } from "react";

const Banner = ({ language }) => {
  return (
    <div>
      <div className="banner-area viaje-go-top">
        <div className="banner-slider">
          <div className="banner-slider-item banner-bg-1">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
                  <div className="row">
                    <div className="col-lg-9 col-sm-8">
                      <div className="banner-inner">
                        <p className="banner-cat s-animate-1">
                          {language === "ch"
                            ? "精彩体验"
                            : "Awesome Experience"}
                        </p>
                        <h2 className="banner-title s-animate-2">
                          {language === "ch" ? "城市观光" : "City Tour"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-12 banner-tour-package">
                      <div className="row">
                        <div className="col-sm-4 s-animate-3">
                          <div className="tp-price-meta">
                            <h2>
                              {language === "ch"
                                ? "感受城市脉动"
                                : "Explore the lively spirit of the city"}
                            </h2>
                            <p className="tp-price-meta-details">@excellence</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-slider-item banner-bg-4">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
                  <div className="row">
                    <div className="col-lg-9 col-sm-8">
                      <div className="banner-inner">
                        <p className="banner-cat s-animate-1">
                          {language === "ch"
                            ? "精彩体验"
                            : "Awesome Experience"}
                        </p>
                        <h2 className="banner-title s-animate-2">
                          {language === "ch" ? "高尔夫之旅" : "Golfing Tour"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-12 banner-tour-package">
                      <div className="row">
                        <div className="col-sm-4 s-animate-3">
                          <div className="tp-price-meta">
                            <h2>
                              {language === "ch"
                                ? "专业场地 专业活动 专业服务"
                                : "Participate in Professional Golf events"}
                            </h2>
                            <p className="tp-price-meta-details">@excellence</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-slider-item banner-bg-2">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
                  <div className="row">
                    <div className="col-lg-9 col-sm-8">
                      <div className="banner-inner">
                        <p className="banner-cat s-animate-1">
                          {language === "ch"
                            ? "精彩体验"
                            : "Awesome Experience"}
                        </p>
                        <h2 className="banner-title s-animate-2">
                          {language === "ch" ? "游猎" : "Safari Tour"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-12 banner-tour-package">
                      <div className="row">
                        <div className="col-sm-4 s-animate-3">
                          <div className="tp-price-meta">
                            <h2>
                              {language === "ch"
                                ? "与野生动物的亲密接触"
                                : "Experience one of Africa greatest widelife"}
                            </h2>
                            <p className="tp-price-meta-details">@excellence</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-slider-item banner-bg-3">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
                  <div className="row">
                    <div className="col-lg-9 col-sm-8">
                      <div className="banner-inner">
                        <p className="banner-cat s-animate-1">
                          {language === "ch"
                            ? "精彩体验"
                            : "Awesome Experience"}
                        </p>
                        <h2 className="banner-title s-animate-2">
                          {language === "ch" ? "潜水体验" : "Diving Experience"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-12 banner-tour-package">
                      <div className="row">
                        <div className="col-sm-4 s-animate-3">
                          <div className="tp-price-meta">
                            <h2>
                              {language === "ch"
                                ? "尽享水下奇景"
                                : "Experience great diving scenery"}
                            </h2>
                            <p className="tp-price-meta-details">@excellence</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-social-meta">
        <div className="banner-slider-dots" />
        <ul className="social-icon">
          <li>
            <a className="facebook" href="/" target="_blank">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a className="twitter" href="/" target="_blank">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a className="pinterest" href="/" target="_blank">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="banner-slider-controls">
          <div className="slider-nav tp-control-nav" />
          {/*slider-nav*/}
          <div className="tp-slider-extra slider-extra">
            <div className="text">
              <span className="first">01</span>
              <span className="devider">/</span>
              <span className="last" />
            </div>
          </div>
          {/*slider-extra*/}
        </div>
      </div>
    </div>
  );
};

export default Banner;
