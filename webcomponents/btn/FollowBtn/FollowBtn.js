class FollowBtn extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    this.style_e = document.createElement("style")
    this.style_e.textContent = this.addStyle()
    this.addEventListener("click", this.onClick)
    shadow.appendChild(this.style_e)
  }

  onClick = () => this.toggleAttribute("active")

  connectedCallback() {
    const [label, color] = ["label", "color"].map(
      attr => this.getAttribute(attr) || "".split(",")
    )
    this.style_e.textContent += `
    :host:before{
      content: "${label[0] || "follow"}";
    }
    :host([active]):before{
      content: "${label[1] || "following"}";
    }
    :host{
      background: ${color[0]};
    }
    :host([active]){
      color: ${color[1]};
      border: solid 1px ${color[1]};
    }
    `
  }

  addStyle = () => `
    :host{
      vertical-align: middle;
      user-select: none;
      display: inline-block;
      padding: 8px 20px;
      background: steelblue;
      color: white;
      font-size: var(--smallest-font-size, 12px);
      border: solid 1px transparent;
      border-radius: 100px;
      cursor: pointer;
      transition: 
        border ease 0.3s,
        color ease 0.3s,
        width ease 0.3s,
        background ease 0.3s;
    }
    :host([active]){
      background: transparent;
      color: steelblue; 
      border: solid 1px steelblue;
    }
  `
}

customElements.define("follow-btn", FollowBtn)
