import React from "react";

const GolfDetails = ({ language }) => {
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
                      src={
                        "https://saltycrax.com/wp-content/uploads/2020/09/City-Sightseeing-Red-Bus-Tour-Cape-Town.jpg"
                      }
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
                      src={
                        "https://www.mainstreetwalks.co.za/wp-content/uploads/2019/08/Innercity-1_v2.jpg"
                      }
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
                      src={
                        "https://www.traveledgeindia.com/assets/uploads/2018/04/Johannesburg.jpg"
                      }
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
                      src={
                        "https://s3.amazonaws.com/images.wealthyaffiliate.com/uploads/1364196/sitecontent/1d27285876647650b27a33ab747ea265_cropped.jpg?1611963199"
                      }
                      alt="img"
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
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
              <h3>{language === "ch" ? "城市观光" : "City Tour"}</h3>
            </div>
            <div className="col-lg-6">
              {language === "ch" ? (
                <p>
                  南非是一个“彩虹国度”，拥有众多的景点：从具有历史意义的政治地标、传统文化，到博物馆、艺术馆、摩天大楼和非洲工艺市场
                </p>
              ) : (
                <p>
                  South Africa is a ‘Rainbow Nation’ that has so much to offer:
                  from historic sights of political importance, traditional ties
                  or cultural connections, to museums, art galleries,
                  skyscrapers and African craft markets.
                </p>
              )}
            </div>
            <div className="col-lg-6">
              {language === "ch" ? (
                <p>
                  无论您想要探索南非的传统根源、多元文化还是探索现代城市及其周边的活力精神，奇光旅行都随时准备带您前往各地
                </p>
              ) : (
                <p>
                  Whether you want to discover South Africa’s traditional roots,
                  diverse cultures or explore the lively spirit of modern city
                  and surroundings, Vision Africa is ready to take you
                  everywhere.
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
                    src={"assets/img/city-7.jpg"}
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
                    src={"assets/img/city-1.jpg"}
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
                    src={"assets/img/city-2.jpg"}
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
                    src={"assets/img/city-3.jpg"}
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
                    src={"assets/img/city-4.jpg"}
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
                    src={"assets/img/city-5.jpg"}
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
                    src={"assets/img/city-6.jpg"}
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
                    src={"assets/img/city.jpg"}
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
                    src={"assets/img/city-8.jpg"}
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

export default GolfDetails;
