import React, { Component } from "react";

class FishingDetails extends Component {
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
                          publicUrl + "assets/img/fishing-1.jpg"
                        }
                        alt="img"
                        style={{
                          width: "100%",
                          height: "850px",
                        }}
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        src={
                          publicUrl + "assets/img/fishing-6.webp"
                        }
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        src={
                          publicUrl + "assets/img/fishing-7.webp"
                        }
                        alt="img"
                        style={{
                          width: "100%",
                          height: "850px",
                        }}
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        style={{
                            width: "100%",
                        }}
                        src={
                          publicUrl + "assets/img/fishing-4.webp"
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
                <h3>Fishing Tour</h3>
              </div>
              <div className="col-lg-6">
                <p>
                If you strive to give the best fishing experience to your clients - we are proud to be your partner and give you the best experience.
                We offer you Fishing charters, lodges, guides, private ponds - all types of fishing trips in one place!
                Our support team will make sure that the whole experience is smooth from the booking to your fishing trip
                  
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  South Africa is a vibrant country that has a lot to offer
                  visitors, from historic sights of political importance,
                  traditional ties or cultural connections, to museums, art
                  galleries and craft markets. Whether you want to discover
                  South Africa’s traditional roots, diverse cultures or explore
                  the lively spirit of the city and surroundings, Vision Africa is on hand to assist you with planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FishingDetails;