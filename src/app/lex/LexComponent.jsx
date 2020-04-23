import React from "react"
import Container from "react-bootstrap/Container"
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import BotSelectContainer from "./BotSelectContainer"
import BotComponent from "./BotComponent"
import FileDrop from "./FileDrop"

export const LexComponent = props => {
  const {
    bot,
    intents,
    awsCredentials,
    handleSetAWSCredentials,
  } = props

  return (
    <Container>
      <DndProvider backend={Backend}>
        <div style={{height: "50px", border:"solid black 1px"}}><FileDrop handleSetAWSCredentials={handleSetAWSCredentials}/></div>
      </DndProvider>
      { awsCredentials && <BotSelectContainer /> }
      { bot && <BotComponent bot={bot} intents={intents} /> }
    </Container>
  )
}

export default LexComponent