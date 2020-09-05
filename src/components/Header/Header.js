import React from "react"
import { Link } from "react-router-dom"
import style from "./header.module.css"

export default () => (
  <header className={style.header}>
    <Link to="/" className={style.link}>
      <h2 className={style.h2}>Mineral.web</h2>
    </Link>
    <nav className={style.nav}>
      <Lists
        lists={[
          ["Home", "/home"],
          ["Document", "/document"],
          ["Guide", "#"],
        ]}
      />
      <Lists lists={[]} />
    </nav>
  </header>
)

const Lists = props => (
  <ul className={style.ul}>
    {props.lists.map(([txt, path]) => (
      <Link className={style.link} to={path} key={txt}>
        <li className={style.li}>{txt}</li>
      </Link>
    ))}
  </ul>
)
