import React from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"

export const DemoPageComponent = props => 
  <Container>
    <Jumbotron>
    <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Link to="/questions"><Button>Launch Demo</Button></Link>
      </p>
    </Jumbotron>
  </Container>

export default DemoPageComponent