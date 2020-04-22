import React from "react"
import SampleUtteranceComponent from "./SampleUtteranceComponent"
import PromptComponent from "./PromptComponent"


export const defaultProps = {
  style: {
    border: "solid #aaa 2px",
    margin: "10px",
    padding: "10px"
  }
}

export const SlotComponent = props => {
  const {
    description,
    name,
    obfuscationSetting,
    priority,
    responseCard,
    sampleUtterances,
    slotConstraint,
    slotType,
    slotTypeVersion,
    valueElicitationPrompt,
    style
  } = props
  console.log("slot", {props})
  return (
    <div style={style}>
      <h5>{name}</h5>
      <ul style={{listStyleType: "none"}}>
        <li>description: {description}</li>
        <li>obfuscationSetting: {obfuscationSetting}</li>
        <li>priority: {priority}</li>
        <li>slotConstraint: {slotConstraint}</li>
        <li>slotTypeVersion: {slotTypeVersion}</li>
        <li>slotType: {slotType}</li>
        <li>responseCard: {responseCard}</li>
      </ul>
      <PromptComponent {...valueElicitationPrompt} name="valueElicitationPrompt"/>
      {sampleUtterances.length > 0 && <SampleUtteranceComponent utterances={sampleUtterances} />}
    </div>
  )
}

SlotComponent.defaultProps = defaultProps

export default SlotComponent