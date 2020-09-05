class BasicGauge extends HTMLElement {
  static get observedAttributes() {
    return ["now-points"]
  }
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    let container,
      frame,
      bar
      // createElement
    ;[this.style_e, this.p, container, frame, bar] = [
      "style",
      "p",
      "div",
      "div",
      "div",
    ].map(tag => document.createElement(tag))
    // add class
    ;[
      [container, "container"],
      [frame, "frame"],
      [bar, "bar"],
    ].forEach(([e, val]) => e.classList.add(val))

    this.style_e.textContent = this.addStyle()
    ;[
      [frame, [bar]],
      [container, [frame]],
      [shadow, [container, this.p, this.style_e]],
    ].forEach(([parent, children]) =>
      children.map(child => parent.appendChild(child))
    )
  }
  connectedCallback() {
    const [width, label, color] = ["width", "label", "color"].map(key =>
      this.getAttribute(key)
    )
    this.style_e.textContent += `
      .frame{
        width: ${width}px;
      }
      .container::before{
        content: "${label || ""}";
      }
      .bar{
        background: ${color || "#a1deff"};
      }
    `
  }
  attributeChangedCallback(name) {
    if (name === "now-points") {
      const [now_points, max_points] = ["now-points", "max-points"].map(key =>
          this.getAttribute(key)
        ),
        bar_width = (now_points / max_points) * 100,
        style = this.style_e.textContent.replace(
          /.bar{width:.*;}/,
          `.bar{width:${bar_width}%;}`
        )
      this.style_e.textContent = style
      this.p.innerText = `${max_points} / ${now_points}`
    }
  }

  addStyle = () => `
    :host{
      display: inline-block;
      vertical-align: middle;
    }
    .container{
      font-size: 13px;
      font-weight: 700;
    }
    .frame{
      width: 100px;
      height: 5px;
      border: solid 1px lightgray;
      border-radius: 5px;
    }
    .bar{
      position: relative;
      height: 100%;
      border-radius: 5px;
    }
    .bar{width: 100%;}

    p{
      margin: 0;
      font-size: 12px;
    }
  `
}

customElements.define("basic-gauge", BasicGauge)
