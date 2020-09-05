class BasicDropdown extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    let lists_slot, style
    ;[this.container, lists_slot, this.target_slot, style] = [
      "div",
      "slot",
      "slot",
      "style",
    ].map(tag => document.createElement(tag))
    this.eventsList = [
      [this.target_slot, this.onClickTargetSlot],
      [window, this.onClickWindow],
    ]
    style.textContent = this.addStyle()
    this.container.classList.add("container")
    // addEventListener
    this.eventsList.forEach(([e, func]) => e.addEventListener("click", func))
    // setAttribute
    ;[
      [lists_slot, "lists"],
      [this.target_slot, "target"],
    ].forEach(([e, val]) => e.setAttribute("name", val))

    // appendChild
    ;[
      [this.container, [this.target_slot, lists_slot]],
      [shadow, [this.container, style]],
    ].forEach(([parent, children]) =>
      children.forEach(child => parent.appendChild(child))
    )
  }
  onClickTargetSlot = e => {
    e.stopPropagation()
    this.container.toggleAttribute("active")
  }
  onClickWindow = e => this.container.removeAttribute("active")
  disconnectedCallbak() {
    this.eventsList.forEach(([e, func]) => e.removeEventListener("click", func))
  }
  addStyle = () => `
    ::slotted([slot="lists"]){
      margin: 0;
      padding: 0;
    }
    :host{
      display: inline-block;
      vertical-align: middle;
    }
    .container{
      position: relative;
    }
    .container>::slotted([slot=lists]){
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      display: none;
      min-width: 100px;
      margin: 5px 0;
      padding: 0;
      list-style: none;
      filter: drop-shadow(0px 0px 6px var(--shadow-color, rgba(0,0,0,.2)));
    }
    .container[active]>::slotted([slot=lists]){
      display: inline-block;
    }
  
  `
}

class BasicDropdownList extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    // createElement
    ;[this.li, this.style_e] = ["li", "style"].map(tag =>
      document.createElement(tag)
    )
    this.style_e.textContent = this.addStyle()
    // appendChild
    ;[this.li, this.style_e].forEach(e => shadow.appendChild(e))
  }

  connectedCallback() {
    this.li.innerText = this.getAttribute("text") || ""
  }
  addStyle = () => `
    li{
      margin 0 5px;
      padding: 5px 10px;
      color: var(--main-font-color, #2b2b2b);
      background: var(--main-bg-color, white);
      font-size: var(--smallest-font-size, 10px);
    }
    li:hover{
      background: var(--main-theme-lightgray, #e6e6e6);
      cursor: pointer;
    }
  `
}
customElements.define("basic-dropdown-list", BasicDropdownList)
customElements.define("basic-dropdown", BasicDropdown)
