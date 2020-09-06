class BattlePoints extends HTMLElement {
  static get observedAttributes() {
    return ["now-points"]
  }
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    let style
    ;[this.container, this.p, style] = ["div", "p", "style"].map(tag =>
      document.createElement(tag)
    )
    ;[this.container, this.p, style].forEach(e => shadow.appendChild(e))
    style.textContent = this.addStyle()
  }
  attributeChangedCallback(name) {
    if (name === "now-points") {
      const [max_points, now_points] = ["max-points", "now-points"].map(
        tag => +this.getAttribute(tag) || 5
      )

      this.container.innerHTML = [...Array(max_points)]
        .map(
          (_, i) => `
        <ul>
          <li ${now_points <= i || "class='active'"}></li>
        </ul>
      `
        )
        .join("")
      this.p.innerText = `${max_points}/${now_points}`
    }
  }
  addStyle = () => `
    *{
      margin: 0;
      padding: 0;
    }
    :host{
      display: inline-block;
      vertical-align: middle;
    }
    div{
      display: flex;
    }
    ul{
      height: 16px;
      width: 16px;
      margin: 0 2px;
      background: darkgray;
      border: solid 4px dimgray;
      border-radius: 50%;
    }
    
    li{
      position: relative;
      overflow: hidden;
      list-style: none;
      height: 16px;
      width: 16px;
      background: #ff6666;
      border-radius: 50%;
      display: none;
    }

    li:after{
      content: "";
      position: absolute;
      top: 2px;
      right: 2px;
      display: inline-block;
      height: 4px;
      width: 4px;
      background: #ffe3e3;
      filter: blur(1px);
      border-radius: 50%;
    }
    li:before{
      content: "";
      position: absolute;
      top: 2px;
      right: 2px;
      display: inline-block;
      height: 15px;
      width: 15px;
      background: #cc2525;
      filter: blur(3px);
      border-radius: 50%;
    }

    li.active{
      display: inline-block;
      position: absolute;
    }
    
    p{
      font-size: 12px;
    }
  `
}

customElements.define("battle-points", BattlePoints)
