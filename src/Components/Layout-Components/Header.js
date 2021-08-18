import React, { useEffect, useState } from "react"

import { Link } from "gatsby"
import logo from "../../../static/images/Assets/Logo-Blue.png"
const Header = () => {
  const [open, setOpen] = useState(false)
  const [render, setrender] = useState(false)
  const [heightmenu, setheightmenu] = useState(50)

  const OnEventClick = element => {
    console.log(element.target.parentElement.parentElement)
  }

  useEffect(() => {
    const elementwidth = document.getElementById("nav1").offsetWidth
    if (elementwidth > 550) {
      console.log(render)
      return setrender(true)
    } else {
      console.log(render)
    }
    if (open === true) {
      console.log("HEHEEHE")
      setheightmenu(400)
      return setrender(true)
    } else {
      console.log("FALS")
      setheightmenu(50)
      return setrender(false)
    }
  }, [open])
  console.log(render)
  return (
    <header>
      <div className="center-section-header ">
        <nav>
          <ul className="Nav-Content" id="nav1" style={{ height: heightmenu }}>
            <div className="Logo-Header">
              {/*LOGO HERE*/}
              <img src={logo} alt="none" />
              {/*TEMPORAL !*/}
            </div>
            {render && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            {render && (
              <li>
                <Link to="/Contact/">Contact</Link>
              </li>
            )}
            {render && (
              <li>
                <Link to="/Services/">Services</Link>
              </li>
            )}
            {render && (
              <li>
                <Link to="/AboutUs/">About Us</Link>
              </li>
            )}
          </ul>
          <button
            id="hamburgermenu1"
            className="hamburgerMenu"
            onClick={element => {
              setOpen(!open)
              setrender(!render)
              OnEventClick(element)
            }}
          >
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
          </button>
        </nav>
      </div>
    </header>
  )
}

// About us Services - LOGO - Our Work Contact
export default Header
