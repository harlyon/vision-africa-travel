import React from "react";
import CookieConsent from "react-cookie-consent";
import Navbar from "./global-components/navbar";
// import Banner from './section-components/banner-v2';
import Banner from "./section-components/banner";
import Search from "./section-components/search-v2";
import UpcomingWorld from "./section-components/upcoming-world";
import Intro from "./section-components/intro-v2";
import UpcomingTour from "./section-components/upcoming-tour";
import Video from "./section-components/video-v2";
import Counter from "./section-components/counter";
import Package from "./section-components/package";
import Client from "./section-components/client";
import BlogSection from "./blog-components/blog-section-v2";
import Ads from "./section-components/ads";
import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer-v2";
import useLanguage from "../hooks/useLanguage";

const Home_V3 = () => {
  const [language, changeLanguage] = useLanguage();

  return (
    <div>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <Banner />
      <Video language={language} />
      <Footer />
      <CookieConsent
        enableDeclineButton
        onDecline={() => {
          alert("nay!");
        }}
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#666" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "14px",
          borderRadius: "4px",
          background: "#CB9275",
          padding: "0 22px",
        }}
        declineButtonStyle={{
          color: "#fff",
          fontSize: "14px",
          borderRadius: "4px",
          background: "#CB9275",
          padding: "0 22px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </div>
  );
};

export default Home_V3;
