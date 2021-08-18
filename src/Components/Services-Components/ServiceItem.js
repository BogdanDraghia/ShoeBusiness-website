import React from "react"

const ServicesItem = props => {
  return (
    <div className="Services-Item testshoe">
      <img src={props.img} />
      <div className="overlaytransparent" name={props.name}></div>
    </div>
  )
}

export default ServicesItem
