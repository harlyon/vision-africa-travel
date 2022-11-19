import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class About extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="about-section pd-top-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="section-title mb-lg-0">
                <h2 className="title">
                  Your Next Adventure <br /> Is a Click Away
                </h2>
                <p>
                  Our trips deliver unforgettable travel moments. Below we
                  reveal just a little of the variety of experiences you can
                  partake in – all combined to make your safari meaningful,
                  immersive – the journey of a lifetime. Get inspired by
                  browsing through some of our most popular example trips below.
                  To find out more get in touch with our team of expert South
                  African Travel Specialists to start curating your Bucket List
                  Luxury Vacation today.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2">
              <div className="thumb about-section-right-thumb">
                <img src={publicUrl + "assets/img/others/girrafe.jpeg"} alt="img" />
                <img
                  className="about-absolute-thumb"
                  src={publicUrl + "assets/img/others/elephant.jpeg"}
                  style={{
                    width: "357px",
                    height: "417px",
                   }}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
