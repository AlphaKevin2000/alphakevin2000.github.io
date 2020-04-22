import React from "react"
import { uuid } from "uuidv4"
import FormControl from "react-bootstrap/FormControl"
import { Condition } from "../condition"
import ButtonWithModal from "../../../widgets/ButtonWithModal"


export const StatementComponent = props => {
  const {
    statement,
    statementUUID,
    handleAddConditionUUID,
    handleUpdateNewConditionName,
    handleToggleModal,
    handleUpdateStatementText,
    newConditionName,
    conditions,
    showModal,
    trueText,
    falseText
  } = props

  //console.log(statement.conditions, conditions)

  return (
    <div style={{border: "thin solid red"}}>
      <h1>{statement.name}</h1>
      {conditions.map((c,i) => 
        <Condition key={`condition-${statement.name}${c.uuid}`} conditionUUID={c.uuid} statementUUID={statementUUID}
          isLastElement={i === conditions.length - 1} />
      )}
      <ButtonWithModal show={showModal} toggleAction={handleToggleModal} parentUUID={statementUUID}
        toggleButtonText="Add Condition" actionButtonText="Add"
        action={() => handleAddConditionUUID(uuid(), newConditionName, statementUUID)}>
        <FormControl value={newConditionName || ''}
          onChange={(event) => handleUpdateNewConditionName(event.target.value, statementUUID)} />
      </ButtonWithModal>
      <FormControl as="textarea" placeholder="true text" value={trueText || ''}
        onChange={(event) => handleUpdateStatementText(event.target.value, statementUUID, "trueText")}/>
      <FormControl as="textarea" placeholder="false text" value={falseText || ''}
        onChange={(event) => handleUpdateStatementText(event.target.value, statementUUID, "falseText")}/>
    </div>
  )
}

export default StatementComponent