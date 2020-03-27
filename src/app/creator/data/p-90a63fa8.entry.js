import {
  r,
  h as t
} from "./p-d2d572ae.js";
import {
  a as e
} from "./p-d088ed5f.js";
import {
  R as a
} from "./p-3685b386.js";
const s = class {
  constructor(t) {
      r(this, t)
  }
  changedLanguageHandler(r) {
      this.language = r.detail.code
  }
  get currentLanguage() {
      return this.language || "en"
  }
  render() {
      return t("div", {
          class: "c-card-wrapper disclaimer"
      }, t("d4l-card", {
          classes: "card--text-center"
      }, t("div", {
          slot: "card-header"
      }, t("h2", null, e.t("disclaimer_headline"))), t("div", {
          class: "disclaimer__content u-text-align--left u-padding-bottom--normal",
          slot: "card-content"
      }, t("p", {
          innerHTML: e.t("disclaimer_paragraph_1")
      })), t("div", {
          class: "disclaimer__footer",
          slot: "card-footer"
      }, t("stencil-route-link", {
          "anchor-id": "d4l-button-register",
          url: a.QUESTIONNAIRE
      }, t("d4l-button", {
          classes: "button--block",
          text: e.t("button_continue"),
          "is-route-link": !0
      })))))
  }
};
export {
  s as ia_disclaimer
}