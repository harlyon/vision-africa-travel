import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Contact from "./section-components/contact";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer-v2";
import useLanguage from "../hooks/useLanguage";

const ContactPage = () => {
  const [language, changeLanguage] = useLanguage();
  return (
    <div>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <PageHeader headertitle={language === "ch" ? "联系我们" : "Contact"} />
      <Contact language={language} />
      <Footer language={language} changeLanguage={changeLanguage} />
    </div>
  );
};

export default ContactPage;
