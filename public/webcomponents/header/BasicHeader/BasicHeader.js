class BasicHeader extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" }),
      [
        header,
        wrapper,
        menuBarWrapper,
        menuBar,
        nav,
        ulSlot,
        logoSlot,
        style,
      ] = [
        "header",
        ...Array(3).fill("div"),
        "nav",
        "slot",
        "slot",
        "style",
      ].map(tag => document.createElement(tag))
    ;[
      [ulSlot, "ul"],
      [logoSlot, "logo"],
    ].forEach(([e, val]) => e.setAttribute("name", val))
    ;[
      [menuBarWrapper, [menuBar]],
      [nav, [ulSlot, menuBarWrapper]],
      [wrapper, [logoSlot, nav]],
      [header, [wrapper]],
      [shadow, [header, style]],
    ].forEach(([parent, children]) =>
      children.forEach(child => parent.appendChild(child))
    )
    ;[
      [menuBar, "menu-bar"],
      [menuBarWrapper, "menu-bar-wrapper"],
      [wrapper, "wrapper"],
    ].forEach(([e, val]) => e.classList.add(val))
    menuBarWrapper.addEventListener("click", this.menuBarClick)
    style.textContent = this.addStyle()
    this.style_e = style
  }

  connectedCallback() {
    const [bg = "white", navBg = "rgba(0,0,0,0.8)"] = ["bg"].map(
      k => this.getAttribute(k) || void 0
    )
    this.style_e.textContent += `header{background: ${bg};}nav[active] slot{background: ${navBg}}`
  }

  menuBarClick = e => e.currentTarget.closest("nav").toggleAttribute("active")

  addStyle = () => {
    const f = "display:flex;",
      a = "align-items:center;",
      fj = f + "justify-content:space-between;",
      fa = f + a,
      fja = fj + a,
      tf = "transform",
      bg = "background",
      mb = ".menu-bar",
      na = "nav[active] ",
      mp = ["before", "after"].map(p => mb + "::" + p),
      set_tY_rZ = (tY, rZ) => tf + `: translateY(${tY}) rotateZ(${rZ})`
    return `
    header{
      position: relative;
    }
    .wrapper{
      ${fja}
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }
    nav{${fa}}
    ${mb}-wrapper{
      user-select: none;
      display: none;
      position: relative;
      height: 20px;
      width: 28px;
      cursor: pointer;
    }
    ${[mb, mp]}{
      height: 4px;
      ${bg}: black;
      border-radius: 3px;
      transition:${[bg, tf].map(p => p + " 0.2s ease")};
    }
    ${mp}{
      content: "";
      display: block;
      position: absolute;
      width: 100%;
    }
    ${mb}{${bg}: black;}
    ${[
      ...["-50%", "0"].map((s, i) => [mp[i], s, 0]),
      ...[45, -45].map((n, i) => [na + mp[i], "-50%", n]),
    ]
      .map(([e, ty, ry]) => e + `{${set_tY_rZ(ty, ry + "deg")}}`)
      .join("")}
    ${mp[1]}{bottom: 0;}
    ${na + [mp[1], mp[0]]}{
      top: 50%;
    }
    ${na + mb}{
      ${bg}: transparent;
    }
    ::slotted([slot=ul]){
      ${fja}
      gap: 30px;
    }
    @media screen and (max-width: 480px){
      nav slot{
        display: block;
        position: absolute;
        z-index: 1;
        top: 100%;
        left: 0;
        right: 0;
        width: 100vw;
        color: transparent;
        opacity: 0.5;
        ${tf}-origin: top center;
        ${tf}: scaleY(0);
        transition: ${[tf, "visibility", bg].map(s => s + " 0.2s ease")};
      }
      ${na}slot{
        visibility: visible;
        color: white;
        transform: scaleY(1);
      }
      ::slotted([slot=ul]){
        flex-direction: column;
      }
      nav ${mb}-wrapper{
        display: block;
      }
    }
  `
  }
}
customElements.define("basic-header", BasicHeader)
