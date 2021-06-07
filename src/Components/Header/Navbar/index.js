import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

class Menu extends React.Component {
 

  render() {

    return (
      <div className="global-menu">
        <React.Fragment>
          <div className="menu-div">
            <Link to="/about" className="link">
              <p>about</p>
            </Link>
          </div>

          <div className="hidden-div menu-div"></div>
          <div className="menu-div menu-div">
            <a
              href="https://github.com/geekcoty"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <p>portfolio</p>
            </a>
          </div>
          <div className="hidden-div menu-div"></div>
          <div className="menu-div">
            <Link to="/blog" className="link">
              <p>blog</p>
            </Link>
          </div>
          <div className="hidden-div menu-div"></div>
          <div className="hidden-responsive menu-div">
            <Link to="/" className="link">
              <p>home</p>
            </Link>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Menu;
