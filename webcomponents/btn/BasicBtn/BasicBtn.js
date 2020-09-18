class BasicBtn extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    ;[this.style_e, this.div] = ["style", "div"].map(tag =>
      document.createElement(tag)
    )
    ;[this.div, this.style_e].forEach(e => shadow.appendChild(e))
    this.style_e.textContent = this.style()
  }
  connectedCallback() {
    const [
      label = "test",
      normal = "gray",
      hover = "dimgray",
      active = "darkgray",
    ] = ["label", "normal", "hover", "active"].map(
      val => this.getAttribute(val) || undefined
    )
    this.style_e.textContent +=
      [
        [normal, ""],
        [hover, ":hover"],
        [active, ":active"],
      ]
        .map(([val, pse]) => `div${pse}{ background: ${val}; }`)
        .join() + `div:before{ content: "${label}";}`
  }

  style = () => `
    div{
      user-select: none;
      vertical-align: middle;
      display: inline-block;
      text-align: center;
      padding: 9px 13px;
      color: white;
      border-radius: var(--main-border-radius, 5px);
      font-size: var(--smallest-font-size, 12px);
      cursor: pointer;
    }
  `
}
customElements.define("basic-btn", BasicBtn)
