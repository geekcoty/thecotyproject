import React from "react"
import {Link} from "react-router-dom"

import "../ResponsiveMenu/style.scss"

class ResponsiveMenu extends React.Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
         const { toggle } = this.state;
    return (
      <div className="responsive-div">
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <a
              href="https://github.com/geekcoty"
              target="_blank"
              rel="noreferrer"
            >
              portfolio
            </a>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
          <li className="close" onClick={this.menuToggle}>
            X
          </li>
        </ul>
        <div className="menu" onClick={this.menuToggle}>
          Menu
        </div>
      </div>
    );
  }
}

export default ResponsiveMenu