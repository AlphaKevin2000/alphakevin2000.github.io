import React from "react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

export const RadioOptionsComponent = props => {
  return (
    <InputGroup>
      <FormControl
        placeholder="Enter answer text"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={() => alert("TBD")}>up</Button>
        <Button variant="outline-secondary" onClick={() => alert("TBD")}>down</Button>
        <Button varion="danger" onClick={() => alert("TBD")}>add</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default RadioOptionsComponent