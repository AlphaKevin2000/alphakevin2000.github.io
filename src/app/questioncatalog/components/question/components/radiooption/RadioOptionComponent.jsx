import React from "react"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Octicon, { Trashcan, Plus }from "@primer/octicons-react"

export const RadioOptionComponent = props => {
  const {
    question,
    newRadioOption,
    handleUpdateRadioOption,
    handleUpdateNewRadioOption,
    handleAddNewRadioOption,
    handleRemoveRadioOption
  } = props

  const content = question.options === undefined
    ? null
    : (

        <Col xs={4}>
            {question.options.map((opt, i) => 
                <Row key={`newQuestion-option-${question.id}-${i}`}>
                <Col xs={6}>
                  <FormControl as="textarea" value={opt} onChange={(event) => handleUpdateRadioOption(event.target.value, question.uuid, i)} />
                </Col>
                <Col xs={6}>
                  <Button variant="danger" onClick={() => handleRemoveRadioOption(question.uuid, i)}>
                    <Octicon><Trashcan /></Octicon>
                  </Button>
                </Col>
              </Row>
            )}
            <FormControl
              as="textarea"
              placeholder="TODO: open modal on button click to enter radio option text "
              value={newRadioOption}
              onChange={(event) => handleUpdateNewRadioOption(event.target.value)}
            />
            <Button variant="primary" disabled={newRadioOption.length === 0} onClick={() => handleAddNewRadioOption(newRadioOption, question.uuid)}>
              <Octicon><Plus /></Octicon>
            </Button>
        </Col>

    )
  return content
}

export default RadioOptionComponent