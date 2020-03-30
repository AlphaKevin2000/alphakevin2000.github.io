import PropTypes from "prop-types"
import { uuid } from "uuidv4"
import { EmptyContactFlow } from "./emptycontactflow"
import { ContactFlowEnd } from "./contactflowend"
import { ContactFlowRepeat } from "./contactflowrepeat"
import { ContactFlowError } from "./contactflowerror"
import { ContactFlowTransfer } from "./contactflowtransfer"
import { ContactFlowUserInput } from "./contactflowuserinput"

export const defaultProps = {
  positionX: 820,
  positionY: 20
}

export const propTypes = {
  dispatch: PropTypes.func.isRequired,
  positionX: PropTypes.number,
  positionY: PropTypes.number
}

export const ContactFlowQuestion = ({
    dispatch, uuidMap, question, index, addKey,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY
  }) => {

      const contactFlowName = `generated_charite_data_${index}`

      const endUUID = uuid()
      const repeatUUID = uuid()
      const errorUUID = uuid()
      const transferUUID = uuid()


      const contactFlowQuestion = EmptyContactFlow({
        name: contactFlowName,
        startUUID: uuidMap[question.id]
      })
      const modules = []

      const contactFlowEnd = ContactFlowEnd(endUUID)
      modules.push(contactFlowEnd)

      const contactFlowRepeat = ContactFlowRepeat({
        ownUUID: repeatUUID,
        transitionUUID: uuidMap[question.id],
        positionX: positionX,
        postionY: positionY + 200
      })
      modules.push(contactFlowRepeat)

      const contactFlowError = ContactFlowError({
        ownUUID: errorUUID,
        transitionUUID: endUUID
      })
      modules.push(contactFlowError)

      const contactFlowTransfer = ContactFlowTransfer({
        ownUUID: transferUUID,
        errorUUID: errorUUID,
        resourceName: `generated_charite_data_${index+1}`
      })
      modules.push(contactFlowTransfer)

      let optionsUUIDMap = {}

      if (question.hasOwnProperty("options")) {
        console.log({question})
        question.options.forEach((option,i) => {
          optionsUUIDMap[i] = uuid()
        })
      } else {
        optionsUUIDMap[0] = uuid()
      }

      console.log({optionsUUIDMap})

      const contactFlowUserInput = ContactFlowUserInput({
        ownUUID: uuidMap[question.id],
        errorUUID: errorUUID,
        repeatUUID: repeatUUID,
        question: question,
        transitionUUID: transferUUID,
        uuidMap: uuidMap,
        optionsUUIDMap: optionsUUIDMap,
        modules: modules,
        positionX: positionX,
        positionY: positionY,
        dispatch: dispatch,
        addKey: addKey
      })
      modules.push(contactFlowUserInput)

      contactFlowQuestion.modules = modules

    return contactFlowQuestion
}