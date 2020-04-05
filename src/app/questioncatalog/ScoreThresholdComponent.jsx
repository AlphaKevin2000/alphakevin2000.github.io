import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/badge"

export const ScoreThresholdMapComponent = props => {
  console.log(props)
  const {
    scoreThresholdMap,
    handleUpdateRecomThreshold,
    handleUpdateRecomText,
    totalScoreQuestions
  }  = props

  const scoreThresholds = Object.keys(scoreThresholdMap).map((key, i) => {

    const catTresh = scoreThresholdMap[key]

    return (
      <Row key={`scoreMap-${key}`}>
        <Col xs={5}>
        <InputGroup>
          <InputGroup.Prepend>
          <InputGroup.Text><Badge>{key}: {totalScoreQuestions[key] || 0}</Badge></InputGroup.Text>
          
          </InputGroup.Prepend>
          <FormControl value={catTresh.threshold} onChange={(event) => handleUpdateRecomThreshold(event.target.value, key)} />
          
        </InputGroup>
        </Col>
        <Col xs={3}>
            <InputGroup>
              <Button variant="outline-secondary" onClick={() => handleUpdateRecomThreshold(catTresh.threshold + 0.1, key)}>+</Button>
              <Button variant="outline-secondary" onClick={() => handleUpdateRecomThreshold(catTresh.threshold + 1, key)}>++</Button>
              <Button variant="outline-secondary" onClick={() => handleUpdateRecomThreshold(catTresh.threshold - 1, key)}>--</Button>
              <Button variant="outline-secondary" onClick={() => handleUpdateRecomThreshold(catTresh.threshold - 0.1, key)}>-</Button>
            </InputGroup>
        </Col>
        <Col xs={2}>
          <FormControl value={catTresh.recoms.isDanger} onChange={(event) => handleUpdateRecomText(event.target.value, key, "isDanger")} />
        </Col>
        <Col xs={2}>
          <FormControl value={catTresh.recoms.isSafe} onChange={(event) => handleUpdateRecomText(event.target.value, key, "isSafe")} />
        </Col>
      </Row>
    )
  })

return <Row>{scoreThresholds}</Row>
}

export default ScoreThresholdMapComponent