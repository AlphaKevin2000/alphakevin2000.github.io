import {
  addStatementUUID,
  updateNewStatementName,
  toggleModal,
  changeAnswer
} from "./actions"
import {
  addStatement
} from "../components/statement/duck/actions"

export const handleAddStatement = (uuid, name) => {
  return dispatch => {
    dispatch(addStatementUUID(uuid))
    const statement = {
      uuid: uuid,
      name: name,
      conditions: [],
      showModal: false
    }
    dispatch(addStatement(statement))
  }
}

export const handleUpdateNewStatementName = name => {
  return dispatch => {
    dispatch(updateNewStatementName(name))
  }
}

export const handleToggleModal = show => {
  return dispatch => {
    dispatch(toggleModal(show))
  }
}

export const handleChangeAnswer = (answer, index) => {
  return dispatch => {
    dispatch(changeAnswer(answer, index))
  }
}

export const santasLittleHelper = (value, operand, targetValue) => {

  switch (operand) {
    case "==":
      return value === targetValue
    case "!=":
      return value !== targetValue
    case "<=":
      return value <= targetValue
    case ">=":
      return value >= targetValue
    case "&&":
      return value && targetValue
    case "||":
      return value || targetValue
    default:
      alert("FAIL RAISE ERROR")
      return undefined
  }
}

export const handleEvalLogic = (blin) => {
  return (dispatch, getState) => {

    const state = getState()
    const statementUUIDs = state.statements.catalog.catalog
    const answers = state.statements.catalog.answers
    
    statementUUIDs.forEach((statementUUID, i) => {
      let truthList = []
      let statement = state.statements.statements.statements.find(s => s.uuid === statementUUID)

      statement.conditions.forEach((conditionUUID, j) => {
        let condition = state.statements.conditions.conditions.find(c => c.uuid === conditionUUID)

        let blyat, conditionTrue
        let cList = []
        if (condition.hasOwnProperty("combination")) {
          let nextconditionUUID = statement.conditions[j+1]
          let nextcondition = state.statements.conditions.conditions.find(c => c.uuid === nextconditionUUID)
          let nahui, nextconditionTrue
          let cList2 = []
          nextcondition.selected.forEach((sel, k) => {
            nahui = answers.find(a => a.hasOwnProperty(sel))[sel]
            nextconditionTrue = santasLittleHelper(nahui, nextcondition.operand, nextcondition.value)
            cList2.push(nextconditionTrue)
          })
          condition.selected.forEach((sel, k) => {
            blyat = answers.find(a => a.hasOwnProperty(sel))[sel]
            conditionTrue = santasLittleHelper(blyat, condition.operand, condition.value)
            cList.push(conditionTrue)
          })

          let cListTrue = cList.every(c => c === true)
          let cList2True = cList2.every(c => c === true)

          conditionTrue = santasLittleHelper(cListTrue, condition.combination, cList2True)
        }
        else {
          condition.selected.forEach((sel, k) => {
            blyat = answers.find(a => a.hasOwnProperty(sel))[sel]
            conditionTrue = santasLittleHelper(blyat, condition.operand, condition.value)
            cList.push(conditionTrue)
          })
          conditionTrue = cList.every(c => c === true)
        }

        if (j+1 !== statement.conditions.length || j === 0) {
          truthList.push(conditionTrue)
        }
      })
      truthList.every(t => t === true) ? alert(statement.trueText) : alert(statement.falseText)
    })
    
    //return truthList.every(t => t === true)
  }
}