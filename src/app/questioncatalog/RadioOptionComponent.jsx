import React from "react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"


export const AddRadioOptionComponent = props => {
  const {
    question,
    newRadioOption,
    handleUpdateRadioOption,
    handleUpdateNewRadioOption,
    handleAddNewRadioOption,
    handleRemoveRadioOption
  } = props

  const content = question.options === undefined
    ? null
    : (
      <InputGroup>
        {console.log(question)}
        {question.options.map((opt, i) =>
        <div key={`newQuestion-option-${i}`}>
          <FormControl value={opt} onChange={(event) => handleUpdateRadioOption(event.target.value, question.uuid, i)} />
          <Button variant="danger" onClick={() => handleRemoveRadioOption(question.uuid, i)}>remove</Button>
        </div>
        )}
        <FormControl
          placeholder="Enter answer text"
          value={newRadioOption}
          onChange={(event) => handleUpdateNewRadioOption(event.target.value)}
        />
        <InputGroup.Append>
          <Button variant="primary" disabled={newRadioOption.length === 0}
          onClick={() => handleAddNewRadioOption(newRadioOption, question.uuid)}>add</Button>
        </InputGroup.Append>
      </InputGroup>
    )
  return content
}

export default AddRadioOptionComponent