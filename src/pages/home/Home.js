import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown/with-html"
// style
import style from "../article.module.css"
// md
import Home from "./md/Home.md"

export default () => {
  const [md, setMD] = useState("")
  useEffect(() => {
    fetch(Home)
      .then(res => res.text())
      .then(res => setMD(res))
  }, [])

  return (
    <article className={style.article}>
      <div className={style.container}>
        <ReactMarkdown source={md} />
      </div>
    </article>
  )
}
