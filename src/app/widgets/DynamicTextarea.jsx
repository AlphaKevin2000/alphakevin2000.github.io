import React from "react"
import FormControl from "react-bootstrap/FormControl"

export const defaultProps = {
  cols: 80,
  placeholder: "default placeholder",
  value: "default placeholder",
  onChangeHandler: () => console.log("default onChangeHandler")
}

export const DynamicTextArea = props => {
  //const rows = props.value.split("").filter(char => char === "\n").length + 1
  const rows = Math.ceil(props.value.split("").length / props.cols)
  return <FormControl as="textarea" rows={rows} cols={props.cols} placeholder={props.placeholder}
           value={props.value} onChange={props.onChangeHandler} />
}
  


DynamicTextArea.defaultProps = defaultProps

export default DynamicTextArea