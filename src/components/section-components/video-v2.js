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
                  We give you the opportunity to experience a destination with
                  the help of a local, bilingual leader who is passionate about
                  sharing their home with you. You’ll eat in local restaurants,
                  stay in accommodations that have been family-owned for
                  generations
                </p>
                <Link className="btn btn-yellow" to="/#">
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
