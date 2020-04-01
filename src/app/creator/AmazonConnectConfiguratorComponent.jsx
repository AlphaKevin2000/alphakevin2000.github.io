import React from "react"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

export const defaultProps = {}

export const AmazonConnectConfiguratorComponent = props => {

  const {
    createContactFlow,
    connectConf,
    downloadJSON,
    lambdaKeys,
    language
  } = props

  return (

   <ButtonGroup size="sm">
          <Button onClick={createContactFlow}>create Connect Config</Button>
          <Button disabled={!connectConf} onClick={() => downloadJSON(connectConf, language)}>download Configs</Button>
          <Button disabled={!connectConf} onClick={() => downloadJSON(lambdaKeys, language)}>download keys</Button>
    </ButtonGroup>
  )
}

AmazonConnectConfiguratorComponent.defaultProps = defaultProps

export default AmazonConnectConfiguratorComponent