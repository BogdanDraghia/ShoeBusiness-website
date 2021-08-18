import React, { useEffect, useState } from "react"

import cobbler from "../../../static/images/Assets/cobbler.jpg"
const AboutStoryTop = () => {
  return (
    <div className="center-section ">
      <div className="AboutS-Container">
        <div className="AboutS-Text">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button1"> Contact </div>
        </div>
        <div className="image-text">
          <img src={cobbler} />
        </div>
      </div>
    </div>
  )
}

export default AboutStoryTop
