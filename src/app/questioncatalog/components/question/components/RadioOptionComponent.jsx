import React from "react"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Octicon, { Trashcan }from "@primer/octicons-react"
import DynamicTextArea from "../../../../widgets/DynamicTextarea"

export const RadioOptionComponent = props => {
  const {
    question,
    handleUpdateRadioOption,
    handleRemoveRadioOption
  } = props

  const content = question.options === undefined
    ? null
    : (
        <div>
            {question.options.map((opt, i) => 
                <Row key={`newQuestion-option-${question.id}-${i}`}>
                <Col xs={6}>
                  <DynamicTextArea value={opt} onChangeHandler={(event) => handleUpdateRadioOption(event.target.value, question.uuid, i)} />
                </Col>
                <Col xs={6}>
                  <Button variant="outline-darkness" onClick={() => handleRemoveRadioOption(question.uuid, i)}>
                    <Octicon><Trashcan /></Octicon>
                  </Button>
                </Col>
              </Row>
            )}
        </div>

    )
  return content
}

export default RadioOptionComponent