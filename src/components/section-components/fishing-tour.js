import React from "react";
import Navbar from "../global-components/navbar";
import FishingDetails from "./fishing-details";
import Footer from "../global-components/footer-v2";

const FishingTourPage = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div>
      <Navbar />
      <div
        className="breadcrumb-area jarallax"
        style={{
          backgroundImage: "url(" + publicUrl + "assets/img/fishing.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">Fishing Tour</h1>
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FishingDetails />
      <Footer />
    </div>
  );
};

export default FishingTourPage;
