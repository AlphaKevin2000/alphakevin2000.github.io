import React from "react"
import FormControl from "react-bootstrap/FormControl"

export const SampleUtteranceComponent = props => {
  const { utterances } = props
  return (
    <div style={{textAlign: "center"}}>
      <h5>SampleUtterances</h5>
      {utterances.map((utter,i) => <FormControl placeholder={utter} key={`utterance-${i}`} />)}
    </div>
  )
}

export default SampleUtteranceComponent