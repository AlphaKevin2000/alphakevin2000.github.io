import { connect } from "react-redux"
import LexComponent from "./LexComponent"
import { lexContainerOperations, handleSetAWSCredentials } from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  error: state.lex.error,
  bot: state.lex.bot,
  intents: state.lex.intents,
  awsCredentials: state.lex.awsCredentials,
  foo: state.lex.api.isFetching
})

export const mapDispatchToProps = {
  handleSetAWSCredentials
}

export default connect(mapStateToProps, mapDispatchToProps)(LexComponent)