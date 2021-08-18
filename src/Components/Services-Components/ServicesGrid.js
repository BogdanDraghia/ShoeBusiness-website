import React, { useState, useEffect } from "react"

import testshoe from "../../../static/images/shoe.png"
import testshoewoman from "../../../static/images/womanshoe.png"
import bags from "../../../static/images/bags.png"

import ServiceItem from "./ServiceItem"
import Serviceitemoverlay from "./Serviceitemoverlay"
import WrapClick from "./WrapClick"
//import testluggage from "../../../images/testbag1.png"
const ServicesGrid = props => {
  const [openOverlay, setopenOverlay] = useState(false)
  const [currentOverlay, setcurrentOverlay] = useState("element")
  const [currentOverlayimage, setcurrentOverlayimage] = useState(testshoe)
  const handler = data => {
    setopenOverlay(data)
  }
  const handleroverlay = data1 => {
    setcurrentOverlay(data1)
    setopenOverlay(!openOverlay)
    console.log("Overlay")
  }

  return (
    <div className="center-section textaligncenter">
      <h1>Services</h1>

      <div className="ServicesGRID">
        <div className="SubServicesGRID">
          {/* DISPLAY NONE */}

          {/* DISPLAY NONE */}
          <WrapClick HandlerPropName={handleroverlay}>
            <ServiceItem img={testshoe} name={"shoemen"}></ServiceItem>
            <ServiceItem img={testshoewoman} name={"shoewoman"}></ServiceItem>
            <ServiceItem img={bags} name={"bags"}></ServiceItem>
            <ServiceItem img={testshoe} name={"shoemen"}></ServiceItem>
            <ServiceItem img={testshoewoman} name={"shoemen"}></ServiceItem>
            <ServiceItem img={bags}></ServiceItem>
          </WrapClick>
        </div>
      </div>
      {openOverlay && (
        <Serviceitemoverlay
          HandlerProp={handler}
          state={openOverlay}
          currentdata={currentOverlay}
          style={{ display: "none" }}
          imageoverlayprop={testshoe}
        />
      )}
    </div>
  )
}

export default ServicesGrid
