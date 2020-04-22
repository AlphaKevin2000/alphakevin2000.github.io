import React from "react"
import SlotComponent from "./SlotComponent"


export const defaultProps = {
  style: {
    border: "solid green 2px",
    margin: "10px",
    padding: "10px",
    textAlign: "center"
  }
}

export const SlotsComponent = props => {
  const { slots, style } = props
  return (
    <div style={style}>
      <h4>Slots</h4>
      {slots
        .sort((a,b) => a.priority > b.priority ? 1 : -1)
        .map((slot,i) => <SlotComponent {...slot} key={`slot-${i}`} />)}
    </div>
  )
}

SlotsComponent.defaultProps = defaultProps

export default SlotsComponent