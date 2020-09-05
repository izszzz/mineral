import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown/with-html"
// style
import style from "../../article.module.css"
// webcomponents
import wcs from "../../../category"
// components
import CodeBlock from "./CodeBlock"
import "../../../components/Btn/DownloadBtn/DownloadBtn"

export default ({
  match: {
    params: { category, show },
  },
}) => {
  const [md, setMD] = useState("")
  const [js, setJS] = useState("")

  useEffect(() => {
    ;[
      ["README.md", setMD],
      [`${show}.js`, setJS],
    ].forEach(([file, func]) =>
      fetch(`/webcomponents/${category}/${show}/${file}`)
        .then(res => res.text())
        .then(res => func(res))
    )
  }, [])
  const onDownload = () => {
    const e = document.createElement("a"),
      file = new Blob([js], { type: "text/plain" })
    e.href = URL.createObjectURL(file)
    e.download = `${show}.js`
    e.click()
    e.remove()
  }
  return (
    <article className={style.article}>
      <div className={style.container}>
        <h2>Preview</h2>
        <div className={style.preview}>{wcs[category][show]}</div>
        <download-btn label="Download" onClick={() => onDownload()} />
        <ReactMarkdown source={md} renderers={{ code: CodeBlock }} />
      </div>
    </article>
  )
}
