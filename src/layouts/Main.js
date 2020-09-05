import React from "react"
import { Route } from "react-router-dom"
// page
import Home from "../pages/home/Home"
import Document from "../pages/document/Document"
// components
import SideBar from "../components/SideBar/SideBar"

export default () => (
  <>
    <SideBar />
    <Route exact path="/home" component={Home} />
    <Route path="/document" component={Document} />
  </>
)
