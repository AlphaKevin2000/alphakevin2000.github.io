import React from "react"
import StatementComponent from "./StatementComponent"
import IntentComponent from "./IntentComponent"
import PromptComponent from "./PromptComponent"


export const defaultProps = {
  style: {
    border: "solid blue 2px"
  }
}

export const BotComponent = props => {
  const {
    bot,
    intents,
    style
  } = props

  const { abortStatement, clarificationPrompt } = bot

  return (
    <div style={style}>
       { abortStatement && <StatementComponent {...abortStatement} name="abortStatement" /> }
       { clarificationPrompt && <PromptComponent {...clarificationPrompt} name="clarificationPrompt" /> }
      {
        intents.map((intent,i) => 
          <IntentComponent key={`intent-${i}`} {...intent} />
        )
      }
    </div>
  )
}

BotComponent.defaultProps = defaultProps

export default BotComponent