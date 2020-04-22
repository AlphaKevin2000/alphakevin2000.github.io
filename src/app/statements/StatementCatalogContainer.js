import { connect } from "react-redux"
import StatementCatalogComponent from "./StatementCatalogComponent"

import {
  handleAddStatement,
  handleUpdateNewStatementName,
  handleToggleModal,
  handleChangeAnswer,
  handleEvalLogic
} from "./duck/operations"

export const getQuestions = state => {
  const statementUUIDs = state.statements.catalog.catalog

  const questions = []
  statementUUIDs.forEach((statementUUID, i) => {
    let statement = state.statements.statements.statements.find(s => s.uuid === statementUUID)
    statement.conditions.forEach(conditionUUID => {
      let condition = state.statements.conditions.conditions.find(c => c.uuid === conditionUUID)
      condition.selected.forEach(s => 
        questions.includes(s) || ["", undefined].includes(s) ? null : questions.push(s)
      )
    })
  })

  return questions.map(q => state.questioncatalog.questions.find(x => x.id === q))
}

export const mapStateToProps = (state, ownProps) => ({
  catalog: state.statements.catalog.catalog,
  newStatementName: state.statements.catalog.newStatementName,
  showModal: state.statements.catalog.showModal,
  answers: state.statements.catalog.answers,
  blin: getQuestions(state),
  conditions: state.statements.conditions.conditions
})

export const mapDispatchToProps = {
  handleAddStatement,
  handleUpdateNewStatementName,
  handleToggleModal,
  handleChangeAnswer,
  handleEvalLogic
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementCatalogComponent)