import {
  r as e,
  h as t,
  c as a
} from "./p-d2d572ae.js";
import {
  a as r
} from "./p-d088ed5f.js";
const s = class {
  constructor(t) {
      e(this, t), this.classes = "", this.value = 0
  }
  componentDidLoad() {
      this.linearProgressElement.style.setProperty("--progress-percentage", `${-1*(100-this.value)}%`)
  }
  componentDidUpdate() {
      this.linearProgressElement.style.setProperty("--progress-percentage", `${-1*(100-this.value)}%`)
  }
  render() {
      const {
          classes: e,
          value: a
      } = this;
      return t("div", {
          role: "progressbar",
          "aria-valuenow": a,
          class: `linear-progress ${e}`,
          ref: e => this.linearProgressElement = e
      })
  }
};
s.style = ".linear-progress.sc-d4l-linear-progress{--progress-percentage:0;width:auto;height:5px;background-color:var(--c-gray-lightest);position:relative;overflow:hidden}.linear-progress.sc-d4l-linear-progress::after{content:'';position:absolute;top:0;left:0;right:0;height:5px;background-color:var(--c-primary);-webkit-transition:-webkit-transform 0.2s linear;transition:-webkit-transform 0.2s linear;transition:transform 0.2s linear;transition:transform 0.2s linear, -webkit-transform 0.2s linear;-webkit-transform:translateX(var(--progress-percentage));transform:translateX(var(--progress-percentage))}";
const n = class {
  constructor(t) {
      e(this, t), this.updateFormData = a(this, "updateFormData", 7)
  }
  onDateChangeHandler(e) {
      const {
          detail: {
              value: t
          }
      } = e;
      this.updateFormDataHandler(this.question.id, t.split("-").join("."))
  }
  async changedLanguageHandler(e) {
      const {
          detail: t
      } = e;
      this.language = t
  }
  updateFormDataHandler(e, t) {
      this.updateFormData.emit({
          key: e,
          value: t
      })
  }
  render() {
      return t("span", null, t("d4l-date-input", {
          label: r.t("input_date_label"),
          errorMessage: r.t("input_date_error"),
          fields: {
              day: {
                  label: `${r.t("input_date_label_day")}`,
                  placeholder: `${r.t("input_date_placeholder_day")}`
              },
              month: {
                  label: `${r.t("input_date_label_month")}`,
                  placeholder: `${r.t("input_date_placeholder_month")}`
              },
              year: {
                  label: `${r.t("input_date_label_year")}`,
                  placeholder: `${r.t("input_date_placeholder_year")}`
              }
          },
          futureAllowed: !1
      }), t("div", {
          class: "input-date__help"
      }, r.t("input_date_help")))
  }
};
n.style = ".input-date__help{font-size:12px;margin:10px 0}d4l-input .input__element.sc-d4l-input{color:var(--c-gray)}";
const i = class {
  constructor(t) {
      e(this, t), this.updateFormData = a(this, "updateFormData", 7)
  }
  async changedLanguageHandler(e) {
      const {
          detail: t
      } = e;
      this.language = t
  }
  updateFormDataHandler(e, t) {
      this.updateFormData.emit({
          key: e,
          value: t
      })
  }
  render() {
      const {
          question: e,
          currentSelection: a
      } = this, s = (e, t) => {
          const {
              type: a
          } = e, r = e.target;
          if ("click" === a && null !== t) {
              const e = document.querySelector(`#${t}`);
              this.updateFormDataHandler(e.name, e.value)
          } else this.updateFormDataHandler(r.name, r.value)
      };
      return t("span", null, e.options.map((n, i) => "" !== n && t("p", null, t("d4l-radio", {
          "radio-id": `${e.id}-option${i}`,
          name: e.id,
          value: i.toString(),
          checked: a === i.toString(),
          required: !0,
          handleChange: e => s(e, null),
          onClick: t => s(t, `${e.id}-option${i}`)
      }, t("div", {
          slot: "radio-label"
      }, t("strong", null, r.t(n)))))))
  }
};
i.style = ":host{display:block}";
export {
  s as d4l_linear_progress, n as ia_input_date, i as ia_input_radio
}