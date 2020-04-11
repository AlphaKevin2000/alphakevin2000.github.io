import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import ButtonWithModal from "../widgets/ButtonWithModal"
import Question from "./components/question/QuestionContainer"
import NewQuestion from "./components/newquestion/NewQuestionContainer"
import Select from "../widgets/Select"

import Fonts from "./my-fonts.json"

export const defaultProps = {
  fonts: Fonts
}

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
    questions,
    categories,
    newQuestion,
    handleToggleNewQuestionModal,
    handleAddQuestion,
    fonts,
    activeFont,
    handleChangeFont
  } = props
  const { id, showNewQuestionModal } = newQuestion
  const valid = true//simpleSanityCheck(questions)

  console.log({ fonts })

  return (

    <Container style={{ fontFamily: `${activeFont.name}, ${activeFont.category}` }}>

      <Button onClick={() => handleChangeFont(fonts[Math.floor(Math.random() * fonts.length)])}>random font</Button>
      <Select options={fonts.map(f => f.name)} keyPrefix="fonts" value={activeFont.name}
        onChangeHandler={(event) => handleChangeFont(fonts.find(f => f.name === event.target.value))} />

      <ButtonWithModal show={showNewQuestionModal} toggleAction={handleToggleNewQuestionModal}
        toggleButtonText="Add question" actionButtonText="Add"
        action={() => handleAddQuestion(id)}>
        <NewQuestion />
      </ButtonWithModal>
      {questions.map(question =>
        <Question key={question.uuid} uuid={question.uuid} question={question} />
      )}
      <link href={`https://fonts.googleapis.com/css?family=${activeFont.name.replace(/ /g, "+")}&display=swap`} rel="stylesheet"></link>
    
    </Container>
  )
}

QuestionCatalogComponent.propTypes = propTypes
QuestionCatalogComponent.defaultProps = defaultProps

export default QuestionCatalogComponent