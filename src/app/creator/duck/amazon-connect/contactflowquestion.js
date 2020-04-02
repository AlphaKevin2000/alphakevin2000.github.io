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
  positionY: 20,
  offsetX: 0,
  offsetY: 200
}

export const propTypes = {
  dispatch: PropTypes.func.isRequired,
  positionX: PropTypes.number,
  positionY: PropTypes.number
}

export const ContactFlowQuestion = ({
    language, errorText, repeatText, index,
    dispatch, uuidMap, xxxMap, question, addKey, name,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY,
    offsetX = defaultProps.offsetX,
    offsetY = defaultProps.offsetY
  }) => {

      console.log(`hello question ${question.id} has index ${index}`)

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
        transferUUIDs = question.options.map(q => singleTransferUUID)
      }

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
        positionX: positionX + offsetX,
        positionY: positionY + offsetY,
        text: repeatText
      })
      modules.push(contactFlowRepeat)

      const contactFlowError = ContactFlowError({
        ownUUID: errorUUID,
        transitionUUID: endUUID,
        errorText: errorText
      })
      modules.push(contactFlowError)

      const uniqueTransferUUIDs = Array.from(new Set(transferUUIDs))

      uniqueTransferUUIDs.forEach(t => {

        let current = xxxMap.find(u => u.key === t.key)
        let currentIndex = xxxMap.indexOf(current)
        let nextIndex = currentIndex + 1
        // TODO: clean up this mess....
        let fooName
        if(question.id === xxxMap.slice(-1)[0].key) {
          fooName = "end"
        } else {
          // uniqueTransferUUIDs only 1 element? use xxxMap[next] else t.key
          fooName =  uniqueTransferUUIDs.length === 1 ? xxxMap[nextIndex].key : t.key
        }
  
        if (fooName !== "end") {
          let nextQuestion = xxxMap.find(x => x.key === fooName)
          fooName = xxxMap.indexOf(nextQuestion)
        }
        console.log(`${question.id} leads to question number ${fooName}`)

        const contactFlowTransfer = ContactFlowTransfer({
          ownUUID: t.uuid,
          errorUUID: errorUUID,
          resourceName: `question_${fooName}_${language}`
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

      const contactFlowUserInput = ContactFlowUserInput({
        question: question,
        ownUUID: uuidMap[question.id],
        repeatUUID: repeatUUID,
        errorUUID: errorUUID,
        transitionUUIDs: transferUUIDs,
        optionsUUIDMap: optionsUUIDMap,
        modules: modules,
        positionX: positionX,
        positionY: positionY,
        dispatch: dispatch,
        addKey: addKey,
        language: language,
        maxDigits: question.inputType === "radio" ? "1" : "3",
      })
      modules.push(contactFlowUserInput)

      contactFlowQuestion.modules = modules

    return contactFlowQuestion
}