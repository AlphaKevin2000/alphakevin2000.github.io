import React from "react"
import FormControl from "react-bootstrap/FormControl"

export const PromptComponent = props => {
  const {
    name,
    /* maxAttempts, */
    messages,
    /* responseCard */
  } = props
  return (
    <div style={{textAlign: "center"}}>
      <h5>{name}</h5>
      {messages.map((message,i) =>
        <FormControl defaultValue={message.content} key={`message-${i}`}/>
      )}
    </div>
  )
}

export default PromptComponent