class BasicChatMessage extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    ;[this.style_e, this.p] = ["style", "p"].map(tag =>
      document.createElement(tag)
    )
    this.style_e.textContent = this.addStyle()
    ;[this.p, this.style_e].forEach(e => shadow.appendChild(e))
  }
  connectedCallback() {
    const [color, text, position] = ["color", "text", "position"].map(attr =>
      this.getAttribute(attr)
    )
    this.p.innerText = text
    const splited = color.split(",")

    this.style_e.textContent += `
      :host{
        text-align: ${position === "right" ? "right" : "left"};
      }
      p{
        background: ${position === "right" ? splited[1] : splited[0]};
        border-radius: ${
          position === "right" ? "4px 4px 0 4px" : "4px 4px 4px 0"
        }
      }
    `
  }

  addStyle = () => `
    :host{
      display: block;
    }
    p{
      display: inline-block;
      max-width: 300px;
      margin: 5px;
      padding: 10px;
      color: var(--main-font-color, #2b2b2b);
      background: lightgray;
      font-size: var(--smallest-font-size, 12px);
      transition: 
        color var(--theme-change-speed, 0.3s) ease;
    }
  `
}
customElements.define("basic-chat-message", BasicChatMessage)
