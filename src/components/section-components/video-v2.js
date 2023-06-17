import React from "react";
import { Link } from "react-router-dom";

const VideoV2 = ({ language }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="video-area tp-video-area pd-top-50" id="video">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10 text-center">
            <div className="section-title text-center viaje-go-top">
              <h2 className="title">
                {language === "ch" ? "与众不同的奇光" : "What makes us special"}
              </h2>
              {language === "ch" ? (
                <p>
                  我们是南非定制旅游服务的领跑者。凭借超过 20
                  年的成功运营经验，我们收到包括高级官
                  员、名人和贵宾在内的尊贵客户的强烈推荐。我们将为您打造一次终生难忘的旅行体验。
                </p>
              ) : (
                <p>
                  {" "}
                  We are leaders in customized tour services in the Republic of
                  South Africa. With more than 20 years experience of successful
                  operating, we are highly recommended by our valued clients
                  including high-ranking officials, celebrities and VIPs. We
                  will make your trip a once-in-a-lifetime and unforgettable
                  experience.
                </p>
              )}
              <Link className="btn btn-yellow" to="/about">
                <span>
                  {language === "ch" ? "更多" : "Read More"}
                  <i className="la la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-8 col-lg-9 text-center">
            <div className="video-popup-wrap style-two">
              <div className="thumb">
                <img src={publicUrl + "assets/img/home.jpeg"} alt="video" />
              </div>
              <div className="video-popup-btn">
                <a
                  href={publicUrl + "assets/video/kruger-park.mp4"}
                  className="video-play-btn mfp-iframe"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoV2;
