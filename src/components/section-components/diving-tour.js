import React from "react";
import Navbar from "../global-components/navbar";
import DivingDetails from "./diving-details";
import Footer from "../global-components/footer-v2";

const DivingTourPage = () => {
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
                <h1 className="page-title">Diving Tour</h1>
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DivingDetails />
      <Footer />
    </div>
  );
};

export default DivingTourPage;