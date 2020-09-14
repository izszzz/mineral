random = (max, min) => ~~(Math.random() * (max - min) + min)
class Background1 extends HTMLElement {
  constructor() {
    super()
    this.height = this.width = this.polygons = null
    const shadow = this.attachShadow({ mode: "open" })
    ;[this.style_e, this.div, this.canvas] = [
      "style",
      "div",
      "canvas",
    ].map(tag => document.createElement(tag))
    ;[
      [this.div, [this.canvas]],
      [shadow, [this.div, this.style_e]],
    ].forEach(([parent, children]) =>
      children.forEach(child => parent.appendChild(child))
    )
    this.ctx = this.canvas.getContext("2d")
    this.style_e.textContent = this.style()
    window.addEventListener("resize", this.resize)
  }

  connectedCallback() {
    const [number = 100, colors = "red,blue,green", height, width] = [
      "number",
      "colors",
      "height",
      "width",
    ].map(key => this.getAttribute(key))
    if (height && width) {
      ;[this.height, this.width] = [height, width]
      this.style_e.textContent = `
        div {
          width: ${this.width + "px"};
          height: ${this.height + "px"};
        }
      `
    } else {
      ;({
        height: this.height,
        width: this.width,
      } = this.div.getBoundingClientRect())
    }
    this.resize()
    this.polygons = [...Array(+number)].map(
      () => new Polygon(this.ctx, this.height, this.width, colors)
    )
    requestAnimationFrame(this.animate)
  }

  resize = () => {
    ;["height", "width"].forEach(scale => (this.canvas[scale] = this[scale]))
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.polygons.forEach(polygon => {
      polygon.draw()
      polygon.update()
    })
    requestAnimationFrame(this.animate)
  }

  style = () => `
    div{
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
    }
    canvas{
      margin: 0;
      padding: 0;
    }
  `
}

class Polygon {
  constructor(ctx, winH, winW, colors) {
    this.x = Math.floor(random(winW, 0))
    this.y = this.winH = winH
    this.winW = winW
    this.scale = random(50, 3)
    this.velocity = random(5, 1, -1) + random(10, 0) / 10
    this.ctx = ctx
    this.color = colors.split(",")[random(colors.length, 0)]
  }
  draw() {
    this.ctx.beginPath()
    this.ctx.strokeStyle = this.color
    this.ctx.strokeRect(this.x, this.y, this.scale, this.scale)
    this.ctx.closePath()
  }
  update() {
    this.y -= this.velocity
    if (this.y < 0 - this.scale) {
      this.y = this.winH
      this.x = random(this.winW, 0)
      this.velocity = random(5, 1)
    }
  }
}
customElements.define("background-1", Background1)
