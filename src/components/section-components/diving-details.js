import React, { Component } from "react";
class DivingDetails extends Component {
  render() {
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
                          // height: "750px",
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
                <h3>Diving Tour</h3>
              </div>
              <div className="col-lg-6">
                <p>
                We also specialises in dive tours along the South African coastline,
                Meet with us and we will tailor make your diving holiday or alternatively join us on one of our popular group departures!
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  South Africa is a vibrant country that has a lot to offer
                  visitors, from historic sights of political importance,
                  traditional ties or cultural connections, to museums, art
                  galleries and craft markets. Whether you want to discover
                  South Africa’s traditional roots, diverse cultures or explore
                  the lively spirit of the city and surroundings, Vision Africa
                  is on hand to assist you with planning.
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
  }
}

export default DivingDetails;
