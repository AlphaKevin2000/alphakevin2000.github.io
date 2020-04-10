import { connect } from "react-redux"
import StatementComponent from "./StatementComponent"

import {
  handleAddConditionUUID,
  handleUpdateNewConditionName,
  handleToggleModal,
  handleUpdateStatementText
} from "./duck/operations"

export const findObjByUUID = (arr, uuid) => arr.find(o => o.uuid === uuid)


export const mapStateToProps = (state, ownProps) => {

  const statement = findObjByUUID(state.statements.statements.statements, ownProps.statementUUID)
  const showModal = statement.showModal
  const trueText = statement.trueText
  const falseText = statement.falseText

  return {
    combinations: state.statements.combinations,
    operands: state.statements.operands,
    statement: statement,
    newConditionName: state.statements.statements.newConditionName,
    conditions: state.statements.conditions.conditions.filter(c => statement.conditions.includes(c.uuid)),
    showModal: showModal,
    trueText: trueText,
    falseText: falseText
  }
}

export const mapDispatchToProps = {
  handleAddConditionUUID,
  handleUpdateNewConditionName,
  handleToggleModal,
  handleUpdateStatementText
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementComponent)