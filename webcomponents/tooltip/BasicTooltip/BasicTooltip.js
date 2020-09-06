class BasicTooltip extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    ;[this.style_e, this.slot_e, this.container] = [
      "style",
      "slot",
      "div",
    ].map(tag => document.createElement(tag))

    //appendChild
    ;[
      [this.container, [this.slot_e]],
      [shadow, [this.container, this.style_e]],
    ].forEach(([parent, children]) =>
      children.forEach(child => parent.appendChild(child))
    )
    this.style_e.textContent = this.addStyle()
    this.slot_e.setAttribute("name", "target")
    this.container.classList.add("container")
  }
  connectedCallback() {
    this.style_e.textContent += `
    .container:after{
      content: "${this.getAttribute("text") || ""}";
      ${this.getAttribute("position") === "top" ? "bottom" : "top"}: 100%;
    }
    `
  }
  addStyle = () => `
    .container{
      position: relative;
      display: inline-block;
      vertical-align: middle;
    }
    .container:after{
      position: absolute;
      left: 0;
      display: none;
      text-align: center;
      margin: 5px 0;
      padding: 5px 8px;
      background: gray;
      color: white;
      border-radius: 5px;
      font-size: var(--smallest-font-size, 11px);
    }
    .container:hover:after{
      display: inline-block;
    }
  `
}

customElements.define("basic-tooltip", BasicTooltip)
