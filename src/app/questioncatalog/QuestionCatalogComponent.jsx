import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Question from "./QuestionContainer"
import AddQuestion from "./AddQuestionContainer"
import ScoreThreshold from "./ScoreThresholdContainer"

export const defaultProps = {}

export const propTypes = {
  questions: PropTypes.array
}

/* export const validText = txt => ["", null, undefined].every(x => x !== txt)
export const validArray = arr => arr.every(item => ["", null, undefined].every(x => x !== item))
export const validString = str => ["", null, undefined].every(x => x !== str) && str.match(/^[a-z0-9]+$/i) !== null
export const validUUID = uuid => uuid.match(/^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/i) !== null

export const simpleSanityCheck = questions => {
  return questions.every(q => {
    //console.log(q)
    return validUUID(q.uuid)
      && validString(q.id)
      && validString(q.category)
      && validString(q.inputType)
      && validText(q.text)
      && (q.options === undefined || validArray(q.options))
      && (q.nextQuestionMap === undefined || validArray(q.nextQuestionMap))
      && (q.scoreMap === undefined || validArray(q.scoreMap))
  })
}  */

export const QuestionCatalogComponent = props => {

  const {
    questions
  } = props
  const valid = true//simpleSanityCheck(questions)
  

  return (
    <Container>
      <div style={{textAlign: "center"}}><Link to="/amazon"><Button disabled={!valid}>Create Amazon Connect</Button></Link></div>
      <ScoreThreshold/>
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