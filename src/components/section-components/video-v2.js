import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class VideoV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="video-area tp-video-area pd-top-50" id="video">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 text-center">
              <div className="section-title text-center viaje-go-top">
                <h2 className="title">What makes us special</h2>
                <p>
                  We are leaders in customized tour services in the Republic of
                  South Africa. With more than 20 years experience of successful
                  operating, we are highly recommended by our valued clients
                  including high-ranking officials, celebrities and VIPs. We
                  will make your trip a once-in-a-lifetime and unforgettable
                  experience.
                </p>
                <Link className="btn btn-yellow" to="/about">
                  <span>
                    Read More
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
  }
}

export default VideoV2;
