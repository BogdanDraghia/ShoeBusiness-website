import React from "react"
import { Link } from "gatsby"
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider"

import quote from "../../../../static/images/Assets/icons/quote.png"
const AboutReviewItem = props => {
  //console.log(props.datapassed.afterImageReview.fluid.src)
  return (
    <div className="AboutReview-imagetext">
      <div
        className="imagecompare"
        style={{ borderRadius: "15px 0px 0px 15px" }}
      >
        <ReactCompareSlider
          style={{ height: "100%" }}
          itemOne={
            <ReactCompareSliderImage
              style={{
                objectFit: "cover",
                borderRadius: "15px 0px 0px 15px",
              }}
              src={props.datapassed.beforeImageReview.fluid.src}
              srcSet={props.datapassed.beforeImageReview.fluid.src}
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              style={{
                objectFit: "cover",
                borderRadius: "15px 0px 0px 15px",
              }}
              src={props.datapassed.afterImageReview.fluid.src}
              srcSet={props.datapassed.afterImageReview.fluid.src}
              alt="Image two"
            />
          }
        />
      </div>
      <div className="reviewText">
        <div className="subReviewText">
          <div className="Quote">
            <img src={quote} />
          </div>
          <div className="textReview">
            <p>{props.datapassed.reviewText}</p>
          </div>

          <div className="CHANGE">
            <div className="leftbutton">
              <button onClick={() => props.leftindex("daaa")}>LEFT</button>
              <button>Right</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutReviewItem
