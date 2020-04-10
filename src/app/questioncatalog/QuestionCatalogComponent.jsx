import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Question from "./components/question/QuestionContainer"
import NewQuestion from "./components/newquestion/NewQuestionContainer"
import ScoreThreshold from "./components/logic/ScoreThresholdContainer"
import logo from "./logo.png"

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

export const isVisibleQuestion = (question, key, arr) => arr.includes(question[key])

export const QuestionCatalogComponent = props => {

  const {
    questions
  } = props
  const valid = true//simpleSanityCheck(questions)


  console.log("YO", questions)

  return (

    <Container style={{backgroundColor:"#ffffff"}}>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <img alt="" // TODO: add alt
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          FOO
        </Navbar.Brand>
        <Link to="/amazon"><Button disabled={!valid}>Create Amazon Connect</Button></Link>
        <Link to="/statements"><Button disabled={!valid}>Create Statements</Button></Link>
        <NewQuestion />
      </Navbar>
      <div></div>
      <ScoreThreshold />
      {questions.map(question =>
        <Question key={question.uuid} uuid={question.uuid} question={question} />
      )}
      <NewQuestion />
    </Container>
  )
}

QuestionCatalogComponent.propTypes = propTypes
QuestionCatalogComponent.defaultProps = defaultProps

export default QuestionCatalogComponent