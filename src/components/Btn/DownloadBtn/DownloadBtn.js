class DownloadBtn extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    ;[this.style_e, this.div] = ["style", "div"].map(tag =>
      document.createElement(tag)
    )
    ;[this.div, this.style_e].forEach(e => shadow.appendChild(e))
    this.style_e.textContent = this.addStyle()
  }
  connectedCallback() {
    const [label] = ["label"].map(tag => this.getAttribute(tag))
    this.div.innerText = label
  }
  addStyle = () => `
    div{ 
      cursor: pointer;
      text-align: center;
      margin: 10px 0;
      padding: 10px 0;
      color: white;
      background: var(--main-theme-lightpink);
      font-size: 20px;
      border-radius: var(--main-border-radius);
    }
    div:hover{
      background: var(--main-theme-pink);
    }
  `
}
customElements.define("download-btn", DownloadBtn)
