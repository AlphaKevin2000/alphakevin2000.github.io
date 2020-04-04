import React from "react"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"

export const defaultProps = {
  questionTypes: ['radio', 'date'],
  categories: [
    "contact",
    "personalInfo",
    "symptoms",
    "respiratorySymptoms",
    "illnesses",
    "medication"
  ]
}

export const AddQuestionComponent = props => {

  const {
    showNewQuestionModal,
    editQuestion,
    handleToggleNewQuestionModal,
    handleChangeNewQuestion,
    handleAddQuestion,
    errorMessage,
    questionTypes,
    categories
  } = props
  const { id, category, text, inputType } = editQuestion
  const requiredData = [id, category, text, inputType]

  return (
    <div style={{textAlign: "center"}}>
      <Button variant="success" onClick={() => handleToggleNewQuestionModal(!showNewQuestionModal)}>
        Create New Question
      </Button>
      <Modal show={showNewQuestionModal} onHide={() => handleToggleNewQuestionModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>

            {errorMessage !== "" ? <Alert variant="danger" style={{width: "100%", textAlign: "center"}}>{errorMessage}</Alert> : null}

        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6}>
              <FormControl placeholder="Enter new question name"
                defaultValue={id} onChange={(event) => handleChangeNewQuestion(event.target.value, "id")} />
            </Col>
            <Col xs={6}>
              <FormControl placeholder="Enter new question text"
                defaultValue={text} onChange={(event) => handleChangeNewQuestion(event.target.value, "text")} />
            </Col>
            <Col xs={6}>
              <FormControl as="select" defaultValue={inputType}
                onChange={(event) => handleChangeNewQuestion(event.target.value, "inputType")}>
                <option>Please select type</option>
                {questionTypes.map((t,i) => 
                  <option key={`newQuestionInputType-${t}`}
                    defaultChecked={t===inputType}>{t}</option>
                )}
              </FormControl>
            </Col>
            <Col xs={6}>
              <FormControl as="select" defaultValue={category}
                onChange={(event) => handleChangeNewQuestion(event.target.value, "category")}>
                <option>Please select category</option>
                {categories.map((c,i) => 
                  <option key={`newQuestionCategory-${c}`}
                    defaultChecked={c===category}>{c}</option>
                )}
              </FormControl>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="success" disabled={requiredData.some(d => d === undefined)} block onClick={handleAddQuestion}>
            Add Question
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

AddQuestionComponent.defaultProps = defaultProps

export default AddQuestionComponent