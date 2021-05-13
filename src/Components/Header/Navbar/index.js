import React from "react"
import "./style.scss"
import {Link} from "react-router-dom"

class Menu extends React.Component {
  render(){
    return (
      <div className="global-menu">
        <div className="menu-div">
          <Link to="/about" className="menu-link">
            about
          </Link>
        </div>
        <div className="hidden-div "></div>
        <div className="menu-div ">
          <a
            href="https://github.com/geekcoty"
            target="_blank"
            className="menu-link"
          >
            portfolio
          </a>
        </div>
        <div className="hidden-div"></div>
        <div className="menu-div">
          <Link to="/blog" className="menu-link">
            blog
          </Link>
        </div>
        <div className="hidden-div"></div>
        <div className="menu-div">
          <Link to="/" className="menu-link">
            home
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu