import React from "react"
import SlotsComponent from "./SlotsComponent"
import StatementComponent from "./StatementComponent"
import PromptComponent from "./PromptComponent"
import SampleUtteranceComponent from "./SampleUtteranceComponent"


export const defaultProps = {
  style: {
    border: "solid red 2px",
    padding: "10px",
    margin: "10px",
    textAlign: "center"
  }
}


export const IntentComponent = props => {
  const {
    checksum,
    confirmationPrompt,
    conclusionStatement,
    rejectionStatement,
    createdDate,
    description,
    fulfillmentActivity,
    lastUpdatedDate,
    name,
    parentIntentSignature,
    sampleUtterances,
    slots,
    version,
    style
  } = props

  console.log("intent", {props})

  return (
    <div style={style}>
      <h4>{name}</h4>
      <ul style={{listStyleType: "none"}}>
        <li>version: {version}</li>
        <li>created: {createdDate.toString()}</li>
        <li>updated: {lastUpdatedDate.toString()}</li>
        <li>checksum: {checksum}</li>
        <li>description: {description}</li>
        <li>fulfillmentActivity: {fulfillmentActivity.type}</li>
        <li>parentIntentSignature: {parentIntentSignature}</li>
      </ul>
      {sampleUtterances.length > 0 && <SampleUtteranceComponent utterances={sampleUtterances} />}
      {conclusionStatement && <StatementComponent {...conclusionStatement} name="conclusionStatement" />}
      
      {slots.length > 0 && <SlotsComponent slots={slots} />}
      {confirmationPrompt && <PromptComponent {...confirmationPrompt} name="confirmationPrompt" />}
      {rejectionStatement && <StatementComponent {...rejectionStatement} name="rejectionStatement" />}
      {}
    </div>
  )
}

IntentComponent.defaultProps = defaultProps

export default IntentComponent