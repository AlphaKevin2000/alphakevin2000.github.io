import React from "react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import AddRadioOption from "./AddRadioOptionContainer"

export const defaultProps = {
  questionTypes: ['radio', 'date'],
}

export const AddQuestionComponent = props => {
  const {
    handleAddQuestion,
    questionTypes,
    question,
    handleQuestionTextChange,
    handleQuestionTypeChange
  } = props

  return (
    <div>
      <InputGroup>
        <FormControl as="textarea"
          placeholder="Enter question text"
          value={question.text}
          onChange={(event) => handleQuestionTextChange(event.target.value)}
          
        />
        <InputGroup.Append>
          <Button variant="success" disabled={question.text.length === 0 || question.type === null}
          onClick={() => handleAddQuestion(question)}>Add Question</Button>
        </InputGroup.Append>
      </InputGroup>
      <Form>
        {questionTypes.map((qtype, i) =>
          <Form.Check inline label={`question type is ${qtype}`} type="radio"
            checked={question.type === qtype} onChange={() => handleQuestionTypeChange(qtype)}
            id={`questiontype-${qtype}`} key={`questiontype-${qtype}`}/>
        )}
      </Form>
      {
        question.type === "radio" ? <AddRadioOption /> : null
      }
    </div>
  )
}

AddQuestionComponent.defaultProps = defaultProps

export default AddQuestionComponent