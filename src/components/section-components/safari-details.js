import React, { Component } from "react";

class SafariDetails extends Component {
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
                          "https://et-website.s3.amazonaws.com/uploads/2017/05/Enchanting-Travel-Zimbabwe-Tours-Hwange-Camp-Hwange-Game-drives.jpg"
                        }
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        src={
                          "https://imengine.prod.srp.navigacloud.com/?uuid=3BCEE8C3-A306-470F-BF3C-D3762C99083C&type=primary&q=72&width=1024"
                        }
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        width="100%"
                        src={
                          "https://i.insider.com/5f1089583ad861491036b8a2?width=700"
                        }
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        width="100%"
                        src={
                          "https://www.safariventures.com/wp-content/uploads/2019/08/DSC8658-2-640x480.jpg"
                        }
                        alt="img"
                      />
                    </div>
                    <div className="d-details-main-slider-item">
                      <img
                        width="100%"
                        src={
                          "https://www.getyourguide.com/magazine/wp-content/migrated-content/uploads/2019/06/Header_2-2019.07.22-9-tips-for-the-ultimate-African-safari-GetYourGuide-1200x900.jpg"
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
                <h3>Safari Tour</h3>
              </div>
              <div className="col-lg-6">
                <p>
                  Vision Africa safari tours let you experience one of Africa's
                  greatest wildlife destinations. we not only offers
                  breathtaking natural beauty in one of the world’s most
                  pristine environments, but it also allows you to get up close
                  and personal with some of Africa’s most coveted animals.
                  Safaris remain one of the top travel experiences in the world
                  where expert local guides and tailor-made tours are essentia
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Whether you’re after a safari on a budget, an experience that
                  is comfortable yet affordable, or an exclusive experience
                  luxury South Africa safari, Vision Africa Safaris can assist.
                  Our knowledgeable staff combined with our customizable,
                  interest-driven packages deliver one of the best safaris in
                  South Africa..
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
                      src={"assets/img/others/elephant.webp"}
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
                      src={"assets/img/others/safari2.jpeg"}
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
                      src={"assets/img/others/giraffe-img.webp"}
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
                      src={"assets/img/others/safari.jpeg"}
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
                      src={"assets/img/others/plane.jpg.webp"}
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
                      src={"assets/img/others/safari1.jpeg"}
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

export default SafariDetails;
