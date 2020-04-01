import PropTypes from "prop-types"
import { uuid } from "uuidv4"
import { EmptyContactFlow } from "./emptycontactflow"
import { ContactFlowEnd } from "./contactflowend"
import { ContactFlowRepeat } from "./contactflowrepeat"
import { ContactFlowError } from "./contactflowerror"
import { ContactFlowTransfer } from "./contactflowtransfer"
import { ContactFlowStore } from "./contactflowstore"

export const defaultProps = {
  positionX: 820,
  positionY: 20
}

export const propTypes = {
  dispatch: PropTypes.func.isRequired,
  positionX: PropTypes.number,
  positionY: PropTypes.number
}

export const ContactFlowQuestionDate = ({
    dispatch, uuidMap, xxxMap, question, index, addKey, name,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY
  }) => {

      const endUUID = uuid()
      const repeatUUID = uuid()
      const errorUUID = uuid()

      let transferUUIDs 
      if (question.nextQuestionMap !== undefined) {
        let someUUIDs = Array.from(new Set(question.nextQuestionMap.map(q => {
          return {uuid: uuid(), key: q}
        })))
        transferUUIDs = question.nextQuestionMap.map(q => {
          return someUUIDs.find(u => u.key === q)
        })
      }
      else {
        let singleTransferUUID = {uuid: uuid(), key: question.id}
        if (question.hasOwnProperty("options")) {
          transferUUIDs = question.options.map(q => singleTransferUUID)
        } else {
          transferUUIDs = [singleTransferUUID]
        }
      }

      transferUUIDs = Array.from(transferUUIDs)

      const contactFlowQuestion = EmptyContactFlow({
        name: name,
        startUUID: uuidMap[question.id]
      })
      const modules = []

      const contactFlowEnd = ContactFlowEnd({ownUUID:endUUID})
      modules.push(contactFlowEnd)

      const contactFlowRepeat = ContactFlowRepeat({
        ownUUID: repeatUUID,
        transitionUUID: uuidMap[question.id],
        positionX: positionX,
        positionY: positionY + 200
      })
      modules.push(contactFlowRepeat)

      const contactFlowError = ContactFlowError({
        ownUUID: errorUUID,
        transitionUUID: endUUID
      })
      modules.push(contactFlowError)

      Array.from(new Set(transferUUIDs)).forEach(t => {

        let current = xxxMap.find(u => u.key === t.key)
        let currentIndex = xxxMap.indexOf(current)
        let nextIndex = currentIndex + 1
        // TODO: clean up this mess....
        let fooName
        if(question.id === xxxMap.slice(-1)[0].key) {
          fooName = "end"
        } else {
          console.log(t.key === xxxMap.slice(-1)[0].key)
          console.log(t.key, xxxMap, Array.from(new Set(transferUUIDs)))
          // Set only 1 element? use xxxMap[next] else t.key
          fooName =  Array.from(new Set(transferUUIDs)).length === 1 ? xxxMap[nextIndex].key : t.key
        } 
        console.log(`${question.id} leads to ${fooName}`)

        const contactFlowTransfer = ContactFlowTransfer({
          ownUUID: t.uuid,
          errorUUID: errorUUID,
          resourceName: `automated_charite_data_${fooName}`
          //resourceName: `automated_charite_data_${t.key}`
        })
        modules.push(contactFlowTransfer)
      })

      let optionsUUIDMap = {}

      if (question.hasOwnProperty("options")) {
        question.options.forEach((option,i) => {
          optionsUUIDMap[i] = uuid()
        })
      } else {
        optionsUUIDMap[0] = uuid()
      }

      console.log("the quest", question)

      const contactFlowStore = ContactFlowStore({
        ownUUID: uuidMap[question.id],
        errorUUID: errorUUID,
        repeatUUID: repeatUUID,
        question: question,
        transitionUUIDs: transferUUIDs,
        uuidMap: uuidMap,
        optionsUUIDMap: optionsUUIDMap,
        modules: modules,
        positionX: positionX,
        positionY: positionY,
        dispatch: dispatch,
        addKey: addKey,
        maxDigits: question.inputType === "radio" ? "1" : "3"
      })
      modules.push(contactFlowStore)

      contactFlowQuestion.modules = modules

    return contactFlowQuestion
}