import React from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Octicon, { Dependent }from "@primer/octicons-react"

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
    createJSONFromQuestionCatalog
  } = props

  // TODO: rename this
  const bla = {
    stringMap: stringMap[language],
    order: order,
    chariteData: chariteData,
    connectConf: connectConf
  }

  return (
    <Container>
      <div style={{textAlign: "center", color: "white !important"}}><Link to="/questions"><Button>Back to Generator</Button></Link></div>
      <h1>TODO: Add tooltips or some general usage guide</h1>
      <ButtonToolbar>
        <ButtonGroup className="mr-2" size="sm">
        {
          // TODO: use something else instead of buttons
          availableLanguages.map(lang =>
          <Button size="xs" variant={language === lang.key ? "success" : "secondary"} key={lang.key} onClick={() => handleLanguageChange(lang.key)}>{lang.display}</Button>
            ) 
        }
        </ButtonGroup>
        <ButtonGroup className="mr-2" size="sm">
          <Button onClick={getQuestionsAndGenerateJSONMock}>Get Questions Mock</Button>
          <Button variant="warning" onClick={createJSONFromQuestionCatalog}>
            <Octicon><Dependent /></Octicon>
          </Button>
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