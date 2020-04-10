import React from "react"
import FormControl from "react-bootstrap/FormControl"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const NextQuestionMapComponent = props => {
  const {
    handleUpdateNextQuestionMapOption,
    question,
    questions
  } = props

  const content = question.nextQuestionMap === undefined
    ? null
    : (
      <Col xs={4}>
        {question.nextQuestionMap.map((opt, i) =>
        <Row key={`nextQuestion-option-${i}`}>
          <Col xs={6}>Followup question </Col>
          <Col xs={6}>
          <FormControl as="select"
            value={opt}
            onChange={(event) => handleUpdateNextQuestionMapOption(event.target.value, question.uuid, i)}
          >
            <option defaultValue="">Please select</option>
            {questions.map((q, j) => <option key={`nextQuestion-option-${i}-${j}`} defaultValue={q.id === opt}>{q.id}</option>)}
          </FormControl>
          </Col>
        </Row>
        )}
      </Col>
    )
    return content
}

export default NextQuestionMapComponent