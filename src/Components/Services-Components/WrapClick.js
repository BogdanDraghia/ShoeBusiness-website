import React from "react"

const WrapClick = ({ children, HandlerPropName }) => {
  const handleclickwrap = event => {
    let current = event.target.getAttribute("name")

    HandlerPropName(current)
  }
  return (
    <div className="SubServicesGRID" onClick={handleclickwrap}>
      {children}
    </div>
  )
}

export default WrapClick
