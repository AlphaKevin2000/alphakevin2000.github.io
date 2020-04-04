import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import Question from "./QuestionContainer"
import AddQuestion from "./AddQuestionContainer"

export const defaultProps = {}

export const propTypes = {
  questions: PropTypes.array
}

export const QuestionCatalogComponent = props => {

  const {
    questions
  } = props

  console.log({questions})

  return (
    <Container>
      <h1>Fraetrin kostet Nerven :) Schön wirds später! WIP</h1>
      {questions.map(question => 
        <Question key={question.uuid} uuid={question.uuid} question={question} />
      )}
      <AddQuestion />
    </Container>
  )
}

QuestionCatalogComponent.propTypes = propTypes
QuestionCatalogComponent.defaultProps = defaultProps

export default QuestionCatalogComponent