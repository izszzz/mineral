;(() => {
  const [a, c, s, ht, f, h, w, g, r, tp, si, st] = [
      "active",
      "click",
      "svg",
      "heart",
      "fill",
      "height",
      "width",
      "gray",
      "red",
      "transparent",
      "size",
      "stroke",
    ],
    stw = `${st}-${w}`
  class HeartBtn extends HTMLElement {
    constructor() {
      super()
      const shadow = this.attachShadow({ mode: "open" })
      ;[this[s], this.path, this.style_e] = [s, "path", "style"].map(tag =>
        document.createElementNS("http://www.w3.org/2000/" + s, tag)
      )
      ;[
        [this[s], [["viewBox", "-50,-55,200,200"]]],

        [
          this.path,
          [
            [f, tp],
            [st, g],
          ],
        ],
      ].forEach(([e, attrs]) =>
        attrs.forEach(([key, val]) => e.setAttribute(key, val))
      )
      ;[
        [this[s], [this.path]],
        [shadow, [this[s], this.style_e]],
      ].forEach(([parent, children]) =>
        children.forEach(child => parent.appendChild(child))
      )
      this.path.classList.add(ht)
      this.path.addEventListener(c, this.onClick)
      this.style_e.textContent = this.addStyle()
    }

    connectedCallback() {
      const [size = 100, stroke = r, strokeWidth = 5] = [si, st, stw].map(
        key => this.getAttribute(key) || void 0
      )

      ;[
        [stw, strokeWidth],
        ["d", this.calcHeartPath(+strokeWidth)],
      ].forEach(([key, val]) => val && this.path.setAttribute(key, val))
      this.style.cssText = h + `:${size}px;`
      this[s].style.cssText = [h, w].map(p => p + `:${size}px;`).join("")
      this.style_e.textContent += `.${ht}{transform-origin:${(
        size + "px "
      ).repeat(2)};}.${ht}:hover{${st}:${stroke};}`
    }
    disconnectedCallback() {
      this.path.removeEventListener(c, this.onClick)
    }

    calcHeartPath(w = 0) {
      const [p, m] = ["p", "m"],
        hw = w / 2,
        calcPath = (n, s) => (s === p ? n + hw : s === m ? n - hw : null),
        arc = `A ${` ${calcPath(25, m)}`.repeat(2)} 0 0 0`,
        eight = calcPath(8, p)
      return `
      M 50 ${calcPath(90, m)}
      L ${calcPath(92, m)} 50
      ${arc} 50 ${calcPath(15, p)} 
      ${arc} ${eight} 50
      L ${eight} 50
      Z
    `
    }

    onClick = () => {
      ;[this, this.path].forEach(e => e.toggleAttribute(a))
      ;[
        [f, tp],
        [st, g],
      ].forEach(([key, val]) =>
        this.path.setAttribute(
          key,
          this.hasAttribute(a) ? this.getAttribute(key) || r : val
        )
      )
    }

    addStyle = () => `
    .${ht} {
      user-select: none;
      cursor: pointer;
      transition: ${f} 0.3s ease;
    }
    .${ht}[${a}] {
      animation: hA 200ms ease;
    }
    @keyframes hA {
      ${[
        [0, 0],
        [60, 0.9],
        [80, 0.8],
        [100, 1],
      ]
        .map(([p, v]) => p + `%{transform:scale(${v});}`)
        .join("")}
    }
  `
  }
  customElements.define(ht + "-btn", HeartBtn)
})()
