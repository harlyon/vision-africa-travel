import React, { Component } from "react";
const DivingDetails = ({ language }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div>
      <div className="destinations-details-page mg-top--70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/diving.jpg"}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/diving-1.jpg"}
                      alt="img"
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/diving-2.jpg"}
                      alt="img"
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      style={{
                        width: "100%",
                      }}
                      src={publicUrl + "assets/img/diving-3.jpeg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="destinations-details-main-slider-controls">
                  <div className="slider-nav tp-control-nav" />
                  {/*slider-nav*/}
                  <div className="slider-extra tp-slider-extra">
                    <div className="text">
                      <span className="first">01 </span>
                      <span className="last">05</span>
                    </div>
                    {/*text*/}
                    <div
                      className="d-list-progress"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="slider__label sr-only" />
                    </div>
                  </div>
                  {/*slider-extra*/}
                </div>
              </div>
            </div>
          </div>
          {/* destinations-details-main-slider End */}
          <div className="row destinations-details-location-name">
            <div className="col-lg-12">
              <h3>{language === "ch" ? "潜水" : "Diving Tour"}</h3>
            </div>
            <div className="col-lg-6">
              {language === "ch" ? (
                <p>南非的海岸线充满奇迹与浪漫，是一片等待探索的原始之地。</p>
              ) : (
                <p>
                  Diving is one of South Africa’s adventurous activities and our
                  coastline is a place of wonders waiting for you to explore.
                </p>
              )}
            </div>
            <div className="col-lg-6">
              {language === "ch" ? (
                <p>
                  从鲨鱼笼潜水、出海观鲸到沙丁鱼大迁徙，奇光旅行助您实现海洋梦想。
                </p>
              ) : (
                <p>
                  From shark cage diving to sardine run, and the most famous
                  marine big-5 safari, Vision Africa make your dream come true.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={"assets/img/diving-4.jpeg"}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={"assets/img/diving-5.jpeg"}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={"assets/img/diving-6.jpeg"}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivingDetails;
