import React, { Component } from "react";

const FishingDetails = ({ language }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div>
      <div className="destinations-details-page mg-top--70">
        <div className="container">
          {/* destinations-details-main-slider start */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/fishing-1.jpg"}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/fishing-6.webp"}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/fishing-7.webp"}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src={publicUrl + "assets/img/fishing-4.webp"}
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
              <h3>Fishing Tour</h3>
            </div>
            <div className="col-lg-6">
              {language === "ch" ? (
                <p>
                  如果你是一名钓鱼高手，或只是想和家人一起放松，我们随时准备为您提供服务。私人海钓包船可以带您去任何想去的地方，有经验丰富的船长及工作人员为您保驾护航，
                </p>
              ) : (
                <p>
                  If you are a fishing expert, or just want a relaxing afternoon
                  with your family, Vision Africa is ready to assist. Private
                  fishing charters will take you anywhere you want, with a
                  well-experienced captain to guide you, or maybe a family
                  boating trip along the river for your dinner.
                </p>
              )}
            </div>
            <div className="col-lg-6">
              {language === "ch" ? (
                <p>
                  我们还可以安排私人包船派对。南非的海洋不仅美丽壮观，而且保留了许多原始风貌，相信您不会失望。
                </p>
              ) : (
                <p>
                  We offer a luxury or budget-friendly sea-fishing experience,
                  also a private charter party can be arranged. The ocean is a
                  beautiful unexplored place and Vision Africa will not
                  disappoint you.
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
                    src={"assets/img/fishing-5.webp"}
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={"assets/img/fishing.webp"}
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
                    src={"assets/img/fishing-8.webp"}
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

export default FishingDetails;
