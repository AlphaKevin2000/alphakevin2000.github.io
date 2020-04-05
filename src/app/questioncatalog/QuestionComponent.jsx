import React from "react"
import PropTypes from "prop-types"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Octicon, { ArrowDown, ArrowUp, Trashcan }from "@primer/octicons-react"
import RadioOption from "./RadioOptionContainer"
import NextQuestionMap from "./NextQuestionMapContainer"
import Score from "./ScoreContainer"


/* https://primer.style/octicons/packages/react */

export const defaultProps = {
  categoryMap: {
    contact: "danger",
    personalInfo: "success",
    symptoms: "warning",
    respiratorySymptoms: "primary",
    illnesses: "dark",
    medication: "secondary"
  },
  inputTypes: ["radio", "date"],
  categories: ["contact", "personalInfo", "symptoms", "respiratorySymptoms", "illnesses", "medication"]
}

export const propTypes = {
  text: PropTypes.string
}


export const QuestionComponent = props => {

  const {
    uuid,
    question,
    handleRemoveQuestion,
    handleToggleNextQuestionMap,
    handleToggleScoreMap,
    handleMoveQuestion,
    index,
    total,
    categoryMap,
    categories,
    inputTypes,
    handleRenameQuestion,
    handleChangeQuestionText,
    handleChangeQuestionCategory,
    changeChangeQuestionType
  } = props

  return (
    <Row style={{border: "solid red 1px"}}>
      <Col xs={1}>
        <Badge variant={categoryMap[question.category]}>{question.category}</Badge>
        <Badge variant="secondary">{question.inputType}</Badge>
      </Col>
      <Col xs={3}>
        <FormControl value={question.id} onChange={(event) => handleRenameQuestion(event.target.value, question.uuid)} />
      </Col>
      <Col xs={3}>
        <FormControl as="select" onChange={(event) => handleChangeQuestionCategory(event.target.value, question.uuid)} value={question.category}>
          {Object.keys(categoryMap).map((cat, i) => <option key={`category-question-${question.id}-${i}`}>{cat}</option>)}
        </FormControl>
      </Col>
      <Col xs={3}>
        <FormControl as="select" onChange={(event) => changeChangeQuestionType(event.target.value, question.uuid)} value={question.inputType}>
          {inputTypes.map((t, i) => <option key={`inputType-question-${question.id}-${i}`}>{t}</option>)}
        </FormControl>
      </Col>
      <Col xs={2}>
        <Form.Check
          type="checkbox"
          label="fork"
          checked={question.nextQuestionMap !== undefined}
          onChange={(event) => handleToggleNextQuestionMap(event, question.uuid)}
        />
        { question.options
          ? <Form.Check
          type="checkbox"
          label="scored"
          checked={question.scoreMap !== undefined}
          onChange={(event) => handleToggleScoreMap(event, question.uuid)}
        />
          : null
        }
        
      </Col>
      <Col xs={9}>
        <FormControl
          as="textarea"
          placeholder="Enter question text"
          value={question.text}
          onChange={(event) => handleChangeQuestionText(event.target.value, question.uuid)}
        />
      </Col>
      <Col xs={3}>
        <Button variant="outline-secondary" disabled={index === 0} onClick={() => handleMoveQuestion(uuid, -1)}>
        <Octicon><ArrowUp /></Octicon>
        </Button>
        <Button variant="outline-secondary" disabled={total === index} onClick={() => handleMoveQuestion(uuid, 1)}>
          <Octicon><ArrowDown /></Octicon>
        </Button>
        <Button variant="danger" onClick={() => handleRemoveQuestion(uuid)}>
        <Octicon><Trashcan /></Octicon>
        </Button>
      </Col>
      <RadioOption existingQuestion={question} />
      <Score existingQuestion={question} />
      <NextQuestionMap existingQuestion={question} />
    </Row>
    
  )
}

QuestionComponent.propTypes = propTypes
QuestionComponent.defaultProps = defaultProps

export default QuestionComponent