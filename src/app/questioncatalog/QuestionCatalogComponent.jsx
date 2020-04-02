import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import Question from "./QuestionComponent"
import AddQuestion from "./AddQuestionContainer"

export const defaultProps = {}

export const propTypes = {
  questions: PropTypes.array
}

export const QuestionCatalogComponent = props => {

  const {
    questions,
    handleRemoveQuestion,
    handleMoveQuestion
  } = props

  console.log({questions})

  return (
    <Container>
      <h1>QuestionCatalogComponent</h1>
      {questions.map((question,i) => 
        <Question key={question.uuid} uuid={question.uuid} question={question}
          handleRemoveQuestion={handleRemoveQuestion}
          handleMoveQuestion={handleMoveQuestion}
          index={i} total={questions.length - 1}
        />
      )}
      <AddQuestion />
    </Container>
  )
}

QuestionCatalogComponent.propTypes = propTypes
QuestionCatalogComponent.defaultProps = defaultProps

export default QuestionCatalogComponent