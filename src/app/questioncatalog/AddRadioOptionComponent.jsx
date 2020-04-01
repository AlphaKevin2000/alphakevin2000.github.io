import React from "react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"


export const AddRadioOptionComponent = props => {
  const { handleAddRadioOption } = props
  return (
    <InputGroup>
      <FormControl
        placeholder="Enter answer text"
      />
      <InputGroup.Append>
        <Button varion="danger" onClick={() => handleAddRadioOption()}>add</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AddRadioOptionComponent