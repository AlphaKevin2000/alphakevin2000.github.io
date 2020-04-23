import AWS from "aws-sdk"
import {
  requestData,
  receiveData,
  receiveError,
  setAWSCredentials,
  setBots,
  setBotName,
  setBotVersion,
  setBot,
  setError,
  addIntent
} from "./actions"


export const handleSetAWSCredentials = credentials => {
  return dispatch => {
    dispatch(setAWSCredentials(JSON.parse(credentials)))
  }
}

export const handleBotNameChange = name => {
  return dispatch => {
    dispatch(setBotName(name))
  }
}

export const handleBotVersionChange = version => {
  return dispatch => {
    dispatch(setBotVersion(version))
  }
}

export const getBots = () => {
  return (dispatch,getState) => {
    AWS.config.credentials = getState().lex.awsCredentials
    const lexmodelbuildingservice = new AWS.LexModelBuildingService({ region: 'eu-west-1' })
    lexmodelbuildingservice.getBots({}, (err, data) => {
      if (err) {
        console.log(err, err.stack)
        dispatch(setError(err))
      }
      else {
        console.log(data)
        dispatch(setBots(data))
      }
    })
  }
}

/* export const handleGetSlots = slots => {
  return dispatch => {
    slots
      //.filter(s => !s.slotType.startsWith("AMAZON.") )
      .forEach(slot => {
        slot.slotType.startsWith("AMAZON.")
          ? lexmodelbuildingservice.getBuiltinSlotTypes({
            signatureContains: slot.slotType
          }, (err, slot) => {
            if (err) {
              console.log(slot)
              dispatch(setError(err))
            }
            else {
              console.log("THE SLOT", slot.slotTypes[0])
            }
          })
          : lexmodelbuildingservice.getSlotType({
            name: slot.slotType,
            version: slot.slotTypeVersion
          }, (err, slot) => {
            if (err) {
              console.log(slot)
              dispatch(setError(err))
            }
            else {
              console.log("THE SLOT", slot)
            }
          })
      }

      )
  }
} */

export const handleGetIntents = (lexmodelbuildingservice, intents) => {
  console.log({intents})
  return dispatch => {
    intents.forEach(intent => {
      dispatch(requestData())
      lexmodelbuildingservice.getIntent({
        version: "$LATEST",
        name: intent.intentName
      }, (err, intent) => {
        if (err) {
          dispatch(receiveError(err))
          dispatch(setError(err))
        }
        else {
          dispatch(receiveData(intent))
          dispatch(addIntent(intent))
        }
      })
    }
    )
  }
}

export const handleGetBot = (name, versionOrAlias) => {
  return (dispatch,getState) => {

    AWS.config.credentials = getState().lex.awsCredentials

    const params = { name, versionOrAlias }
    const lexmodelbuildingservice = new AWS.LexModelBuildingService({ region: 'eu-west-1' })
    dispatch(requestData())
    lexmodelbuildingservice.getBot(params, function (err, bot) {
      if (err) {
        dispatch(receiveError(err))
        dispatch(setError(err))
      }
      else {
        dispatch(receiveData(bot))
        dispatch(setBot(bot))
        dispatch(handleGetIntents(lexmodelbuildingservice, bot.intents))
      }
    })
  }
}

export const handleNewBot = () => {
  return dispatch => {
    dispatch(setBot({
      abortStatement: {
        messages: []
      },
      intents: []
    }))
  }
}

export const lexContainerOperations = {
  handleBotNameChange,
  handleBotVersionChange,
  handleGetBot,
  handleNewBot,
  getBots
}