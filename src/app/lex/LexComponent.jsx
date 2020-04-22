import React from "react"
import Container from "react-bootstrap/Container"

import Button from "react-bootstrap/Button"
import BotSelectComponent from "./BotSelectComponent"
import BotComponent from "./BotComponent"
import StatementComponent from "./StatementComponent"
import IntentComponent from "./IntentComponent"

export const LexComponent = props => {
  const {
    bots,
    bot,
    intents,
    error,
    getBots,
    botname,
    botversion,
    handleNewBot,
    handleBotNameChange,
    handleBotVersionChange,
    handleGetBot,
    foo
  } = props
  console.log("lex", {props})

  const availableBots = bots ? bots : getBots()
  const bsProps = {
    availableBots,
    botname,
    botversion,
    handleNewBot,
    handleBotNameChange,
    handleBotVersionChange,
    handleGetBot,
  }

  return (
    <Container>
      <BotSelectComponent {...bsProps} />
      { bot && <BotComponent bot={bot} intents={intents} /> }
    </Container>
  )
}

export default LexComponent