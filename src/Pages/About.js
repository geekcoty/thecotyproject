import React from "react";
import Title from "../Components/Header/Title"
import ResponsiveMenu from "../Components/Header/ResponsiveMenu/Responsive"
import Header from "../Components/Header"
import Footer from "../Components/Footer";
import Me from "../Components/Me";

import "../Pages/about_style.scss"

class About extends React.Component {
  render() {
    return (
      <div className="global-about">
        <div className="about-responsive">
          <Title />
          <ResponsiveMenu />
        </div>
        <div className="about-header">
          <Header />
        </div>
        <div className="about-section">
          <Me />
        </div>
        <div className="about-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
