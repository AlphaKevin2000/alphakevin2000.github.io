import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Badge from "react-bootstrap/Badge"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import ListGroup from  "react-bootstrap/ListGroup"

export const StaticQuestion = props => {
  const {question } = props
  const {
    id,
    category,
    uuid,
    text,
    inputType,
    nextQuestionMap,
    scoreMap,
    options,
  } = question
  //console.log({...question})

  const info = (
    <Row>
      <Col xs={2} > 
        XMLTag: {id}
      </Col>
      <Col xs={2}>
        <Badge variant="custom">Category: {category}</Badge>
      </Col>
      <Col>
        Scored: 
      </Col>
      <Col xs={2}>
        {uuid}
      </Col>
      <Col xs={2}>
        Question Type: {inputType}
      </Col>
    </Row>
  )

  const previewDate = (txt) => (
    <Row>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>{txt}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" disabled defaultValue={txt} />
      </InputGroup>
    </Row>
  )

  const previewRadio = ({text, options}) => (
    <Row>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>{text}</InputGroup.Text>
        </InputGroup.Prepend>
        <ListGroup>{options.map((opt,i) => <ListGroup.Item>{opt}<Form.Check key={`prevOpt${i}`} type="radio" /></ListGroup.Item>)}</ListGroup>
      </InputGroup>
    </Row>
  )

  return (
    <div style={{textAlign: "center"}}>
      {info}
      {inputType === "date"
        ? previewDate(text)
        : previewRadio({text, options})
      }
    </div>
  )
}

export default StaticQuestion