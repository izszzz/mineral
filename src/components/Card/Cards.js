import React from "react"
import Card from "./Card"
// style
import style from "./card.module.css"
// webcomponents
import wcs from "../../category"

export default ({
  match: {
    url,
    params: { category },
  },
}) => {
  const cardsEntries = category =>
    Object.entries(wcs[category]).map(([name, e]) => {
      const path = `/${category}/${name}`
      return <Card child={e} path={path} key={path} />
    })
  return (
    <ul className={style.cards}>
      {url === "/document"
        ? Object.keys(wcs).map(category => cardsEntries(category))
        : cardsEntries(category)}
    </ul>
  )
}
