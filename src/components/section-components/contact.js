import React, { Component } from "react";

const Contact = ({ language }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  return (
    <div>
      <div className="contact-area pd-top-108">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-lg-center text-left">
                <h2 className="title">
                  {language === "ch" ? "取得联系!" : "Get In Touch!"}
                </h2>
                {language === "ch" ? (
                  <p>如需帮助或其他信息，请随时联系我们</p>
                ) : (
                  <p>
                    Feel Free to Contact us For Help or Additional Information
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="thumb">
                <img
                  src={publicUrl + "assets/img/others/contact.jpg"}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <form className="tp-form-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">
                        {language === "ch" ? "姓名" : "Name"}
                      </span>
                      <input type="text" name="name" />
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">
                        {language === "ch" ? "电话" : "Number"}
                      </span>
                      <input type="text" name="number" />
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">
                        {language === "ch" ? "邮箱 " : "Email"}
                      </span>
                      <input type="text" name="email" />
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">
                        {language === "ch" ? " 信息" : "Message"}
                      </span>
                      <textarea defaultValue={""} name="message" />
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="submit"
                      className="btn btn-yellow"
                      value={language === "ch" ? "发送" : "Send Message"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 order-lg-12">
              <iframe
                className="contact-map"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7%20Stirrup%20Lane,Woodmead%20Office%20Park%20Sandton%202191.%20Johannesburg+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
            <div className="col-xl-3 col-lg-4 order-lg-1">
              <div className="contact-info bg-gray">
                <p>
                  <i className="fa fa-map-marker" />
                  <span>
                    7 Stirrup Lane,Woodmead Office Park
                    <br />
                    Sandton 2191. Johannesburg
                  </span>
                </p>
                <p>
                  <i className="fa fa-clock-o" />
                  <span>Office Hour 9:00am to 17:00pm</span>
                </p>
                <p>
                  <i className="fa fa-envelope" />
                  <span>
                    Email: <span>info@visiontravel.co.za</span>
                  </span>
                </p>
                <p>
                  <i className="fa fa-phone" />
                  <span>
                    phone: <span>(+27) 10 822 7588</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
