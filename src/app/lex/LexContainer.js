import { connect } from "react-redux"
import LexComponent from "./LexComponent"
import { lexContainerOperations } from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  bots: state.lex.bots,
  botname: state.lex.botname,
  botversion: state.lex.botversion,
  error: state.lex.error,
  bot: state.lex.bot,
  intents: state.lex.intents,
  foo: state.lex.api.isFetching
})

export const mapDispatchToProps = {
  ...lexContainerOperations
}

export default connect(mapStateToProps, mapDispatchToProps)(LexComponent)