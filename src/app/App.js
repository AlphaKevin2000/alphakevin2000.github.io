import React from "react";
import { HashRouter, Route } from "react-router-dom"
import { Creator } from "./creator"
import { QuestionCatalog } from "./questioncatalog"
import { DemoPageComponent } from "./demopage/DemoPageComponent"

export default function App() {
  return (
    <HashRouter basename='/'>
      <div>
        {/* <ul>
          <li><Link to="/">Create Amazon Connect</Link></li>
          <li><Link to="/questions">Create Questions</Link></li>
        </ul> */}
        <hr />
        <Route exact path="/" component={DemoPageComponent} />
        <Route exact path="/amazon" component={Creator} />
        <Route path="/questions" component={QuestionCatalog} />
      </div>
    </HashRouter>
  )
}