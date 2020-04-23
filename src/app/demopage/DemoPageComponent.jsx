import React from "react"
import { Link } from "react-router-dom"
import { FormattedMessage,  injectIntl } from "react-intl";
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"


export const DemoPageComponent = props => {
  return (
    <Container>
      <Jumbotron>
        <h1><FormattedMessage id="welcomeHeading" defaultMessage="Hello World!" /></h1>
        <p>
        <FormattedMessage id="welcomeText" defaultMessage="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information." description="text landing page" />
        </p>
        <p>
          <Link to="/questions"><Button><FormattedMessage id="welcomeBtn" defaultMessage="Launch Demo" description="button landing page" /></Button></Link>
        </p>
      </Jumbotron>
    </Container>
  )
}


export default injectIntl(DemoPageComponent)