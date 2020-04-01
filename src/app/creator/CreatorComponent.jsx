import React from "react"
import Container from "react-bootstrap/Container"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

import  AmazonSettings from "./AmazonConnectConfiguratorContainer" 


export const defaultProps = {
  availableLanguages: [
    {key: 'en', display: 'English'},
    {key: 'de', display: 'Deutsch'}
  ]
}

export const CreatorComponent = props => {

  const {
    order,
    stringMap,
    getQuestionsAndGenerateJSONMock,
    availableLanguages,
    handleLanguageChange,
    language,
    chariteData,
    connectConf,
  } = props

  const bla = {
    stringMap: stringMap[language],
    order: order,
    chariteData: chariteData,
    connectConf: connectConf
  }

  return (
    <Container>
      <h1>Hello World</h1>
      <ButtonToolbar>
        <ButtonGroup className="mr-2" size="sm">
        {
          // TODO: use something else instead of buttons
          availableLanguages.map(lang =>
          <Button size="xs" variant={language === lang.key ? "success" : "secondary"} key={language.key} onClick={() => handleLanguageChange(lang.key)}>{lang.display}</Button>
            ) 
        }
        </ButtonGroup>
        <ButtonGroup className="mr-2" size="sm">
          <Button onClick={getQuestionsAndGenerateJSONMock}>Get Questions</Button>
        </ButtonGroup>
        {chariteData ? <AmazonSettings /> : null}

      </ButtonToolbar>
      <Accordion>
        {
          Object.keys(bla).map((key, i) => 
            <Card key={"Card" + i}>
              <Accordion.Toggle as={Card.Header} eventKey={i}>
                { "Show " + key + " JSON"}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={i}>
                <Card.Body>
                <Form.Group controlId={"controlTextarea" + i}>
                  <Form.Label>{key}</Form.Label>
                  <Form.Control as="textarea" rows="50" value={bla[key] && JSON.stringify(bla[key], null, 4)} disabled/>
                </Form.Group>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )
        }
      </Accordion>
    </Container>
  )
}

CreatorComponent.defaultProps = defaultProps

export default CreatorComponent