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
                        src={publicUrl + "assets/img/fishing-1.jpg"}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "850px",
                        }}
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        src={publicUrl + "assets/img/fishing-6.webp"}
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        src={publicUrl + "assets/img/fishing-7.webp"}
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
                <p>
                  If you are a fishing expert, or just want a relaxing afternoon
                  with your family, Vision Africa is ready to assist. Private
                  fishing charters will take you anywhere you want, with a
                  well-experienced captain to guide you, or maybe a family
                  boating trip along the river for your dinner.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  We offer a luxury or budget-friendly sea-fishing experience,
                  also a private charter party can be arranged. The ocean is a
                  beautiful unexplored place and Vision Africa will not
                  disappoint you.
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
                    <img src={"assets/img/fishing-5.webp"} alt="img" />
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
  }
}

export default FishingDetails;
