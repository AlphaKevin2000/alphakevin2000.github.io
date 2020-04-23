import { connect } from "react-redux"
import BotSelectComponent from "./BotSelectComponent"
import {
  handleNewBot,
  handleBotNameChange,
  handleBotVersionChange,
  handleGetBot,
  getBots
} from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  bots: state.lex.bots,
  botname: state.lex.botname,
  botversion: state.lex.botversion
})

export const mapDispatchToProps = {
  handleNewBot,
  handleBotNameChange,
  handleBotVersionChange,
  handleGetBot,
  getBots
}


export default connect(mapStateToProps, mapDispatchToProps)(BotSelectComponent)