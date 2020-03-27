import React from "react"
import Container from "react-bootstrap/Container"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const defaultProps = {
  availableLanguages: [
    {key: 'en', display: 'English'},
    {key: 'de', display: 'Deutsch'}
  ]
}

export const CreatorComponent = props => {

  const { order, stringMap, fetchDataMock, availableLanguages, handleLanguageChange, language, createJSON, data } = props

  console.log(data)

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
          <Button onClick={createJSON}>create JSON</Button>
        </ButtonGroup>
      </ButtonToolbar>
      {/* <Row>
        <Col>
          <Form.Group controlId="controlTextarea1">
            <Form.Label>StringMap textarea</Form.Label>
            <Form.Control as="textarea" rows="50" value={stringMap && JSON.stringify(stringMap[language], null, 4)} disabled/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="ControlTextarea2">
            <Form.Label>Order textarea</Form.Label>
            <Form.Control as="textarea" rows="50" value={order && JSON.stringify(order, null, 4)}disabled/>
          </Form.Group>
        </Col>
      </Row> */}
      <Form.Group controlId="controlTextarea3">
            <Form.Label>Generated JSON textarea</Form.Label>
            <Form.Control as="textarea" rows="50" value={data} disabled/>
          </Form.Group>
    </Container>
  )
}

CreatorComponent.defaultProps = defaultProps

export default CreatorComponent