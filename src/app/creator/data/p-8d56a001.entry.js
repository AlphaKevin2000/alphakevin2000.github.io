import {
  r as t,
  h as s,
  c as e,
  H as o,
  g as n,
  d as r
} from "./p-d2d572ae.js";
import {
  A as a
} from "./p-c2c395a9.js";
import {
  m as i,
  a as c,
  s as l,
  b as h,
  c as u,
  d,
  h as p,
  e as g,
  f as b,
  g as f,
  l as m
} from "./p-1728ead7.js";
import {
  L as y,
  i as k,
  a as w
} from "./p-d088ed5f.js";
import {
  R as x
} from "./p-3685b386.js";
const _ = class {
  constructor(s) {
      t(this, s), this.appMessage = null
  }
  async changedLanguageHandler(t) {
      const {
          detail: s
      } = t;
      document.body.parentElement.setAttribute("lang", s.code), this.language = s
  }
  getLanguageByCode(t) {
      return y.find(({
          code: s
      }) => s === t)
  }
  handleAppMessage(t) {
      this.appMessage = null, setTimeout(() => {
          this.appMessage = {
              type: t.detail.type,
              text: t.detail.text
          }
      }, 0)
  }
  async componentWillLoad() {
      this.language = this.getLanguageByCode(await k)
  }
  componentDidLoad() {
      this.connectTranslationsEl.changedLanguageHandler(this.language)
  }
  render() {
      const {
          language: t,
          appMessage: e
      } = this;
      return s("connect-translations", {
          ref: t => this.connectTranslationsEl = t
      }, s("div", {
          class: `app-message ease-in-top ${e?"ease-in-top--active":""}`
      }, e && s("d4l-snack-bar", {
          type: e.type,
          "data-test": "snackBar",
          "data-test-context": e.type
      }, s("div", {
          slot: "snack-bar-icon"
      }, s("d4l-icon-info", {
          classes: "icon--small"
      })), s("div", {
          class: "app-message__content",
          slot: "snack-bar-content"
      }, e.text), s("div", {
          class: "app-message__controls",
          slot: "snack-bar-controls"
      }, s("d4l-button", {
          "data-test": "snackBarClose",
          classes: "button--text button--uppercase",
          text: "Dismiss",
          handleClick: () => this.appMessage = null
      })))), s("header", {
          class: "c-header"
      }, s("stencil-route-link", {
          url: "/",
          anchorTitle: "Home link",
          anchorClass: "u-display-block c-logo"
      }, s("h1", null, "CovApp")), s("d4l-language-switcher", {
          languages: y,
          activeLanguage: t
      })), s("main", null, s("stencil-router", null, s("stencil-route-switch", {
          scrollTopOffset: 0
      }, s("stencil-route", {
          url: "/",
          component: "ia-start",
          exact: !0
      }), s("stencil-route", {
          url: x.QUESTIONNAIRE,
          component: "ia-questionnaire"
      }), s("stencil-route", {
          url: x.QR_CODE,
          component: "ia-qr-code"
      }), s("stencil-route", {
          url: x.IMPRINT,
          component: "ia-imprint"
      }), s("stencil-route", {
          url: x.LEGAL,
          component: "ia-legal"
      }), s("stencil-route", {
          url: x.DISCLAIMER,
          component: "ia-disclaimer"
      }), s("stencil-route", {
          url: x.FAQ,
          component: "ia-faq"
      }), s("stencil-route", {
          url: x.DATA_PRIVACY,
          component: "ia-data-privacy"
      }), s("stencil-route", {
          component: "ia-start"
      })))), s("footer", {
          class: "c-footer"
      }, s("ul", {
          class: "u-list-reset"
      }, s("li", null, s("stencil-route-link", {
          anchorClass: "o-link o-link--gray",
          url: x.IMPRINT
      }, w.t("app_root_imprint_link"))), s("li", null, s("stencil-route-link", {
          anchorClass: "o-link o-link--gray",
          url: x.LEGAL
      }, w.t("app_root_legal_link"))), s("li", null, s("stencil-route-link", {
          anchorClass: "o-link o-link--gray",
          url: x.FAQ
      }, w.t("app_root_faq_link"))), s("li", null, s("stencil-route-link", {
          anchorClass: "o-link o-link--gray",
          url: x.DATA_PRIVACY
      }, w.t("app_root_data_privacy_link")))), s("p", null, "© ", (new Date).getFullYear(), " ", w.t("app_root_all_rights_reserved"))))
  }
};
_.style = ".language-switch{text-transform:uppercase}main{padding:0 var(--padding-main)}.app-message{position:fixed;top:0;left:0;right:0;-webkit-box-shadow:0 1px 4px 1px rgba(0, 0, 0, 0.15);box-shadow:0 1px 4px 1px rgba(0, 0, 0, 0.15)}.app-message__content{margin-left:1em}.app-message__controls{padding-top:1em}@media screen and (min-width: 768px){main{min-height:calc(\n      100vh - var(--header-height-desktop) - var(--footer-height-desktop)\n    );display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}.app-message__controls{padding-top:0}}";
const v = class {
      constructor(s) {
          t(this, s), this.changedLanguage = e(this, "changedLanguage", 7)
      }
      async changedLanguageHandler(t) {
          this.changedLanguage.emit(t)
      }
      async changeLanguageHandler(t) {
          const {
              detail: s
          } = t;
          w.language !== s.code && await w.changeLanguage(s.code), this.changedLanguageHandler(s)
      }
  },
  P = class {
      constructor(s) {
          t(this, s), this.id = null, this.text = "", this.classes = "", this.type = "submit", this.disabled = !1, this.isRouteLink = !1
      }
      render() {
          const {
              id: t,
              text: e,
              classes: n,
              type: r,
              disabled: a,
              isRouteLink: i,
              handleClick: c
          } = this;
          return s(o, null, i ? s("span", {
              class: `button ${n}`
          }, e) : s("button", {
              id: t,
              class: `button ${n}`,
              type: r,
              disabled: a,
              onClick: c
          }, e))
      }
  };
P.style = ".button.sc-d4l-button{padding:10px 20px;border-radius:var(--border-radius-button);border:2px solid;border-color:var(--c-primary);background-color:var(--c-primary);color:#fff;font-weight:600;font-size:15px;font-family:inherit;cursor:pointer}.button.sc-d4l-button:hover,.button.sc-d4l-button:focus{border-color:var(--c-primary-light);background-color:var(--c-primary-light)}.button.sc-d4l-button:disabled{cursor:not-allowed;background-color:var(--c-primary-extra-lightest);border-color:var(--c-primary-extra-lightest)}.button--small.sc-d4l-button{padding:7px 16px}.button--secondary.sc-d4l-button{background-color:#fff;color:var(--c-primary)}.button--secondary.sc-d4l-button:hover,.button--secondary.sc-d4l-button:focus{border-color:var(--c-primary);background-color:var(--c-gray-lightest)}.button--tertiary.sc-d4l-button{background-color:transparent;color:var(--c-primary);border-color:transparent}.button--tertiary.sc-d4l-button:hover,.button--tertiary.sc-d4l-button:focus{border-color:transparent;background-color:var(--c-gray-lightest)}.button--block.sc-d4l-button{width:100%;display:block}.button--transparent.sc-d4l-button{background-color:transparent;color:var(--c-primary)}.button--transparent.sc-d4l-button:hover,.button--transparent.sc-d4l-button:focus{color:#fff}.button--light.sc-d4l-button{background-color:#fff;color:var(--c-primary)}.button--light.sc-d4l-button:hover,.button--light.sc-d4l-button:focus{background-color:var(--c-gray-lightest)}.button--squared.sc-d4l-button{border-radius:0}.button--text.sc-d4l-button{border:0;padding:0;background-color:transparent;color:currentColor}.button--text.sc-d4l-button:hover,.button--text.sc-d4l-button:focus{background-color:transparent;text-decoration:underline}.button--uppercase.sc-d4l-button{text-transform:uppercase}span.button.sc-d4l-button{display:inline-block;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}";
const C = class {
  constructor(s) {
      t(this, s), this.classes = ""
  }
  render() {
      return s(o, {
          "aria-hidden": "true",
          role: "presentation"
      }, s("svg", {
          class: `icon ${this.classes}`,
          viewBox: "0 0 24 24",
          width: "24",
          height: "24"
      }, s("path", {
          fill: "none",
          d: "M0 0h24v24H0V0z"
      }), s("path", {
          d: "M11 7h2v2h-2zM11 11h2v6h-2z"
      }), s("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0\n              18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      })))
  }
};
C.style = ".icon{display:block;width:48px;height:48px;color:var(--c-primary);fill:currentColor}.icon__primary-color{fill:var(--c-primary)}.icon__secondary-color{fill:var(--c-secondary)}.icon--small{width:24px;height:24px}.icon--extra-small{width:18px;height:18px}.icon--current-color{fill:currentColor}";
const L = class {
  constructor(s) {
      t(this, s), this.classes = "", this.languages = [], this.changeLanguage = e(this, "changeLanguage", 7)
  }
  async changeLanguageHandler(t) {
      return this.changeLanguage.emit(t), t !== this.activeLanguage
  }
  render() {
      const {
          classes: t,
          languages: e,
          activeLanguage: o
      } = this;
      return s("nav", {
          class: `language-switcher ${t}`
      }, e.map(t => {
          const {
              text: e,
              code: n,
              label: r
          } = t, a = o === t;
          return s("div", {
              class: `language-switcher__item ${a?"language-switcher__item--active":""}`
          }, s("button", {
              class: "language-switcher__button",
              type: "button",
              onClick: s => {
                  s.preventDefault(), this.changeLanguageHandler(t)
              },
              "aria-label": r,
              "aria-current": a,
              title: r
          }, e || n))
      }))
  }
};
L.style = ".language-switcher.sc-d4l-language-switcher{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;font-weight:300;font-size:15px;color:var(--c-primary)}.language-switcher__item.sc-d4l-language-switcher{-ms-flex:none;flex:none}.language-switcher__item.sc-d4l-language-switcher+.language-switcher__item.sc-d4l-language-switcher::before{content:'\\a0/\\a0'}.language-switcher__button.sc-d4l-language-switcher{display:inline-block;background:transparent;padding:0.5em 0;border:0 none;text-transform:uppercase;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:inherit;color:inherit}.language-switcher__item--active.sc-d4l-language-switcher .language-switcher__button.sc-d4l-language-switcher{font-weight:600}";
const O = {
      error: "snack-bar--error",
      success: "snack-bar--success",
      notification: "snack-bar--notification",
      confirm: "snack-bar--confirm"
  },
  H = class {
      constructor(s) {
          t(this, s), this.classes = "", this.type = null, this.typeClass = this.type ? O[this.type] : "", this.getClasses = () => `snack-bar ${this.classes} ${this.typeClass}`
      }
      render() {
          const {
              getClasses: t
          } = this;
          return s("div", {
              class: t()
          }, s("div", {
              class: "snack-bar__content"
          }, s("slot", {
              name: "snack-bar-icon"
          }), s("slot", {
              name: "snack-bar-content"
          })), s("div", {
              class: "snack-bar__controls"
          }, s("slot", {
              name: "snack-bar-controls"
          })))
      }
  };
H.style = ".snack-bar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em;background-color:#fff;color:var(--c-primary)}.snack-bar__content{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.snack-bar__controls{margin-left:auto}.snack-bar--error{background-color:var(--c-error);color:#fff}.snack-bar--success{background-color:var(--c-primary);color:#fff}.snack-bar--notification{background-color:var(--c-primary-extra-lightest);color:var(--c-primary);font-weight:300}.snack-bar--confirm{background-color:var(--c-quaternary);color:var(--c-primary);font-weight:400}.snack-bar__controls d4l-button+d4l-button{margin-left:0.5em}@media screen and (min-width: 768px){.snack-bar{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.snack-bar__content{-ms-flex-align:center;align-items:center}}";
const j = class {
  constructor(s) {
      t(this, s), this.group = null, this.match = null, this.componentProps = {}, this.exact = !1, this.scrollOnNextRender = !1, this.previousMatch = null
  }
  computeMatch(t) {
      const s = null != this.group || null != this.el.parentElement && "stencil-route-switch" === this.el.parentElement.tagName.toLowerCase();
      if (t && !s) return this.previousMatch = this.match, this.match = i(t.pathname, {
          path: this.url,
          exact: this.exact,
          strict: !0
      })
  }
  async loadCompleted() {
      let t = {};
      this.history && this.history.location.hash ? t = {
          scrollToId: this.history.location.hash.substr(1)
      } : this.scrollTopOffset && (t = {
          scrollTopOffset: this.scrollTopOffset
      }), "function" == typeof this.componentUpdated ? this.componentUpdated(t) : this.match && !c(this.match, this.previousMatch) && this.routeViewsUpdated && this.routeViewsUpdated(t)
  }
  async componentDidUpdate() {
      await this.loadCompleted()
  }
  async componentDidLoad() {
      await this.loadCompleted()
  }
  render() {
      if (!this.match || !this.history) return null;
      const t = Object.assign({}, this.componentProps, {
          history: this.history,
          match: this.match
      });
      return this.routeRender ? this.routeRender(Object.assign({}, t, {
          component: this.component
      })) : this.component ? s(this.component, Object.assign({}, t)) : void 0
  }
  get el() {
      return n(this)
  }
  static get watchers() {
      return {
          location: ["computeMatch"]
      }
  }
};
a.injectProps(j, ["location", "history", "historyType", "routeViewsUpdated"]), j.style = "stencil-route.inactive{display:none}";
const S = (t, s, e) => e(t.confirm(s)),
  E = (t, s) => {
      const e = t[s],
          o = "__storage_test__";
      try {
          return e.setItem(o, o), e.removeItem(o), !0
      } catch (n) {
          return n instanceof DOMException && (22 === n.code || 1014 === n.code || "QuotaExceededError" === n.name || "NS_ERROR_DOM_QUOTA_REACHED" === n.name) && 0 !== e.length
      }
  },
  M = class {
      constructor(s) {
          t(this, s), this.unsubscribe = () => {}, this.activeClass = "link-active", this.exact = !1, this.strict = !0, this.custom = "a", this.match = null
      }
      componentWillLoad() {
          this.computeMatch()
      }
      computeMatch() {
          this.location && (this.match = i(this.location.pathname, {
              path: this.urlMatch || this.url,
              exact: this.exact,
              strict: this.strict
          }))
      }
      handleClick(t) {
          var s, e, o;
          if (!((s = t).metaKey || s.altKey || s.ctrlKey || s.shiftKey) && this.history && this.url && this.root) return t.preventDefault(), this.history.push((o = this.root, "/" == (e = this.url).charAt(0) && "/" == o.charAt(o.length - 1) ? o.slice(0, o.length - 1) + e : o + e))
      }
      render() {
          let t = {
              class: {
                  [this.activeClass]: null !== this.match
              },
              onClick: this.handleClick.bind(this)
          };
          return this.anchorClass && (t.class[this.anchorClass] = !0), "a" === this.custom && (t = Object.assign({}, t, {
              href: this.url,
              title: this.anchorTitle,
              role: this.anchorRole,
              tabindex: this.anchorTabIndex,
              "aria-haspopup": this.ariaHaspopup,
              id: this.anchorId,
              "aria-posinset": this.ariaPosinset,
              "aria-setsize": this.ariaSetsize,
              "aria-label": this.ariaLabel
          })), s(this.custom, Object.assign({}, t), s("slot", null))
      }
      get el() {
          return n(this)
      }
      static get watchers() {
          return {
              location: ["computeMatch"]
          }
      }
  };
a.injectProps(M, ["history", "location", "root"]);
const T = t => "STENCIL-ROUTE" === t.tagName,
  A = class {
      constructor(s) {
          t(this, s), this.group = ((1e17 * Math.random()).toString().match(/.{4}/g) || []).join("-"), this.subscribers = [], this.queue = r(this, "queue")
      }
      componentWillLoad() {
          null != this.location && this.regenerateSubscribers(this.location)
      }
      async regenerateSubscribers(t) {
          if (null == t) return;
          let s = -1;
          if (this.subscribers = Array.prototype.slice.call(this.el.children).filter(T).map((e, o) => {
                  const n = i(t.pathname, {
                      path: e.url,
                      exact: e.exact,
                      strict: !0
                  });
                  return n && -1 === s && (s = o), {
                      el: e,
                      match: n
                  }
              }), -1 === s) return;
          if (this.activeIndex === s) return void(this.subscribers[s].el.match = this.subscribers[s].match);
          this.activeIndex = s;
          const e = this.subscribers[this.activeIndex];
          this.scrollTopOffset && (e.el.scrollTopOffset = this.scrollTopOffset), e.el.group = this.group, e.el.match = e.match, e.el.componentUpdated = t => {
              this.queue.write(() => {
                  this.subscribers.forEach((t, s) => {
                      if (t.el.componentUpdated = void 0, s === this.activeIndex) return t.el.style.display = "";
                      this.scrollTopOffset && (t.el.scrollTopOffset = this.scrollTopOffset), t.el.group = this.group, t.el.match = null, t.el.style.display = "none"
                  })
              }), this.routeViewsUpdated && this.routeViewsUpdated(Object.assign({
                  scrollTopOffset: this.scrollTopOffset
              }, t))
          }
      }
      render() {
          return s("slot", null)
      }
      get el() {
          return n(this)
      }
      static get watchers() {
          return {
              location: ["regenerateSubscribers"]
          }
      }
  };
a.injectProps(A, ["location", "routeViewsUpdated"]);
const U = (t, ...s) => {
      t || console.warn(...s)
  },
  R = () => {
      let t, s = [];
      return {
          setPrompt: s => (U(null == t, "A history supports only one prompt at a time"), t = s, () => {
              t === s && (t = null)
          }),
          confirmTransitionTo: (s, e, o, n) => {
              if (null != t) {
                  const r = "function" == typeof t ? t(s, e) : t;
                  "string" == typeof r ? "function" == typeof o ? o(r, n) : (U(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), n(!0)) : n(!1 !== r)
              } else n(!0)
          },
          appendListener: t => {
              let e = !0;
              const o = (...s) => {
                  e && t(...s)
              };
              return s.push(o), () => {
                  e = !1, s = s.filter(t => t !== o)
              }
          },
          notifyListeners: (...t) => {
              s.forEach(s => s(...t))
          }
      }
  },
  z = (t, s = "scrollPositions") => {
      let e = new Map;
      const o = (s, o) => {
          if (e.set(s, o), E(t, "sessionStorage")) {
              const s = [];
              e.forEach((t, e) => {
                  s.push([e, t])
              }), t.sessionStorage.setItem("scrollPositions", JSON.stringify(s))
          }
      };
      if (E(t, "sessionStorage")) {
          const o = t.sessionStorage.getItem(s);
          e = o ? new Map(JSON.parse(o)) : e
      }
      return "scrollRestoration" in t.history && (history.scrollRestoration = "manual"), {
          set: o,
          get: t => e.get(t),
          has: t => e.has(t),
          capture: s => {
              o(s, [t.scrollX, t.scrollY])
          }
      }
  },
  q = {
      hashbang: {
          encodePath: t => "!" === t.charAt(0) ? t : "!/" + f(t),
          decodePath: t => "!" === t.charAt(0) ? t.substr(1) : t
      },
      noslash: {
          encodePath: f,
          decodePath: h
      },
      slash: {
          encodePath: h,
          decodePath: h
      }
  },
  B = (t, s) => {
      const e = 0 == t.pathname.indexOf(s) ? "/" + t.pathname.slice(s.length) : t.pathname;
      return Object.assign({}, t, {
          pathname: e
      })
  },
  D = {
      browser: (t, s = {}) => {
          let e = !1;
          const o = t.history,
              n = t.location,
              r = t.navigator,
              a = (t => {
                  const s = t.navigator.userAgent;
                  return (-1 === s.indexOf("Android 2.") && -1 === s.indexOf("Android 4.0") || -1 === s.indexOf("Mobile Safari") || -1 !== s.indexOf("Chrome") || -1 !== s.indexOf("Windows Phone")) && t.history && "pushState" in t.history
              })(t),
              i = !(-1 === r.userAgent.indexOf("Trident")),
              c = z(t),
              f = null != s.forceRefresh && s.forceRefresh,
              m = null != s.getUserConfirmation ? s.getUserConfirmation : S,
              y = null != s.keyLength ? s.keyLength : 6,
              k = s.basename ? l(h(s.basename)) : "",
              w = () => {
                  try {
                      return t.history.state || {}
                  } catch (s) {
                      return {}
                  }
              },
              x = t => {
                  t = t || {};
                  const {
                      key: s,
                      state: e
                  } = t, {
                      pathname: o,
                      search: r,
                      hash: a
                  } = n;
                  let i = o + r + a;
                  return U(!k || p(i, k), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + i + '" to begin with "' + k + '".'), k && (i = g(i, k)), u(i, e, s || d(y))
              },
              _ = R(),
              v = t => {
                  c.capture(B.location.key), Object.assign(B, t), B.location.scrollPosition = c.get(B.location.key), B.length = o.length, _.notifyListeners(B.location, B.action)
              },
              P = t => {
                  ((t, s) => void 0 === s.state && -1 === t.userAgent.indexOf("CriOS"))(r, t) || L(x(t.state))
              },
              C = () => {
                  L(x(w()))
              },
              L = t => {
                  if (e) e = !1, v();
                  else {
                      const s = "POP";
                      _.confirmTransitionTo(t, s, m, e => {
                          e ? v({
                              action: s,
                              location: t
                          }) : O(t)
                      })
                  }
              },
              O = t => {
                  let s = j.indexOf(B.location.key),
                      o = j.indexOf(t.key); - 1 === s && (s = 0), -1 === o && (o = 0);
                  const n = s - o;
                  n && (e = !0, A(n))
              },
              H = x(w());
          let j = [H.key],
              E = 0,
              M = !1;
          const T = t => k + b(t),
              A = t => {
                  o.go(t)
              },
              q = s => {
                  E += s, 1 === E ? (t.addEventListener("popstate", P), i && t.addEventListener("hashchange", C)) : 0 === E && (t.removeEventListener("popstate", P), i && t.removeEventListener("hashchange", C))
              },
              B = {
                  length: o.length,
                  action: "POP",
                  location: H,
                  createHref: T,
                  push: (t, s) => {
                      U(!("object" == typeof t && void 0 !== t.state && void 0 !== s), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                      const e = u(t, s, d(y), B.location);
                      _.confirmTransitionTo(e, "PUSH", m, t => {
                          if (!t) return;
                          const s = T(e),
                              {
                                  key: r,
                                  state: i
                              } = e;
                          if (a)
                              if (o.pushState({
                                      key: r,
                                      state: i
                                  }, "", s), f) n.href = s;
                              else {
                                  const t = j.indexOf(B.location.key),
                                      s = j.slice(0, -1 === t ? 0 : t + 1);
                                  s.push(e.key), j = s, v({
                                      action: "PUSH",
                                      location: e
                                  })
                              }
                          else U(void 0 === i, "Browser history cannot push state in browsers that do not support HTML5 history"), n.href = s
                      })
                  },
                  replace: (t, s) => {
                      U(!("object" == typeof t && void 0 !== t.state && void 0 !== s), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                      const e = u(t, s, d(y), B.location);
                      _.confirmTransitionTo(e, "REPLACE", m, t => {
                          if (!t) return;
                          const s = T(e),
                              {
                                  key: r,
                                  state: i
                              } = e;
                          if (a)
                              if (o.replaceState({
                                      key: r,
                                      state: i
                                  }, "", s), f) n.replace(s);
                              else {
                                  const t = j.indexOf(B.location.key); - 1 !== t && (j[t] = e.key), v({
                                      action: "REPLACE",
                                      location: e
                                  })
                              }
                          else U(void 0 === i, "Browser history cannot replace state in browsers that do not support HTML5 history"), n.replace(s)
                      })
                  },
                  go: A,
                  goBack: () => A(-1),
                  goForward: () => A(1),
                  block: (t = "") => {
                      const s = _.setPrompt(t);
                      return M || (q(1), M = !0), () => (M && (M = !1, q(-1)), s())
                  },
                  listen: t => {
                      const s = _.appendListener(t);
                      return q(1), () => {
                          q(-1), s()
                      }
                  },
                  win: t
              };
          return B
      },
      hash: (t, s = {}) => {
          let e = !1,
              o = null,
              n = 0,
              r = !1;
          const a = t.location,
              i = t.history,
              c = -1 === t.navigator.userAgent.indexOf("Firefox"),
              f = null != s.keyLength ? s.keyLength : 6,
              {
                  getUserConfirmation: y = S,
                  hashType: k = "slash"
              } = s,
              w = s.basename ? l(h(s.basename)) : "",
              {
                  encodePath: x,
                  decodePath: _
              } = q[k],
              v = () => {
                  const t = a.href,
                      s = t.indexOf("#");
                  return -1 === s ? "" : t.substring(s + 1)
              },
              P = t => {
                  const s = a.href.indexOf("#");
                  a.replace(a.href.slice(0, s >= 0 ? s : 0) + "#" + t)
              },
              C = () => {
                  let t = _(v());
                  return U(!w || p(t, w), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + t + '" to begin with "' + w + '".'), w && (t = g(t, w)), u(t, void 0, d(f))
              },
              L = R(),
              O = t => {
                  Object.assign($, t), $.length = i.length, L.notifyListeners($.location, $.action)
              },
              H = () => {
                  const t = v(),
                      s = x(t);
                  if (t !== s) P(s);
                  else {
                      const t = C(),
                          s = $.location;
                      if (!e && m(s, t)) return;
                      if (o === b(t)) return;
                      o = null, j(t)
                  }
              },
              j = t => {
                  if (e) e = !1, O();
                  else {
                      const s = "POP";
                      L.confirmTransitionTo(t, s, y, e => {
                          e ? O({
                              action: s,
                              location: t
                          }) : E(t)
                      })
                  }
              },
              E = t => {
                  let s = z.lastIndexOf(b($.location)),
                      o = z.lastIndexOf(b(t)); - 1 === s && (s = 0), -1 === o && (o = 0);
                  const n = s - o;
                  n && (e = !0, B(n))
              },
              M = v(),
              T = x(M);
          M !== T && P(T);
          const A = C();
          let z = [b(A)];
          const B = t => {
                  U(c, "Hash history go(n) causes a full page reload in this browser"), i.go(t)
              },
              D = (t, s) => {
                  n += s, 1 === n ? t.addEventListener("hashchange", H) : 0 === n && t.removeEventListener("hashchange", H)
              },
              $ = {
                  length: i.length,
                  action: "POP",
                  location: A,
                  createHref: t => "#" + x(w + b(t)),
                  push: (t, s) => {
                      U(void 0 === s, "Hash history cannot push state; it is ignored");
                      const e = u(t, void 0, d(f), $.location);
                      L.confirmTransitionTo(e, "PUSH", y, t => {
                          if (!t) return;
                          const s = b(e),
                              n = x(w + s);
                          if (v() !== n) {
                              o = s, (t => {
                                  a.hash = t
                              })(n);
                              const t = z.lastIndexOf(b($.location)),
                                  r = z.slice(0, -1 === t ? 0 : t + 1);
                              r.push(s), z = r, O({
                                  action: "PUSH",
                                  location: e
                              })
                          } else U(!1, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"), O()
                      })
                  },
                  replace: (t, s) => {
                      U(void 0 === s, "Hash history cannot replace state; it is ignored");
                      const e = u(t, void 0, d(f), $.location);
                      L.confirmTransitionTo(e, "REPLACE", y, t => {
                          if (!t) return;
                          const s = b(e),
                              n = x(w + s);
                          v() !== n && (o = s, P(n));
                          const r = z.indexOf(b($.location)); - 1 !== r && (z[r] = s), O({
                              action: "REPLACE",
                              location: e
                          })
                      })
                  },
                  go: B,
                  goBack: () => B(-1),
                  goForward: () => B(1),
                  block: (s = "") => {
                      const e = L.setPrompt(s);
                      return r || (D(t, 1), r = !0), () => (r && (r = !1, D(t, -1)), e())
                  },
                  listen: s => {
                      const e = L.appendListener(s);
                      return D(t, 1), () => {
                          D(t, -1), e()
                      }
                  },
                  win: t
              };
          return $
      }
  },
  $ = class {
      constructor(s) {
          t(this, s), this.root = "/", this.historyType = "browser", this.titleSuffix = "", this.routeViewsUpdated = (t = {}) => {
              if (this.history && t.scrollToId && "browser" === this.historyType) {
                  const s = this.history.win.document.getElementById(t.scrollToId);
                  if (s) return s.scrollIntoView()
              }
              this.scrollTo(t.scrollTopOffset || this.scrollTopOffset)
          }, this.isServer = r(this, "isServer"), this.queue = r(this, "queue")
      }
      componentWillLoad() {
          this.history = D[this.historyType](this.el.ownerDocument.defaultView), this.history.listen(t => {
              t = B(t, this.root), this.location = t
          }), this.location = B(this.history.location, this.root)
      }
      scrollTo(t) {
          const s = this.history;
          if (null != t && !this.isServer && s) return "POP" === s.action && Array.isArray(s.location.scrollPosition) ? this.queue.write(() => {
              s && s.location && Array.isArray(s.location.scrollPosition) && s.win.scrollTo(s.location.scrollPosition[0], s.location.scrollPosition[1])
          }) : this.queue.write(() => {
              s.win.scrollTo(0, t)
          })
      }
      render() {
          if (this.location && this.history) return s(a.Provider, {
              state: {
                  historyType: this.historyType,
                  location: this.location,
                  titleSuffix: this.titleSuffix,
                  root: this.root,
                  history: this.history,
                  routeViewsUpdated: this.routeViewsUpdated
              }
          }, s("slot", null))
      }
      get el() {
          return n(this)
      }
  };
export {
  _ as app_root, v as connect_translations, P as d4l_button, C as d4l_icon_info, L as d4l_language_switcher, H as d4l_snack_bar, j as stencil_route, M as stencil_route_link, A as stencil_route_switch, $ as stencil_router
}