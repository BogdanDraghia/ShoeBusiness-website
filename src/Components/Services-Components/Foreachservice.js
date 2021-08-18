import React from "react"

const Foreachservice = props => {
  return (
    <div className="checkItem">
      <div className="iconCheck">
        <img src={props.check} />
      </div>
      {props.textitem}
    </div>
  )
}

export default Foreachservice
