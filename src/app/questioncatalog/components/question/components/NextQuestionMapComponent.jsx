import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Select from "../../../../widgets/Select"

export const NextQuestionMapComponent = props => {
  const {
    handleUpdateNextQuestionMapOption,
    question,
    questions
  } = props

  const content = question.nextQuestionMap === undefined
    ? null
    : (
      <div>
        {question.nextQuestionMap.map((opt, i) =>
        <Row key={`nextQuestion-option-${i}`}>
          <Col xs={6}>Followup question </Col>
          <Col xs={6}>
          <Select options={questions.map(q => q.id)} value={opt} keyPrefix={`nextQuestion-option-${i}`}
            onChangeHandler={(event) => handleUpdateNextQuestionMapOption(event.target.value, question.uuid, i)} />
          </Col>
        </Row>
        )}
      </div>
    )
    return content
}

export default NextQuestionMapComponent