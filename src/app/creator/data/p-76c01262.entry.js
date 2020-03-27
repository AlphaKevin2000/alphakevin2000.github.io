import {
  r as t,
  h as a
} from "./p-d2d572ae.js";
import {
  a as r
} from "./p-d088ed5f.js";
import {
  L as e,
  R as s
} from "./p-3685b386.js";
import {
  v as n,
  Q as o
} from "./p-23e84e3c.js";
const i = {
      DEFAULT: {
          buttonKey: "button_start_now",
          route: s.DISCLAIMER
      },
      STARTED: {
          buttonKey: "button_continue",
          route: s.QUESTIONNAIRE
      },
      COMPLETED: {
          buttonKey: "button_show_code",
          route: s.QR_CODE
      }
  },
  l = class {
      constructor(a) {
          t(this, a), this.started = !1, this.completed = !1, this.componentWillLoad = () => {
              n.match() || n.reset();
              const t = JSON.parse(localStorage.getItem(e.ANSWERS));
              if (t) {
                  const a = Object.keys(t);
                  this.started = a.length > 0;
                  const r = o.findIndex(t => t.id === a[a.length - 1]);
                  this.completed = r == o.length - 1
              }
          }, this.deleteQRCode = () => {
              n.reset(), this.completed = !1, this.started = !1
          }
      }
      changedLanguageHandler(t) {
          this.language = t.detail.code
      }
      get currentLanguage() {
          return this.language || "en"
      }
      get getState() {
          return this.completed ? "COMPLETED" : this.started ? "STARTED" : "DEFAULT"
      }
      render() {
          return a("div", {
              class: "c-card-wrapper start"
          }, a("d4l-card", {
              classes: "card--text-center"
          }, a("div", {
              slot: "card-header"
          }, a("div", {
              class: "start__logo-container"
          }, a("ia-logo-charite", null), a("ia-logo-d4l", null)), a("h2", {
              class: "start__headline-2 u-text-align--left"
          }, r.t("start_headline"))), a("div", {
              class: "start__content u-text-align--left",
              slot: "card-content"
          }, a("ul", {
              class: "u-no-margin-top u-padding-bottom--normal"
          }, a("li", null, r.t("start_paragraph_1_option_1")), a("li", null, r.t("start_paragraph_1_option_2")), a("li", null, r.t("start_paragraph_1_option_3")), a("li", null, r.t("start_paragraph_1_option_4"))), this.completed && a("h3", null, r.t("found_code")), a("stencil-route-link", {
              "anchor-id": "d4l-button-register",
              "anchor-class": "start__next-link",
              url: i[this.getState].route
          }, a("d4l-button", {
              classes: "button--block",
              text: r.t(i[this.getState].buttonKey),
              "is-route-link": !0
          })), this.completed && a("d4l-button", {
              classes: "button--block button--tertiary",
              text: r.t("button_delete_qr_code"),
              onClick: this.deleteQRCode
          }), a("div", {
              class: "u-padding-vertical--normal",
              innerHTML: r.t("start_legal_paragraph")
          }), a("h3", {
              class: "o-headline-3"
          }, r.t("start_sub_headline_2")), a("div", {
              innerHTML: r.t("start_paragraph_2")
          }), a("h3", {
              class: "o-headline-3"
          }, r.t("start_sub_headline_3")), a("div", {
              innerHTML: r.t("start_paragraph_3")
          }), a("h3", {
              class: "o-headline-3"
          }, r.t("start_sub_headline_4")), a("div", {
              innerHTML: r.t("start_paragraph_4")
          }))))
      }
  };
l.style = ".start__headline-2{margin-bottom:0.5em}.start__content{padding-bottom:var(--padding-main)}.start__logo-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1rem}.start__logo-container>*{-ms-flex:none;flex:none;margin-bottom:1rem}.start__logo-container>*:first-child{margin-right:2rem}.start__logo-text{margin-top:0;font-size:0.6rem}.start__next-link{padding-bottom:1em;display:block}";
export {
  l as ia_start
}