import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom"
import { injectIntl } from "react-intl";
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import { Creator } from "./creator"
import { QuestionCatalog } from "./questioncatalog"
import  DemoPageComponent  from "./demopage/DemoPageComponent"
import { StatementCatalog } from "./statements"
import { Lex } from "./lex"
import logo from "./logo.png"



const LoginContainer = props => {
  console.log(props)
  //const {intl:{formatMessage}} = props
  return (
    <div><Route exact path="/" component={DemoPageComponent} /></div>
  )
}

const Test = LoginContainer


const DefaultContainer = props => {
  //const {intl:{formatMessage}} = props
  return (
    <div className="defaultContainer">
      <Navbar bg="darkness" variant="darkness" fixed="top" >
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
        <Link to="/questions"><Button variant="outline-light">Questions</Button></Link>
        <Link to="/statements"><Button variant="outline-light">Statements</Button></Link>
        <Link to="/amazon"><Button variant="outline-light">Amazon Connect</Button></Link>
      </Navbar>
      <Route exact path="/amazon" component={Creator} />
      <Route exact path="/questions" component={QuestionCatalog} />
      <Route exact path="/statements" component={StatementCatalog} />
      <Route exact path="/lex" component={Lex} />
    </div>
  )
}

export const App = props => {
  console.log("app", {props})
  return (
    <HashRouter basename='/'>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Test} />
        <Route component={DefaultContainer} />
      </Switch>
      </div>
    </HashRouter>
  )
}

export  default injectIntl(App)