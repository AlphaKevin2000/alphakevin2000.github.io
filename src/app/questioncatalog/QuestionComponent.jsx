import React from "react"
import PropTypes from "prop-types"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import RadioOptionComponent from "./RadioOptionComponent"

export const defaultProps = {

}


export const propTypes = {
  text: PropTypes.string
}


export const QuestionComponent = props => {

  const { uuid, question, handleRemoveQuestion,
    handleMoveQuestion, index, total
  } = props

  return (
    <InputGroup>
      <FormControl
        as="textarea"
        placeholder="Enter question text"
        defaultValue={question.text}
      />
    <InputGroup.Append>
      <Button variant="outline-secondary" disabled={index === 0} onClick={() => handleMoveQuestion(uuid, -1)}>up</Button>
      <Button variant="outline-secondary" disabled={total === index} onClick={() => handleMoveQuestion(uuid, 1)}>down</Button>
      <Button varion="danger" onClick={() => handleRemoveQuestion(uuid)}>remove</Button>
    </InputGroup.Append>
    { question.type === "radio" ? <RadioOptionComponent options={question.options} />: null}
    </InputGroup>
  )
}

QuestionComponent.propTypes = propTypes
QuestionComponent.defaultProps = defaultProps

export default QuestionComponent