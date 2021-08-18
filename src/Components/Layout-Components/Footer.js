import React from "react"
import { Link } from "gatsby"
import externalLinkIcon from "../../../static/images/Assets/external-link.png"
import logo1 from "../../../static/images/Assets/Logo-Blue.png"

const Footer = () => {
  return (
    <footer>
      <div className="center-section-header-footer ">
        <div className="footerSection">
          <div className="Logo">
            <img src={logo1} />
          </div>
          <div className="resumelinks">
            <h4>Useful links</h4>
            <ul>
              <li>Services</li>
              <li>About us</li>
              <li>Our Work</li>
              <li>History</li>
            </ul>
          </div>
          <div className="adress">
            <h4>Our locations</h4>
            <div className="locations">
              <div className="location1">
                228 W Adams Street Jacksonville, FL 32202
              </div>
              <div className="location2">1871 Wells Road Orange Park, FL</div>
            </div>
          </div>
          <div className="Contact">
            <h4>Contact us</h4>
            Contact
          </div>
        </div>
      </div>
      <div className="smallFotter">
        <div className="credits center-section-header-footer ">
          <p> © 2020 Gus and Co, All rights reserved </p>
          <div className="creditsText">
            By Bogdan Draghia
            <a to="https://bhombogdan.github.io/" target="_blank">
              <img src={externalLinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
