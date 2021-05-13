import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Posts from "../Components/Posts";

class Blog extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Posts />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;
