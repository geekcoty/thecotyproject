import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Me from "../Components/Me";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Me />
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
