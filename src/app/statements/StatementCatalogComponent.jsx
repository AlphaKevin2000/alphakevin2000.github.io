import React from "react"
import { uuid } from "uuidv4"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import { Statement } from "./components/statement"
import ButtonWithModal from "./components/widgets/ButtonWithModal"

export const StatementCatalogComponent = props => {
  const {
    catalog,
    newStatementName,
    showModal,
    handleAddStatement,
    handleUpdateNewStatementName,
    handleToggleModal,
    handleChangeAnswer,
    handleEvalLogic,
    answers,
    blin
  } = props


  return (
    <Container>
      <h1>This Site may have heavy bugs, work in progress</h1>
      <Button onClick={(event) => handleEvalLogic(blin)} disabled={answers.length === 0 || answers.some(a => ["", undefined].includes(a))}>Eval</Button>
      {
        blin.map((b,i) => {
          return (
            <Row key={`blin-${b.id}`}>
              <Col xs={4}>{b.id}</Col>
              <Col xs={8}>
                <FormControl onChange={(event) => handleChangeAnswer({[b.id]: event.target.value}, i)}/>
              </Col>
            </Row>
          )
        })
      }
      {catalog.map((c,i) => {
        return <Statement key={`statement-${i}`} statementUUID={c}  />
      })}
      <ButtonWithModal show={showModal} toggleAction={handleToggleModal}
        action={(event) => handleAddStatement(uuid(), newStatementName)}
        toggleButtonText="Add Statenent" actionButtonText="Add">
          <FormControl placeholder="enter new statement name" value={newStatementName}
            onChange={(event) => handleUpdateNewStatementName(event.target.value)} />
        </ButtonWithModal>
    </Container>
  )
}


export default StatementCatalogComponent