import React from "react"
import { Route } from "react-router-dom"
// style
import style from "../article.module.css"
// pages
import Show from "./show/Show"
// components
import Cards from "../../components/Card/Cards"
export default () => (
  <article className={style.article}>
    <div className={style.container}>
      {[
        ["/document", Cards],
        ["/document/:category", Cards],
        ["/document/:category/:show", Show],
      ].map(([path, e]) => (
        <Route exact path={path} component={e} key={path} />
      ))}
    </div>
  </article>
)
