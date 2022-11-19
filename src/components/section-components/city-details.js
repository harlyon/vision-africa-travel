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
                        src={"https://saltycrax.com/wp-content/uploads/2020/09/City-Sightseeing-Red-Bus-Tour-Cape-Town.jpg"}
                        alt="img"
                        style={{
                            width: "100%",
                            // height: "750px",
                        }}
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        src={"https://www.mainstreetwalks.co.za/wp-content/uploads/2019/08/Innercity-1_v2.jpg"}
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        src={"https://www.traveledgeindia.com/assets/uploads/2018/04/Johannesburg.jpg"}
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
                <h3>Africa</h3>
                <p>Continen</p>
              </div>
              <div className="col-lg-6">
                <p>
                  Africa is the world's second largest and second most-populous
                  continent. At about 30.3 million km² including djacent
                  islands, it covers 6% of Earth's total surface area and 20% of
                  its land area. With 1.2 billion people as of 2016, it accounts
                  for about 16% of the world's human population
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  It accounts for about 16% of the world's human population. The
                  continent is surrounded by the Mediterranean Sea to the Africa
                  is the world's second largest and second most-populous
                  continent. At about 30.3 million km² including djacent
                  islands.
                </p>
              </div>
            </div>
            {/* destinations-client-review-slider start */}

            {/* trip-plan End */}

            {/* location-details end */}
            {/* location-review-area start */}
          </div>
        </div>
      </div>
    );
  }
}

export default GolfDetails;
