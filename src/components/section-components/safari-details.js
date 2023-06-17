import React from "react";

const SafariDetails = ({ language }) => {
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
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      src={
                        "https://imengine.prod.srp.navigacloud.com/?uuid=3BCEE8C3-A306-470F-BF3C-D3762C99083C&type=primary&q=72&width=1024"
                      }
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
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                      }}
                      src={
                        "https://i.insider.com/5f1089583ad861491036b8a2?width=700"
                      }
                      alt="img"
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                      }}
                      src={
                        "https://www.safariventures.com/wp-content/uploads/2019/08/DSC8658-2-640x480.jpg"
                      }
                      alt="img"
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      style={{
                        width: "100%",
                        height: "850px",
                        objectFit: "cover",
                      }}
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
              <h3>{language === "ch" ? "游猎" : "Safari Tour"}</h3>
            </div>
            <div className="col-lg-6">
              {language === "ch" ? (
                <p>
                  我们将带您前往非洲最美丽的野生动物游览地！游猎（Safari）不仅提供世界上最原始的野外环境、令人惊叹的自然美景，还能让您近距离接触非洲最野性的动物
                </p>
              ) : (
                <p>
                  Vision Africa is going to take you for a ride! To Africa's
                  greatest wildlife destinations. Safari not only offers
                  breathtaking natural beauty in one of the world’s most
                  pristine wild environments, but also allows you to get up
                  close and personal with some of Africa’s most coveted animals.
                </p>
              )}
            </div>
            <div className="col-lg-6">
              {language === "ch" ? (
                <p>
                  游猎（Safari）
                  适合各个年龄段的人。我们还会提供量身定制的游猎之旅，例如私人游猎、丛林漫步、夜间游猎、直升机游猎、热气球游猎等等。无论您有预算限制、还是期待一场豪华的极致旅行，我们都会协助您完成梦想。
                </p>
              ) : (
                <p>
                  Safaris remain one of our favorite travel experiences, and it
                  suits most people of all ages. What makes it even better is we
                  always offer tailor-made safaris, such as private safari, bush
                  walk, night safari, helicopter safari, hot-air balloon safari
                  and so much more. Budget-friendly or super luxury, Vision
                  Africa is always ready to assist with your best experience in
                  South Africa.
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
};

export default SafariDetails;
