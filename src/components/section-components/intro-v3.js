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
                  We are a tour and travel company based in Johannesburg, South
                  Africa. We started with a long-term objective of offering a
                  side range of safe, reliable specialized tours that focus on
                  the magnificent, scenic and natural beauty of South Africa.
                  With an experienced, friendly, helpful, understanding, and
                  knowledgeable workforce. Our clients are assured of a safe and
                  reliable safari experience while with us.
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
                  Our mission is to provide a lifetime, unforgettable safari
                  experience to our clients be they families, couples,
                  individual or group travelers. We also have a diverse
                  knowledge of the tourism products in this region including
                  wildlife safaris, mountain climbing, beach holidays, student
                  packages and other tailor ­ made itineraries. We also arrange
                  private, custom tours, group tours (including business/
                  corporate).
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
                  We at Vision Africa have gathered trips together so you can
                  spend less time searching and more time dreaming about where
                  you’ll go next. Whatever you want your luxury tour or safari
                  itinerary to include, we’ve got something fully bespoke for
                  you… and only you.
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
