import {
  r as a,
  h as r,
  H as o
} from "./p-d2d572ae.js";
const e = class {
  constructor(r) {
      a(this, r), this.classes = ""
  }
  onKeyDown(a) {
      const {
          key: r
      } = a;
      ("Enter" === r || " " === r) && this.handleClick(a)
  }
  render() {
      const {
          classes: a,
          handleClick: o
      } = this;
      return r("div", {
          class: `card ${a} ${o?"card--clickable":""}`,
          tabIndex: o ? 0 : null,
          role: o ? "button" : null,
          onClick: o,
          onKeyDown: o && (a => this.onKeyDown(a))
      }, r("div", {
          class: "card__header"
      }, r("slot", {
          name: "card-header"
      })), r("div", {
          class: "card__content"
      }, r("slot", {
          name: "card-content"
      })), r("div", {
          class: "card__footer"
      }, r("slot", {
          name: "card-footer"
      })))
  }
};
e.style = ".card.sc-d4l-card{border-radius:var(--border-radius-medium)}.card--sharp-corners.sc-d4l-card{border-radius:0}.card--box-shadow.sc-d4l-card{-webkit-box-shadow:var(--shadow-soft);box-shadow:var(--shadow-soft);background:#fff}.card--text-center.sc-d4l-card{text-align:center}.card--clickable.sc-d4l-card{cursor:pointer;padding:1em 1.5em;-webkit-transition:-webkit-box-shadow 0.2s;transition:-webkit-box-shadow 0.2s;transition:box-shadow 0.2s;transition:box-shadow 0.2s, -webkit-box-shadow 0.2s}.card--clickable.sc-d4l-card:focus,.card--clickable.sc-d4l-card:hover{outline:none;-webkit-box-shadow:var(--shadow-medium);box-shadow:var(--shadow-medium)}.card.card--no-padding.sc-d4l-card{padding:0}.card--overflow-hidden.sc-d4l-card{overflow:hidden}@media screen and (min-width: 768px){.card.sc-d4l-card{padding:1em 1.5em 1.75em;background-color:#fff;-webkit-box-shadow:var(--shadow-soft);box-shadow:var(--shadow-soft)}}";
const d = class {
  constructor(r) {
      a(this, r), this.classes = ""
  }
  render() {
      return r(o, {
          "aria-hidden": "true",
          role: "presentation"
      }, r("svg", {
          class: `icon ${this.classes}`,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24"
      }, r("g", {
          fill: "none",
          "fill-rule": "evenodd"
      }, r("path", {
          d: "M0 0h24v24H0z"
      }), r("path", {
          fill: "currentColor",
          d: "M20 11v2H7.8l5.6 5.6L12 20l-8-8 8-8 1.4 1.4L7.8 11H20z"
      }))))
  }
};
d.style = ".icon{display:block;width:48px;height:48px;color:var(--c-primary);fill:currentColor}.icon__primary-color{fill:var(--c-primary)}.icon__secondary-color{fill:var(--c-secondary)}.icon--small{width:24px;height:24px}.icon--extra-small{width:18px;height:18px}.icon--current-color{fill:currentColor}";
const s = class {
  constructor(r) {
      a(this, r), this.classes = "", this.headline = "", this.hasBackButton = !0
  }
  render() {
      const {
          headline: a,
          classes: o,
          handleClick: e,
          hasBackButton: d
      } = this;
      return r("div", {
          class: `navigation-header ${o}`
      }, e && d && r("button", {
          "data-test": "navBack",
          type: "button",
          class: "u-button-reset",
          onClick: e
      }, r("d4l-icon-arrow-back", {
          classes: "icon--small"
      })), r("h2", null, a))
  }
};
s.style = ".navigation-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 1em 0.75em}.navigation-header h2{margin:0;font-size:1.25em;font-weight:600;margin-left:0.5em;padding:0.5em 0;text-align:left}.navigation-header>button{color:var(--c-gray);padding:1em 1em 1em 0.5em}.navigation-header svg.icon{color:var(--c-gray)}.navigation-header--border-bottom{border-bottom:1px solid var(--c-gray-lightest)}";
export {
  e as d4l_card, d as d4l_icon_arrow_back, s as ia_navigation_header
}