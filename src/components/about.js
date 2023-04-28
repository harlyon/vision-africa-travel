import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Intro from "./section-components/intro-v3";
import About from "./section-components/about";
import History from "./section-components/history";
import Team from "./section-components/team";
import Footer from "./global-components/footer-v2";
import useLanguage from "../hooks/useLanguage";

const AboutPage = () => {
  const [language, changeLanguage] = useLanguage();

  return (
    <div>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <PageHeader headertitle="About Vision Africa" />
      <Intro language={language} />
      <About language={language} />
      <Footer />
    </div>
  );
};

export default AboutPage;
