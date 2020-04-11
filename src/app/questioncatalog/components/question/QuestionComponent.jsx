import React from "react"
import PropTypes from "prop-types"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Octicon, { ArrowDown, ArrowUp, Trashcan } from "@primer/octicons-react"
import RadioOption from "./components/RadioOptionContainer"
import NextQuestionMap from "./components/NextQuestionMapContainer"
import Select from "../../../widgets/Select"
import ButtonWithModal from "../../../widgets/ButtonWithModal"
import DynamicTextArea from "../../../widgets/DynamicTextarea"

/* https://primer.style/octicons/packages/react */

export const defaultProps = {
}

export const propTypes = {
  text: PropTypes.string
}


export const QuestionComponent = props => {

  const {
    uuid,
    question,
    index,
    total,
    categoryMap,
    categories,
    inputTypes,
    handleRemoveQuestion,
    handleMoveQuestion,
    handleToggleNextQuestionMap,
    handleChangeQuestionID,
    handleChangeQuestionText,
    handleChangeQuestionCategory,
    handleChangeQuestionType,
    newRadioOption,
    handleAddNewRadioOption,
    handleUpdateNewRadioOption,
    handleToggleModal
  } = props

  return (
    <div style={{ border: "solid red 1px" }}>
      <Row>
        <Col xs={1}>
          <Badge variant={categoryMap[question.category]}>{question.category}</Badge>
          <Badge variant="secondary">{question.inputType}</Badge>
        </Col>
        <Col xs={3}>
          <FormControl value={question.id} onChange={(event) => handleChangeQuestionID(event.target.value, uuid)} />
        </Col>
        <Col xs={3}>
          <Select value={question.category} emptySelectText="Please select Category"
            onChangeHandler={(event) => handleChangeQuestionCategory(event.target.value, uuid)}
            options={categories} keyPrefix="category-question" />
        </Col>
        <Col xs={3}>
          <Select value={question.inputType} emptySelectText="Please select type"
            onChangeHandler={(event) => handleChangeQuestionType(event.target.value, uuid)}
            options={inputTypes} keyPrefix="inputType-question"/>
        </Col>
        <Col xs={2}>
          <Button variant="outline-secondary" disabled={index === 0} 
            onClick={() => handleMoveQuestion(uuid, -1)}>
            <Octicon><ArrowUp /></Octicon>
          </Button>
          <Button variant="outline-secondary" disabled={total === index}
            onClick={() => handleMoveQuestion(uuid, 1)}>
            <Octicon><ArrowDown /></Octicon>
          </Button>
          <Button variant="danger" onClick={() => handleRemoveQuestion(uuid)}>
            <Octicon><Trashcan /></Octicon>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <DynamicTextArea value={question.text} placeholder="Enter question text"
            onChangeHandler={(event) => handleChangeQuestionText(event.target.value, uuid)}/>
        </Col>
        {question.options
          ? <Col xs={4}>
              <Form.Check
                type="checkbox"
                label="fork"
                checked={question.nextQuestionMap !== undefined}
                onChange={(event) => handleToggleNextQuestionMap(event.target.checked, uuid)} />
            </Col>
          : null
        }
      </Row>
      <Row>
        <Col xs={6}><RadioOption existingQuestion={question} /></Col>
        <Col xs={6}><NextQuestionMap existingQuestion={question} /></Col>
      </Row>
      {question.options !== undefined
        ? <Row>
            <Col xs={4}>
            <ButtonWithModal show={question.showModal} toggleAction={handleToggleModal} parentUUID={question.uuid}
              toggleButtonText="Add option" actionButtonText="Add"
              requiredData={[newRadioOption]}
              action={() => handleAddNewRadioOption(newRadioOption, question.uuid)}>
              <DynamicTextArea value={newRadioOption} placeholder="Enter option text"
                onChangeHandler={(event) => handleUpdateNewRadioOption(event.target.value)} />
            </ButtonWithModal>
            </Col>
          </Row>
        : null
      }
    </div>
  )
}

QuestionComponent.propTypes = propTypes
QuestionComponent.defaultProps = defaultProps

export default QuestionComponent