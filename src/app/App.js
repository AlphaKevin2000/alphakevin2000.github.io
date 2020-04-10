import React from "react";
import { HashRouter, Route } from "react-router-dom"
import { Creator } from "./creator"
import { QuestionCatalog } from "./questioncatalog"
import { DemoPageComponent } from "./demopage/DemoPageComponent"
import { StatementCatalog } from "./statements"

export default function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Route exact path="/" component={DemoPageComponent} />
        <Route exact path="/amazon" component={Creator} />
        <Route path="/questions" component={QuestionCatalog} />
        <Route path="/statements" component={StatementCatalog} />
      </div>
    </HashRouter>
  )
}