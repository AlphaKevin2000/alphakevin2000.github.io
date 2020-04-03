import React from "react"
import PropTypes from "prop-types"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
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
    handleMoveQuestion, index, total, categoryMap, handleRenameQuestion, handleChangeQuestionCategory
  } = props

  return (
    <Row>
      <Col xs={1}>
        <Badge variant={categoryMap[question.category]}>{question.category}</Badge>
      </Col>
      <Col xs={3}>
        <FormControl defaultValue={question.id} onChange={(event) => handleRenameQuestion(event.target.value, question.uuid)} />
      </Col>
      <Col xs={3}>
        <FormControl as="select" onChange={(event) => handleChangeQuestionCategory(event.target.value, question.uuid)}>
          {Object.keys(categoryMap).map((cat, i) => <option key={`category-question-${question.id}-${i}`} defaultValue={cat === question.category}>{cat}</option>)}
        </FormControl>
      </Col>
      <Col xs={5}>
        <Form.Check
          type="checkbox"
          label="has nextQuestionMap"
          defaultChecked={question.nextQuestionMap !== undefined}
          onChange={(event) => handleToggleNextQuestionMap(event, question.uuid)}
        />
      </Col>
      <Col xs={9}>
        <FormControl
          as="textarea"
          placeholder="Enter question text"
          defaultValue={question.text}
          onChange={() => console.log(question)}
        />
      </Col>
      <Col xs={3}>
        <Button variant="outline-secondary" disabled={index === 0} onClick={() => handleMoveQuestion(uuid, -1)}>up</Button>
        <Button variant="outline-secondary" disabled={total === index} onClick={() => handleMoveQuestion(uuid, 1)}>down</Button>
        <Button variant="danger" onClick={() => handleRemoveQuestion(uuid)}>remove</Button>
      </Col>
      <RadioOption existingQuestion={question} />
      <NextQuestionMap existingQuestion={question} />
    </Row>
    
  )
}

QuestionComponent.propTypes = propTypes
QuestionComponent.defaultProps = defaultProps

export default QuestionComponent