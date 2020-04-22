import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import ButtonWithModal from "../widgets/ButtonWithModal"
import Question from "./components/question/QuestionContainer"
import NewQuestion from "./components/newquestion/NewQuestionContainer"
import Fonts from "./my-fonts.json"

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
    activeFont,
    style
  } = props
  const { id, showNewQuestionModal } = newQuestion

  /* { fontFamily: `${activeFont.name}, ${activeFont.category}` } */

  return (
    <Container style={style}>

      {/* <Button onClick={() => handleChangeFont(fonts[Math.floor(Math.random() * fonts.length)])}>random font</Button>
      <Select options={fonts.map(f => f.name)} keyPrefix="fonts" value={activeFont.name}
        onChangeHandler={(event) => handleChangeFont(fonts.find(f => f.name === event.target.value))} /> */}

      <ButtonWithModal show={showNewQuestionModal} toggleAction={handleToggleNewQuestionModal}
        toggleButtonText="Add question" actionButtonText="Add" toggleButtonVariant="outline-light"
        actionButtonVariant="outline-light"
        action={() => handleAddQuestion(id)}>
        <NewQuestion />
      </ButtonWithModal>
      {questions.map((question,i) =>
        <Question key={question.uuid} uuid={question.uuid} question={question} index={i} />
      )}
{/*       <link href={`https://fonts.googleapis.com/css?family=${activeFont.name.replace(/ /g, "+")}&display=swap`} rel="stylesheet"></link>
 */}    
    </Container>
  )
}

QuestionCatalogComponent.propTypes = propTypes
QuestionCatalogComponent.defaultProps = defaultProps

export default QuestionCatalogComponent