import React from "react"
import FormControl from "react-bootstrap/FormControl"

export const defaultProps = {
  onChangeHandler: () => console.log("default onChangeHandler"),
  options: [],
  keyPrefix: "defaultPrefix",
  value: "",
  emptySelectText: "Please select"
}


export const Select = props => {
  const {
    onChangeHandler,
    options,
    keyPrefix,
    value,
    emptySelectText
  } = props
  return (
    <FormControl as="select" value={value}
      onChange={onChangeHandler}>
      <option value="">{emptySelectText}</option>
      {options.map((opt, i) =>
        <option key={`${keyPrefix}-${opt}`}
          defaultChecked={opt === value}>{opt}</option>
      )}
    </FormControl>
  )
}

Select.defaultProps = defaultProps

export default Select