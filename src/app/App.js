import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import { Creator } from "./creator"
import { QuestionCatalog } from "./questioncatalog"
import { DemoPageComponent } from "./demopage/DemoPageComponent"
import { StatementCatalog } from "./statements"
import { India } from "./india"
import logo from "./logo.png"


const LoginContainer = () => (
  <div><Route exact path="/" component={DemoPageComponent} /></div>
)

const DefaultContainer = () => (
  <div>
    <Navbar bg="dark" variant="dark" fixed="top" >
      <Link to="/">
        <Navbar.Brand>
          <img alt="" // TODO: add alt
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          FOO
        </Navbar.Brand>
      </Link>
      <Link to="/questions"><Button>Questions</Button></Link>
      <Link to="/statements"><Button>Statements</Button></Link>
      <Link to="/amazon"><Button>Amazon Connect</Button></Link>
    </Navbar>
    <Route exact path="/amazon" component={Creator} />
    <Route exact path="/questions" component={QuestionCatalog} />
    <Route exact path="/statements" component={StatementCatalog} />
    <Route exact path="/india" component={India} />
  </div>
)

export default function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
      </div>
    </HashRouter>
  )
}