import React, { Component } from "react";
import parse from "html-react-parser";

const IntroV3 = ({ language }) => {
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
              {language === "ch" ? (
                <p>
                  我们是一家总部位于南非约翰内斯堡的入境旅行社。我们的联合创始人在南非共和国拥有超过20年的成功运营
                  经验。凭借经验丰富、友好、乐于助人、理解力强、知识渊博的员工队伍，我们的客户将获得无缝、可靠的旅行体
                  验。
                </p>
              ) : (
                <p>
                  We are an inbound tour operator and investment company based
                  in Johannesburg, South Africa. Our co-founders have more than
                  20 years of successful operating experience in Republic of
                  South Africa. With an experienced, friendly, helpful,
                  understanding, and knowledgeable workforce, our clients are
                  assured of a seamless and reliable touring experience while
                  with us.
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-intro style-two">
              <div className="thumb">
                <img src={publicUrl + "assets/img/icons/12.png"} alt="img" />
              </div>
              <h4 className="intro-title">Mission</h4>
              {language === "ch" ? (
                <p>
                  我们的使命是为客户提供终生难忘的定制旅行体验。无论是极尽奢华还是经济实
                  惠，我们总能为您提供完全可定制的专属服务。
                </p>
              ) : (
                <p>
                  Our mission is to provide a once in a lifetime, tailored-made
                  travel experience to our clients, whether it be families,
                  couples, individual or group. Luxury or budget-friendly, we
                  always have something fully bespoken for you… and only you.
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-intro style-two">
              <div className="thumb">
                <img src={publicUrl + "assets/img/icons/10.png"} alt="img" />
              </div>
              <h4 className="intro-title">Great Experience / Destination</h4>
              {language === "ch" ? (
                <p>
                  奇光旅行汇集了旅行的每一个元素，让您花更少时间寻找，花更多的时间追梦。
                  我们对
                  南非各种旅游产品了如指掌，包括野生动物游猎、高尔夫、极限运动、商业博览会/代表
                  团、豪华假期、婚礼计划及各类定制产品。
                </p>
              ) : (
                <p>
                  Vision Africa Travel have gathered every element of travel, so
                  you can spend less time searching and more time dreaming. We
                  have a diverse knowledge of the various tourism products
                  including wildlife safaris, golfing tours, extreme activities,
                  business expo/delegation, luxury holiday, wedding plan and
                  tailor-made products.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroV3;
