class BasicChatMessage extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    ;[this.style_e, this.p] = ["style", "p"].map(tag =>
      document.createElement(tag)
    )
    ;[this.p, this.style_e].forEach(e => shadow.appendChild(e))
    this.style_e.textContent = this.addStyle()
  }
  connectedCallback() {
    const [color, text, position] = ["color", "text", "position"].map(key =>
      this.getAttribute(key)
    )
    this.p.innerText = text
    const splited = color.split(","),
      radius = "var(--main-border-radius)"

    this.style_e.textContent += `
      :host{
        text-align: ${position === "right" ? "right" : "left"};
      }
      p{
        background: ${position === "right" ? splited[1] : splited[0]};
        border-radius: ${radius} ${radius} ${
          position === "right"
            ? "0 " + radius 
            : radius +" 0"
        };
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
