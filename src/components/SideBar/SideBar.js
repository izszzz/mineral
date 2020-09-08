import React from "react"
import { Link } from "react-router-dom"
import style from "./sidebar.module.css"

export default () => (
  <div className={style.sidebar}>
    <ul className={style.ul}>
      <Lists
        lists={[
          ["Button", "btn"],
          ["Tooltip", "tooltip"],
          ["Dropdown", "dropdown"],
          ["Chat", "chat"],
          ["Gauge", "gauge"],
          ["Points", "points"],
          ["Background", "bg"],
        ]}
      />
    </ul>
  </div>
)

const Lists = ({ lists }) =>
  lists.map(([txt, path]) => (
    <Link className={style.link} to={"/document/" + path} key={txt}>
      <li className={style.li}>{txt}</li>
    </Link>
  ))
