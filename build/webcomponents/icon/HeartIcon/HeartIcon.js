class HeartIcon extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    let svg
    ;[svg, this.path, this.style_e] = ["svg", "path", "style"].map(tag =>
      document.createElementNS("http://www.w3.org/2000/svg", tag)
    )
    ;[
      [svg, [this.path]],
      [shadow, [svg, this.style_e]],
    ].forEach(([parent, children]) =>
      children.forEach(child => parent.appendChild(child))
    )
    svg.setAttribute("viewBox", "0,0,100,100")
  }

  connectedCallback() {
    const [f, si, st] = ["fill", "size", "stroke"],
      stw = st + "-width",
      [size = 100, fill = "none", stroke = "red", strokeWidth = 5] = [
        si,
        f,
        st,
        stw,
      ].map(key => this.getAttribute(key) || void 0)

    ;[
      [st, stroke],
      [stw, strokeWidth],
      ["d", this.calcHeartPath(+strokeWidth)],
      [f, fill],
    ].forEach(([key, val]) => val && this.path.setAttribute(key, val))

    this.style_e.textContent += `svg{${["height", "width"]
      .map(prop => prop + `:${size}px;`)
      .join("")}}`
  }

  calcHeartPath(strokeWidth = 0) {
    const [p, m] = ["p", "m"],
      halfWidth = strokeWidth / 2,
      calcPath = (num, str) =>
        str === "p" ? num + halfWidth : str === "m" ? num - halfWidth : null,
      twentyfive = (" " + calcPath(25, m)).repeat(2),
      eight = calcPath(8, p)
    return `
      M 50 ${calcPath(90, m)}
      L ${calcPath(92, m)} 50
      A${twentyfive} 0 0 0 50 ${calcPath(15, p)} 
      A${twentyfive} 0 0 0 ${eight} 50
      L ${eight} 50
      Z
    `
  }
}
customElements.define("heart-icon", HeartIcon)
