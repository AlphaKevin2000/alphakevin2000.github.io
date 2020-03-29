import React from "react"
import Container from "react-bootstrap/Container"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import AccordionToggle from "react-bootstrap/AccordionToggle"

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
    fetchDataMock,
    availableLanguages,
    handleLanguageChange,
    language,
    createJSON,
    chariteData,
    createContactFlow,
    connectConf,
    downloadJSON
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
        <ButtonGroup className="mr-2">
        {
          // TODO: use something else instead of buttons
          availableLanguages.map(language =>
          <Button variant="secondary" key={language.key} onClick={() => handleLanguageChange(language.key)}>{language.display}</Button>
            ) 
        }
        </ButtonGroup>
        <ButtonGroup className="mr-2">
          <Button onClick={() => fetchDataMock('stringMap')}>Get Questionnnaire StringMap</Button>
          <Button onClick={() => fetchDataMock('order')}>Get Questionnnaire Order</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button disabled={!order || !stringMap} onClick={createJSON}>create JSON</Button>
          <Button disabled={!order || !stringMap || !chariteData} onClick={createContactFlow}>create Connect Config</Button>
          <Button disabled={!order || !stringMap || !chariteData || !connectConf} onClick={() => downloadJSON(connectConf)}>download Configs</Button>
        </ButtonGroup>
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