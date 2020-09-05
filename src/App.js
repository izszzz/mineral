import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// style
import style from "./App.module.css"
import "./variable.css"
// pages
import Landing from "./pages/landing/Landing"
// components
import Header from "./components/Header/Header"
// layouts
import Main from "./layouts/Main"

export default () => (
  <Router>
    <Header />
    <main className={style.main}>
      <Switch>
        <Route exact strict path="/" component={Landing} />
        <Route strict path="/" component={Main} />
      </Switch>
    </main>
  </Router>
)
