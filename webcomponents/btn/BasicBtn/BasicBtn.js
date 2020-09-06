class BasicBtn extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" }),
      ary = [this.div, this.style_e]
    ;[...ary] = ["div", "style"].map(tag => document.createElement(tag))
    this.style_e.textContent = this.addStyle()
    ary.forEach(e => shadow.appendChild(e))
  }
  connectedCallback() {
    const [label, normal, hover, active] = [
      "label",
      "normal",
      "hover",
      "active",
    ].map(attr => this.getAttribute(attr))
    this.style_e.textContent += `
    div{
      background: ${normal || "gray"};
    }
    div:hover{
      background: ${hover || "dimgray"};
    }
    div:active{
      background: ${active || "darkgray"};
    }
    div:before{
      content: "${label || "test"}"
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
      border-radius: 5px;
      font-size: var(--smallest-font-size, 12px);
      cursor: pointer;
    }
  `
}
customElements.define("basic-btn", BasicBtn)
