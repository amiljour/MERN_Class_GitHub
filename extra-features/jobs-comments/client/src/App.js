import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Dashboard from "./views/Dashboard"
import CreateJob from "./views/CreateJob"
import EditJob from "./views/EditJob"
import OneJob from "./views/OneJob"
import Dashboard2 from "./views/Dashboard2"

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <h1> Jobs Board</h1>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/deleteOption2">
            <Dashboard2 />
          </Route>
          <Route exact path="/jobs/new">
            <CreateJob />
          </Route>
          <Route exact path="/jobs/edit/:id">
            <EditJob />
          </Route>
          <Route exact path="/jobs/:id">
            <OneJob />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
