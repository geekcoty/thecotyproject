import React from "react";
import Title from "../Components/Header/Title";
import ResponsiveMenu from "../Components/Header/ResponsiveMenu/Responsive";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Posts from "../Components/Posts";

import "../Pages/blog_style.scss"

class Blog extends React.Component {
  render() {
    return (
      <div className="global-blog">
        <div className="blog-responsive">
          <Title />
          <ResponsiveMenu />
        </div>
        <div className="blog-header">
          <Header />
        </div>
        <div className="blog-section">
          <Posts />
        </div>
        <div className="blog-footer">
          <Footer />
        </div>
      </div>
    );
}
}

export default Blog;
