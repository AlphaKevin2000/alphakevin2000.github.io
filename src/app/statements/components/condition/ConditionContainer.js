import { connect } from "react-redux"
import ConditionComponent from "./ConditionComponent"

import {
  handleChangeOperand,
  handleChangeSelected,
  handleChangeValue,
  handleChangeCombination
} from "./duck/operations"

export const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questioncatalog.questions,
    categories: state.questioncatalog.categories,
    operands: state.statements.catalog.operands,
    combinations: state.statements.catalog.combinations,
    condition: state.statements.conditions.conditions.find(c => c.uuid === ownProps.conditionUUID),
    statement: state.statements.statements.statements.find(s => s.uuid === ownProps.statementUUID),
    selected: state.statements.conditions.conditions.find(c => c.uuid === ownProps.conditionUUID).selected,
    operand: state.statements.conditions.conditions.find(c => c.uuid === ownProps.conditionUUID).operand,
    value: state.statements.conditions.conditions.find(c => c.uuid === ownProps.conditionUUID).value,
    combination: state.statements.conditions.conditions.find(c => c.uuid === ownProps.conditionUUID).combination
  }
}

export const mapDispatchToProps = {
  handleChangeOperand,
  handleChangeSelected,
  handleChangeValue,
  handleChangeCombination
}

export default connect(mapStateToProps, mapDispatchToProps)(ConditionComponent)