import React from "react"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Octicon, { Trashcan, Plus }from "@primer/octicons-react"

export const AddRadioOptionComponent = props => {
  const {
    question,
    newRadioOption,
    handleUpdateRadioOption,
    handleUpdateNewRadioOption,
    handleAddNewRadioOption,
    handleRemoveRadioOption
  } = props

  console.log({question})

  const content = question.options === undefined
    ? null
    : (

        <Col xs={6}>
            {question.options.map((opt, i) =>
              <Row key={`newQuestion-option-${i}`}>
                <Col xs={6}>
                  <FormControl value={opt} onChange={(event) => handleUpdateRadioOption(event.target.value, question.uuid, i)} />
                </Col>
                <Col xs={6}>
                  <Button variant="danger" onClick={() => handleRemoveRadioOption(question.uuid, i)}>
                    <Octicon><Trashcan /></Octicon>
                  </Button>
                </Col>
              </Row>
            )}
            <FormControl
              placeholder="Enter answer text"
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

export default AddRadioOptionComponent