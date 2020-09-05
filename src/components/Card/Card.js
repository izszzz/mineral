import React from "react"
import style from "./card.module.css"
import { Link } from "react-router-dom"
export default ({ child, path }) => (
  <Link to={"/document" + path} className={style.link}>
    <li className={style.card}>{child}</li>
  </Link>
)
