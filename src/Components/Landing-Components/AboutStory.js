import React, { useEffect, useState } from "react"

import cobbler from "../../../static/images/Assets/cobbler.jpg"
const AboutStory = () => {
  const arrowpositionmarginheight = ["5", "95", "185", "275"]
  const arrowpositionmarginlenght = ["-45", "45", "135", "225"]
  const [yearst, setyearst] = useState("1")
  const [arrowposition, setarrowposition] = useState("5")
  const [elementwidthmobile, setelementwidthmobile] = useState([])
  useEffect(() => {
    if (document.getElementById("testwidth").offsetWidth > 450) {
      setelementwidthmobile("notMobile")
      setarrowposition("5")
    } else {
      setelementwidthmobile("Mobile")
      setarrowposition("-45")
    }
  }, [])

  const handleclick = event => {
    const selectedControlattribute = event.target.getAttribute("dayayear")

    console.log("josselected")
    if (!selectedControlattribute) {
      return null
    } else {
      let indexposition = selectedControlattribute.slice(-1)
      console.log("indexpos " + indexposition)

      //FOR change color
      var total = 0
      if (indexposition === "1") {
        total = 1
        console.log("totoal " + total)
      } else {
        total = parseInt(indexposition) + parseInt(indexposition) - 1
        console.log("totoal " + total)
      }

      for (var i = total; i >= 0; i--) {
        console.log(i)
        document.getElementById("controlButtons").childNodes[
          i
        ].style.backgroundColor = "#1c3ab6"
      }
      for (var i = total; i <= 6; i++) {
        console.log(i)
        document.getElementById("controlButtons").childNodes[
          i
        ].style.backgroundColor = "#f2f2f2"
      }
      console.log("elem")
      let yearstoshow = document
        .getElementById("yearscontrol")
        .getElementsByClassName("years-items")[indexposition - 1]

      setyearst(indexposition)

      const yeartest = indexposition - 1
      if (elementwidthmobile === "notMobile") {
        setarrowposition(arrowpositionmarginheight[yeartest])
      } else {
        setarrowposition(arrowpositionmarginlenght[yeartest])
      }
      console.log("yearstoshow")

      console.log(arrowposition)
      console.log(elementwidthmobile)
    }
  }
  return (
    <div className="center-section teste paddingSpacebetwen ">
      <div className="tittlediv">
        <h1>The years that we are proud</h1>
      </div>
      <div className="AboutS space-section">
        <div className="AboutS-History">
          <div className="AboutS-Bg">
            <div className="JS-History">
              <div
                className="Control-History"
                id="controlButtons"
                onClick={handleclick}
              >
                <div
                  className="circle-H red show-Control"
                  dayayear="datayear1"
                ></div>
                <div className="line-H red"></div>
                <div className="circle-H red" dayayear="datayear2"></div>
                <div className="line-H red"></div>
                <div className="circle-H red" dayayear="datayear3"></div>
                <div className="line-H red"></div>
                <div className="circle-H red" dayayear="datayear4"></div>
              </div>

              <div className="Show-History" id="testwidth">
                <div className="years" id="yearscontrol">
                  <div
                    className="arrows"
                    style={
                      elementwidthmobile === "notMobile"
                        ? { marginTop: +arrowposition }
                        : { marginLeft: +arrowposition }
                    }
                  ></div>

                  <div
                    className={`years-items ${
                      yearst === "1" ? "activeyear" : " "
                    }`}
                  >
                    1900
                  </div>
                  <div
                    className={
                      yearst === "2" ? "years-items activeyear" : "years-items"
                    }
                  >
                    1920
                  </div>
                  <div
                    className={
                      yearst === "3" ? "years-items activeyear" : "years-items"
                    }
                  >
                    1940
                  </div>
                  <div
                    className={
                      yearst === "4" ? "years-items activeyear" : "years-items"
                    }
                  >
                    1960
                  </div>
                </div>

                <div className="text">
                  <div className="text2">
                    <h1>Our start</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutStory
