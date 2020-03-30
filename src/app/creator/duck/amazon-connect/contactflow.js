import { EmptyContactFlow } from "./emptycontactflow"
import { ContactFlowError } from "./contactflowerror"
import { ContactFlowEnd } from "./contactflowend"
import { ContactFlowTransfer } from "./contactflowtransfer"
import { ContactFlowLogging } from "./contactflowlogging"
import { ContactFlowVoice } from "./contactflowvoice"
import { ContactFlowPlayPrompt} from "./contactflowplayprompt"
import { ContactFlowRepeat } from "./contactflowrepeat"
import { ContactFlowAttribute } from "./contactflowattribute"
import { ContactFlowInvokeExternal } from "./contactflowinvokeexternal"
import { ContactFlowUserInput } from "./contactflowuserinput"
import { ContactFlowStaticStart } from "./contactflowstaticstart"
import { ContactFlowStaticEnd } from "./contactflowstaticend"
import { ContactFlowQuestion } from "./contactflowquestion"

export const ContactFlow = {
  EmptyContactFlow,
  ContactFlowError,
  ContactFlowEnd,
  ContactFlowTransfer,
  ContactFlowLogging,
  ContactFlowVoice,
  ContactFlowPlayPrompt,
  ContactFlowRepeat,
  ContactFlowAttribute,
  ContactFlowInvokeExternal,
  ContactFlowUserInput,
  ContactFlowStaticStart,
  ContactFlowStaticEnd,
  ContactFlowQuestion
}

export default ContactFlow
