import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import ButtonWithModal from "../widgets/ButtonWithModal"
import Question from "./components/question/QuestionContainer"
import NewQuestion from "./components/newquestion/NewQuestionContainer"
import Fonts from "./my-fonts.json"
import Select from "../widgets/Select"

export const defaultProps = {
  fonts: Fonts,
  style: {
    backgroundColor: "#2c3e50",
    border: "solid #eee 2px",
    borderRadius: "25px"
  }
}

export const propTypes = {
  questions: PropTypes.array
}

export const isVisibleQuestion = (question, key, arr) => arr.includes(question[key])

export const QuestionCatalogComponent = props => {

  const {
    questions,
    newQuestion,
    handleToggleNewQuestionModal,
    handleAddQuestion,
    style,
  } = props
  const { id, showNewQuestionModal } = newQuestion

  return (
    <Container style={style}>
      <ButtonWithModal show={showNewQuestionModal} toggleAction={handleToggleNewQuestionModal}
        toggleButtonText="Add question" actionButtonText="Add" toggleButtonVariant="outline-light"
        actionButtonVariant="outline-light"
        action={() => handleAddQuestion(id)}>
        <NewQuestion />
      </ButtonWithModal>
      {questions.map((question,i) =>
        <Question key={question.uuid} uuid={question.uuid} question={question} index={i} />
      )}
    </Container>
  )
}

QuestionCatalogComponent.propTypes = propTypes
QuestionCatalogComponent.defaultProps = defaultProps

export default QuestionCatalogComponent