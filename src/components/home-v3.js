import React from "react";
import CookieConsent from "react-cookie-consent";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import Video from "./section-components/video-v2";
import Footer from "./global-components/footer-v2";
import useLanguage from "../hooks/useLanguage";

const Home_V3 = () => {
  const [language, changeLanguage] = useLanguage();

  return (
    <div>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <Banner />
      <Video language={language} />
      <Footer language={language} changeLanguage={changeLanguage} />
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
