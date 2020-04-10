import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormControl from "react-bootstrap/FormControl"


export const ConditionComponent = props => {
  const {
    questions,
    operands,
    combinations,
    condition,
    handleChangeOperand,
    handleChangeSelected,
    handleChangeValue,
    handleChangeCombination,
    statement,
    selected,
    operand,
    value,
    isLastElement
  } = props
  return (
    <div style={{border: "thin solid blue"}}>
      <h5>{condition.name}</h5>
      <Row>
        <Col xs={4}>
          <FormControl as="select" multiple onChange={
            (event) => handleChangeSelected(event.target.value, condition, statement)
            }
            value={selected}>
            <option value="">Please select</option>
            {/* {categories.map((c,i) => <option key={c} value={c}>sum of {c}</option>)} */}
            {questions.map((q,i) => <option key={q.id} value={q.id}>{q.id} {q.text}</option>)}
          </FormControl>
        </Col>
        <Col xs={2}>
          <FormControl as="select" onChange={(event) => handleChangeOperand(event.target.value, condition, statement)} value={operand}>
            <option value="">Please select</option>
            {operands.map((o,i) => <option key={`operand-${o}`}>{o}</option>)}
          </FormControl>
          <FormControl onChange={(event) => handleChangeValue(event.target.value, condition, statement)} value={value || ''}/>
        </Col>
      </Row>
      {
        isLastElement
          ? null
          : <Row className="justify-content-md-center">
              <Col xs={4}>
              <FormControl as="select" onChange={(event) => handleChangeCombination(event.target.value, condition, statement)}>
              <option value="">please select</option>
              {combinations.map((com, j) => <option key={`${condition.name}-combi-${j}`}>{com}</option>) }
              </FormControl>
              </Col>
            </Row>
      }
    </div>
  )
}

export default ConditionComponent