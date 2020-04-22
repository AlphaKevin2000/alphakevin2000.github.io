import React from "react"
import FormControl from "react-bootstrap/FormControl"

export const StatementComponnet = props => {
  //console.log("statement", {props})
  const {
    messages,
    responseCard,
    name
  } = props
  return (
    <div style={{textAlign: "center"}}>
      <h5>{name}</h5>
      <FormControl disabled as="textarea" defaultValue={responseCard} placeholder="TBD responseCard"/>
      {messages.map((message, i) => <FormControl key={`${name}-message-${i}`} defaultValue={message.content} />)}
    </div>
  )
}

export default StatementComponnet