class BasicBtn extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    ;[this.style_e, this.div] = ["style", "div"].map(tag =>
      document.createElement(tag)
    )
    this.style_e.textContent = this.addStyle()
    ;[this.div, this.style_e].forEach(e => shadow.appendChild(e))
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
    this.style_e.textContent += `
    div{
      background: ${normal};
    }
    div:hover{
      background: ${hover}; 
    }
    div:active{
      background: ${active};
    }
    div:before{
      content: "${label}"
    }
    `
  }

  addStyle = () => `
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
