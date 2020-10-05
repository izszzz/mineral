class InputKnob extends HTMLElement {
  constructor() {
    super()
    this.degree = 260
    this.halfDeg = this.degree / 2
    this.downX = this.downY = this.upX = this.upY = this.onchange = null
    this.distance = this.value = this.angle = this.max = this.min = 0
    const shadow = this.attachShadow({ mode: "open" })
    let container
    ;[this.label, this.input, this.knob, container, this.style_e] = [
      "p",
      "input",
      "div",
      "div",
      "style",
    ].map(tag => document.createElement(tag))
    this.events = [
      [this.knob, "mousedown", this.mouseDown],
      [document.body, "mousemove", this.mouseMove],
      [document.body, "mouseup", this.mouseUp],
    ]
    ;[
      [this.input, "change", this.changeInput],
      ...this.events,
    ].forEach(([e, action, func]) => e.addEventListener(action, func))
    ;[
      [this.label, "label"],
      [this.knob, "knob"],
      [container, "container"],
    ].forEach(([e, name]) => e.classList.add(name))
    ;[
      [container, [this.label, this.knob, this.input]],
      [shadow, [container, this.style_e]],
    ].forEach(([parent, children]) =>
      children.forEach(child => parent.appendChild(child))
    )
    this.input.setAttribute("type", "number")
    this.style_e.textContent = this.addStyle()
  }

  connectedCallback() {
    // getAttribute
    this.label.innerText = this.getAttribute("label")
    ;[this.max = 0, this.min = 0, this.value = 0] = ["max", "min", "value"].map(
      key => +this.getAttribute(key) || void 0
    )
    ;[
      ["max", this.max],
      ["min", this.min],
      ["value", this.value],
    ].forEach(([key, name]) => this.input.setAttribute(key, name))
    this.calcAngle()
    this.rotateKnob(this.angle)
    this.onchange && this.onchange(this.value)
  }
  changeInput = e => {
    this.value = e.currentTarget.value
    this.calcAngle()
    this.rotateKnob(this.angle)
    this.onchange && this.onchange(this.value)
  }
  changeKnob(deg) {
    this.rotateKnob(deg)
    this.input.value = this.value =
      ~~((this.max - this.min) * ((deg + this.halfDeg) / this.degree)) +
      (this.min < 0 ? this.min : 0)
    this.onchange && this.onchange(this.value)
  }
  rotateKnob(deg) {
    this.knob.style.transform = `rotate(${deg}deg)`
  }
  mouseUp = () => {
    this.angle = +this.knob.style.transform.replace(/[^0-9\-]/g, "")
    this.downX = this.downY = null
  }
  mouseDown = e => {
    ;[this.downX, this.downY] = [e.pageX, e.pageY]
    e.stopPropagation()
  }
  mouseMove = e => {
    if (this.downX && this.downY) {
      ;[this.moveX, this.moveY] = [e.pageX, e.pageY]
      this.distance = ~~Math.sqrt(
        (this.moveX - this.downX) ** 2 + (this.moveY - this.downY) ** 2
      )
      this.downX > this.moveX && (this.distance = -this.distance)
      this.distance += this.angle
      this.distance > this.halfDeg && (this.distance = this.halfDeg)
      this.distance < -this.halfDeg && (this.distance = -this.halfDeg)
      this.changeKnob(this.distance)
    }
  }
  calcAngle = () =>
    (this.angle = ~~(
      ((this.value - this.min) / (this.max - this.min)) * this.degree -
      this.halfDeg
    ))
  disconnectedCallback() {
    this.events.forEach(([e, action, func]) =>
      e.removeEventListener(action, func)
    )
  }
  addStyle = () => `
    .container{
      width: 50px;
    }
    .label{
      text-align: center;
      margin: 0;
      color: white;
      font-size: var(--font-size-normal);
    }
    .knob{
      display: block;
      position: relative;
      background: #3b3b3b;
      height: 40px;
      width: 40px;
      margin: 5px auto;
      border: solid 2px #424242;
      border-radius: 50%;
    }
    .knob::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 10px;
      width: 2px;
      background: white;
    }
    input[type=number]{
      width: 50px;
      color: white;
      background: #3b3b3b;
      font-size: var(--font-size-normal);
    }
  `
}
customElements.define("input-knob", InputKnob)
