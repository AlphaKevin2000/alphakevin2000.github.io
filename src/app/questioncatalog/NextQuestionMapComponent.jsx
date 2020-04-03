import React from "react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

export const NextQuestionMapComponent = props => {
  const {
    handleUpdateNextQuestionMapOption,
    question,
    questions
  } = props

  const content = question.nextQuestionMap === undefined
    ? null
    : (
      <InputGroup>
        {question.nextQuestionMap.map((opt, i) =>
          <FormControl as="select" key={`nextQuestion-option-${i}`}
            value={opt}
            onChange={(event) => handleUpdateNextQuestionMapOption(event.target.value, question.uuid, i)}
          >
            {questions.map((q, j) => <option key={`nextQuestion-option-${i}-${j}`} defaultValue={q.id === opt}>{q.id}</option>)}
          </FormControl>
        )}
      </InputGroup>
    )
    return content
}

export default NextQuestionMapComponent