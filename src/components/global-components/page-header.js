import React, { Component } from "react";

class Page_header extends Component {
  render() {
    let HeaderTitle = this.props.headertitle;

    return (
      <div
        className="breadcrumb-area jarallax"
        style={{
          backgroundImage: "url(https://www.pollmans.com/wp-content/uploads/2019/02/home-hero.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">{HeaderTitle}</h1>
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page_header;
