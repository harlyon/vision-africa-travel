import React, { Component } from "react";

class About extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="about-section pd-top-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 align-self-center">
              <div className="section-title mb-lg-0 mb-4 text-center text-lg-left">
                <h2 className="title">
                  Your Next Adventure <br /> Is a Click Away
                </h2>
                <p>
                  Get inspired by browsing through some of our most popular
                  exampled trips. To find out more, please get in touch with our
                  experts to start creating your dream vacation now.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-lg-2">
              <div className="thumb">
                <img src={publicUrl + "assets/img/about-img.webp"} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default About;
