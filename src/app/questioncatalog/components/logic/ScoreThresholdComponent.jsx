import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/badge"

export const ScoreThresholdMapComponent = props => {
  const {
    scoreThresholdMap,
    handleUpdateRecomThreshold,
    handleUpdateRecomText,
    totalScoreQuestions
  }  = props

  const scoreThresholds = Object.keys(scoreThresholdMap).filter(cat => ![0, undefined].includes(totalScoreQuestions[cat])).map((key, i) => {
    const catTresh = scoreThresholdMap[key]

    const fooHelper = (a,b) => (parseFloat(a) + parseFloat(b)).toFixed(2) // TODO: rename this

    return (
      <Row key={`scoreMap-${key}`}>
        <Col xs={12}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text><Badge>{key}: {totalScoreQuestions[key] || 0 }</Badge></InputGroup.Text>
          </InputGroup.Prepend>
          {/* JavaScript floating point math bug  */}
          {/* <FormControl type="number" value={catTresh.threshold} onChange={(event) => handleUpdateRecomThreshold(event.target.value, key)} /> */}
          <InputGroup.Text>Threshold: {catTresh.threshold}</InputGroup.Text>
          <Button variant="outline-secondary" onClick={() => handleUpdateRecomThreshold(fooHelper(catTresh.threshold, 0.1), key)}>+</Button>
              <Button variant="outline-secondary" onClick={() => handleUpdateRecomThreshold(fooHelper(catTresh.threshold, 1.0), key)}>++</Button>
              <Button variant="outline-secondary" onClick={() => handleUpdateRecomThreshold(fooHelper(catTresh.threshold, -1.0), key)}>--</Button>
              <Button variant="outline-secondary" onClick={() => handleUpdateRecomThreshold(fooHelper(catTresh.threshold, -0.1), key)}>-</Button>
          <InputGroup.Text>isDanger Text</InputGroup.Text>
          <FormControl as="textarea" value={catTresh.recoms.isDanger}
            onChange={(event) => handleUpdateRecomText(event.target.value, key, "isDanger")} />

        <InputGroup.Text>isDanger Text</InputGroup.Text>
          <FormControl as="textarea" value={catTresh.recoms.isSafe}
            onChange={(event) => handleUpdateRecomText(event.target.value, key, "isSafe")} />
          </InputGroup>
        </Col>
      </Row>
    )
  })

return <Row>{scoreThresholds}</Row>
}

export default ScoreThresholdMapComponent