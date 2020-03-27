import {
  r as i,
  h as r
} from "./p-d2d572ae.js";
const a = class {
  constructor(r) {
      i(this, r), this.radioId = "", this.classes = "", this.name = "", this.checked = !1, this.disabled = !1, this.required = !1, this.requiredText = "", this.error = !1, this.label = "", this.size = 23, this.value = ""
  }
  componentDidLoad() {
      this.radioElement.style.setProperty("--size", this.size.toString())
  }
  render() {
      const {
          radioId: i,
          classes: a,
          name: e,
          checked: d,
          disabled: l,
          label: o,
          error: t,
          required: s,
          requiredText: c,
          handleChange: p,
          value: n
      } = this;
      return r("div", {
          class: `radio ${a}`,
          ref: i => this.radioElement = i
      }, r("input", {
          id: i,
          type: "radio",
          name: e,
          checked: d,
          disabled: l,
          required: s,
          "aria-invalid": t.toString(),
          onChange: p,
          value: n
      }), r("label", {
          htmlFor: i
      }, o, r("slot", {
          name: "radio-label"
      }), s && c))
  }
};
a.style = ".radio.sc-d4l-radio{--size:23}input[type='radio'].sc-d4l-radio{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);opacity:0}input[type='radio'].sc-d4l-radio+label.sc-d4l-radio{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:start;align-items:flex-start;color:var(--c-gray);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input[type='radio'].sc-d4l-radio+label.sc-d4l-radio::before{content:'';position:relative;display:inline-block;margin-right:1em;width:calc(var(--size) * 1px);height:calc(var(--size) * 1px);background:white;border:2px solid var(--c-primary);border-radius:100%;-ms-flex-negative:0;flex-shrink:0}input[type='radio'].sc-d4l-radio:checked+label.sc-d4l-radio::after{content:'';position:absolute;top:calc(var(--size) * 0.21 * 1px);left:calc(var(--size) * 0.21 * 1px);height:calc(var(--size) * 0.58 * 1px);width:calc(var(--size) * 0.58 * 1px);border-radius:100%;background-color:var(--c-primary)}input[type='radio'].sc-d4l-radio:focus+label.sc-d4l-radio::before{-webkit-box-shadow:0 0 4px var(--c-primary-light);box-shadow:0 0 4px var(--c-primary-light)}input[type='radio'].sc-d4l-radio:disabled+label.sc-d4l-radio::before,input[type='radio'].sc-d4l-radio:disabled+label.sc-d4l-radio::after{border-color:var(--c-gray-light)}input[type='radio'].sc-d4l-radio:disabled+label.sc-d4l-radio{color:var(--c-gray-light)}input[type='radio'][aria-invalid='true'].sc-d4l-radio+label.sc-d4l-radio{color:var(--c-error)}input[type='radio'][aria-invalid='true'].sc-d4l-radio+label.sc-d4l-radio::before,input[type='radio'][aria-invalid='true'].sc-d4l-radio+label.sc-d4l-radio::after{border-color:var(--c-error)}";
export {
  a as d4l_radio
}