import React, { Component } from "react";

class GolfDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

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
                          "https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2016/03/15/56e82f36c750880b76a249f2_tour-operators-Carr-Golf.jpg"
                        }
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        src={
                          "https://www.exploremoretravel.com/wp-content/uploads/2019/09/Leopard-Creek-1-2000x1040.jpg"
                        }
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        width="100%"
                        src={
                          "https://image-prod.iol.co.za/16x9/800/JOHANNESBURG-SOUTH-AFRICA-NOVEMBER-20-Dylan-Naidoo-during-day-2-of-the-2020-Joburg-Open-at-Randpark-Golf-Club-on-November-20-2020-in-Johannesburg-South-Africa-Picture-credit-Carl-Fourie-Sunshine-Tour?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/b8a94894-8995-5b28-9e9f-3f7ad0bef8b5&operation=CROP&offset=0x655&resize=6463x3638"
                        }
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
                <h3>Golf Tour</h3>
              </div>
              <div className="col-lg-6">
                <p>
                  South Africa is brimming with talented golfers. Vision Africa
                  Tour gives the opportunity to play on championship golf
                  courses under professional conditions more often. We care
                  about how much you will enjoy the event. Ultimately, this is a
                  tour for you, the players
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Vision Africa tour perfect golfing trip when you are visiting
                  South Africa during the cooler winter months when temperatures
                  are mild, no chance of rain and winter islands.
                </p>
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
                      src={"assets/img/golf.jpeg"}
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
                      src={"assets/img/golf-3.jpeg"}
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
                      src={"assets/img/golf-1.png"}
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
  }
}

export default GolfDetails;
