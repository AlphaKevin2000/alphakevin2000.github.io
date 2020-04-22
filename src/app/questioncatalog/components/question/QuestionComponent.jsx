import React, {useRef} from "react"
import { useDrag, useDrop, DragPreviewImage } from "react-dnd"
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
import { pogChamp } from "./pogchamp"
/* https://primer.style/octicons/packages/react */


const ItemTypes = {
  Question: "question"
}

export const defaultProps = {
  style: {
    margin: "25px",
    padding: "25px",
    backgroundColor: "#1abc9c",
    border: "solid #eee 2px",
    color: "#2c3e50",
    borderRadius: "25px",
    cursor: "move"
  }
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
    handleMoveQuestionDnD,
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


  const ref = useRef(null)
  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.Question,
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
    drop(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const dropIndex = props.index
      handleMoveQuestionDnD(dragIndex, dropIndex)
    }
  })

  const blin = props.uuid

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.Question, blin, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),

    }),
  })

  drag(drop(ref))
  let style
  style = isDragging ? Object.assign({}, props.style, {backgroundColor: "#9aeaac"}) : props.style
  style = isOver ? Object.assign({}, props.style, {backgroundColor: "#44944e"}) : style
  console.log("the style", style)
  return (
    <div style={style} ref={ref}>
      <DragPreviewImage connect={preview} src={pogChamp} />
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
          <Button variant="outline-darkness" disabled={index === 0} 
            onClick={() => handleMoveQuestion(uuid, -1)}>
            <Octicon><ArrowUp /></Octicon>
          </Button>
          <Button variant="outline-darkness" disabled={total === index}
            onClick={() => handleMoveQuestion(uuid, 1)}>
            <Octicon><ArrowDown /></Octicon>
          </Button>
          <Button variant="outline-darkness" onClick={() => handleRemoveQuestion(uuid)}>
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
              toggleButtonVariant="outline-darkness" actionButtonVariant="outline-light"
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