import React, { Component } from "react";
import parse from "html-react-parser";

class IntroV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="intro-area pd-top-108">
        <div className="container">
          <div className="section-title text-lg-center text-left">
            <h2 className="title">
              <span>We Are</span> Vision Africa
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-intro style-two">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/icons/9.png"} alt="img" />
                </div>
                <h4 className="intro-title">Who we are</h4>
                <p>
                  We are an inbound tour operator and investment company based
                  in Johannesburg, South Africa. Our co-founders have more than
                  20 years of successful operating experience in Republic of
                  South Africa. With an experienced, friendly, helpful,
                  understanding, and knowledgeable workforce, our clients are
                  assured of a seamless and reliable touring experience while
                  with us.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-intro style-two">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/icons/12.png"} alt="img" />
                </div>
                <h4 className="intro-title">Mission</h4>
                <p>
                  Our mission is to provide a once in a lifetime, tailored-made
                  travel experience to our clients, whether it be families,
                  couples, individual or group. Luxury or budget-friendly, we
                  always have something fully bespoken for you… and only you.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-intro style-two">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/icons/10.png"} alt="img" />
                </div>
                <h4 className="intro-title">Great Experience / Destination</h4>
                <p>
                  Vision Africa Travel have gathered every element of travel, so
                  you can spend less time searching and more time dreaming. We
                  have a diverse knowledge of the various tourism products
                  including wildlife safaris, golfing tours, extreme activities,
                  business expo/delegation, luxury holiday, wedding plan and
                  tailor-made products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroV3;
