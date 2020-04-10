import React from "react"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"

export const defaultProps = {}

export const AmazonConnectConfiguratorComponent = props => {

  const {
    createContactFlow,
    connectConf,
    downloadJSON,
    lambdaKeys,
    language,
    basename,
    handleSetBasename
  } = props

  return (

   <ButtonGroup size="sm">
          <FormControl value={basename} onChange={(event)=> handleSetBasename(event.target.value)} />
          <Button onClick={createContactFlow} disabled={basename === ""}>create Connect Config</Button>
          <Button disabled={!connectConf} onClick={() => downloadJSON(connectConf, language)}>download Configs</Button>
          <Button disabled={!connectConf} onClick={() => downloadJSON(lambdaKeys, language)}>download keys</Button>
    </ButtonGroup>
  )
}

AmazonConnectConfiguratorComponent.defaultProps = defaultProps

export default AmazonConnectConfiguratorComponent