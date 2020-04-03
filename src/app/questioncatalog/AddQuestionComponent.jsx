import React from "react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import RadioOption from "./RadioOptionContainer"

export const defaultProps = {
  questionTypes: ['radio', 'date'],
}

export const AddQuestionComponent = props => {
  const {
    questionTypes,
    question,
    handleNewQuestionAdd,
    handleUpateNewQuestion,
    handleNewQuestionTextChange,
    handleNewQuestionTypeChange
  } = props

  return (
    <div>
      <InputGroup>
        <FormControl as="textarea"
          placeholder="Enter question text"
          value={question.text}
          onChange={(event) => handleNewQuestionTextChange(event.target.value)}
          
        />
        <InputGroup.Append>
          <Button variant="success" disabled={question.text.length === 0 || question.type === null}
          onClick={() => handleNewQuestionAdd(question)}>Add Question</Button>
        </InputGroup.Append>
      </InputGroup>
      <Form>
        {questionTypes.map((qtype, i) =>
          <Form.Check inline label={`question type is ${qtype}`} type="radio"
            checked={question.type === qtype} onChange={() => handleNewQuestionTypeChange(qtype)}
            id={`questiontype-${qtype}`} key={`questiontype-${qtype}`}/>
        )}
      </Form>
      {
        question.type === "radio" ? <RadioOption /> : null
      }
    </div>
  )
}

AddQuestionComponent.defaultProps = defaultProps

export default AddQuestionComponent