import React from "react"
import PropTypes from "prop-types"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
//import RadioOption from "./RadioOptionContainer"
import RadioOption from "./RadioOptionContainer"
import NextQuestionMap from "./NextQuestionMapContainer"

export const defaultProps = {
  categoryMap: {
    contact: "danger",
    personalInfo: "success",
    symptoms: "warning",
    respiratorySymptoms: "primary",
    illnesses: "dark",
    medication: "secondary"
  }
}


export const propTypes = {
  text: PropTypes.string
}


export const QuestionComponent = props => {

  const { uuid, question, handleRemoveQuestion, handleToggleNextQuestionMap,
    handleMoveQuestion, index, total, categoryMap
  } = props

  return (
    <InputGroup>
      <InputGroup.Text><Badge variant={categoryMap[question.category]}>{question.category}</Badge>
      {question.id}
      <Form.Check
        type="checkbox"
        label="has nextQuestionMap"
        defaultChecked={question.nextQuestionMap !== undefined}
        onChange={(event) => handleToggleNextQuestionMap(event, question.uuid)}
      />

      </InputGroup.Text>
      <FormControl
        as="textarea"
        placeholder="Enter question text"
        defaultValue={question.text}
        onChange={() => console.log(question)}
      />
    <InputGroup.Append>
      <Button variant="outline-secondary" disabled={index === 0} onClick={() => handleMoveQuestion(uuid, -1)}>up</Button>
      <Button variant="outline-secondary" disabled={total === index} onClick={() => handleMoveQuestion(uuid, 1)}>down</Button>
      <Button variant="danger" onClick={() => handleRemoveQuestion(uuid)}>remove</Button>
    </InputGroup.Append>
    <RadioOption existingQuestion={question} />
    <NextQuestionMap existingQuestion={question} />
    </InputGroup>
  )
}

QuestionComponent.propTypes = propTypes
QuestionComponent.defaultProps = defaultProps

export default QuestionComponent