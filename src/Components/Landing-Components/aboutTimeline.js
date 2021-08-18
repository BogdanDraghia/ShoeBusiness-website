import React from "react"
import { Link } from "gatsby"
//DE ADAUGAT POZA CU GRAPHQL
import landingFoto from "../../../static/images/test.jpg"

const AboutTimeline = () => {
  return (
    <div className="center-section ladingwelcomecenter ">
      <div className="LandingWelcome-Container  flexdirection-column">
        <div className="LandingWelcome-Text">
          It's time <br />
          to get your <br />
          shoe a <span>refresh</span> <br />
          <div className="LandingWelcome-TextCompany">
            Gus and Company A Better Shoe Repair
            <br /> And A Family Tradition Since 1904
          </div>
          <div className="ButtonArea">
            <Link to="/Contact/" className="button1">
              Contact
            </Link>
            <Link to="/AboutUs/" className="button2">
              Or discover about us
            </Link>
          </div>
        </div>

        <div className="LandingWelcome-DivPhoto">
          <div className="LandingWelcome-Photo">
            <div className="filterBlack"></div>
            <img src={landingFoto} alt="none" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTimeline
