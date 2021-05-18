import React from "react";
import "./style.scss";

import Navbar from "../Header/Navbar/index";
import Title from "../Header/Title/index";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default Header;
