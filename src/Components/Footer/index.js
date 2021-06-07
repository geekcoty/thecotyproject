import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram} from "@fortawesome/free-brands-svg-icons"
import  { faEnvelope} from "@fortawesome/free-regular-svg-icons"
import "./style.scss"


class Footer extends React.Component {
  render(){
    return (
      <div className="global-footer">
        <div className="sm-div">
          <a
            href="https://twitter.com/rememberplut"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="sm-icons" />
          </a>
          <a
            href="https://www.instagram.com/this.adultlife/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="sm-icons" />
          </a>
          <a href="mailto:theworldisquie@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="sm-icons" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;