import React from "react"
import FormControl from "react-bootstrap/FormControl"
import Col from "react-bootstrap/Col"


export const ScoreComponent = props => {
  const {
    handleUpdateScoreMapOption,
    question,
    questions
  } = props
  const content = question.scoreMap === undefined
    ? null
    : (
      <Col xs={4}>
        {question.scoreMap.map((s,i) =>
          <FormControl key={`score-${question.uuid}-${i}`} value={s} onChange={(event) => handleUpdateScoreMapOption(event.target.value, question.uuid, i)}/>
        )}
      </Col>
    )
  return content
}

export default ScoreComponent