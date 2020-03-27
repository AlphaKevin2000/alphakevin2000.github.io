/* class n {
  constructor(t, e = null, o = null) {
      this.category = t, this.min = e, this.max = o
  }
  evaluate(t) {
      const e = !!t[this.category];
      if (null !== this.min) {
          if (!e) return !1;
          if (t[this.category] < this.min) return !1
      }
      return !(null !== this.max && e && t[this.category] > this.max)
  }
} */

export const _ = {
  PERSONAL: "personalInfo",
  CONTACT: "contact",
  SYMPTOMS: "symptoms",
  RESPIRATORY_SYMPTOMS: "respiratorySymptoms",
  ILLNESS: "illnesses",
  MEDICATION: "medication"
}

export const QUESTIONNAIRE_ORDER = [{
  id: "A",
  category: _.PERSONAL,
  text: "q_A_text",
  inputType: "radio",
  options: ["q_A_option0", "q_A_option1", "q_A_option2", "q_A_option3", "q_A_option4", "q_A_option5"],
  nextQuestionMap: ["B", "B", "B", "P1", "B", "B"]
}, {
  id: "P1",
  category: _.PERSONAL,
  text: "q_P1_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"]
}, {
  id: "B",
  category: _.PERSONAL,
  text: "q_B_text",
  inputType: "radio",
  options: ["q_B_option0", "q_B_option1"]
}, {
  id: "P3",
  category: _.PERSONAL,
  comment: "q_P3_comment",
  text: "q_P3_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"]
}, {
  id: "C",
  category: _.PERSONAL,
  text: "q_C_text",
  inputType: "radio",
  options: ["q_C_option0", "q_C_option1", "q_C_option2"]
}, {
  id: "D",
  category: _.PERSONAL,
  text: "q_D_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"]
}, {
  id: "Q",
  category: _.CONTACT,
  comment: "q_Q_comment",
  text: "q_Q_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  nextQuestionMap: ["B8", "T"],
  scoreMap: [1, 0]
}, {
  id: "B8",
  category: _.CONTACT,
  text: "q_B8_text",
  inputType: "date"
}, {
  id: "T",
  category: _.SYMPTOMS,
  comment: null,
  text: "q_T_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  nextQuestionMap: ["V", "U"],
  scoreMap: [1, 0]
}, {
  id: "U",
  category: _.SYMPTOMS,
  comment: null,
  text: "q_U_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  nextQuestionMap: ["V", "W"],
  scoreMap: [1, 0]
}, {
  id: "V",
  category: _.SYMPTOMS,
  comment: null,
  text: "q_V_text",
  inputType: "radio",
  options: ["", "q_V_option1", "q_V_option2", "q_V_option3", "q_V_option4", "q_V_option5", "q_V_option6", "q_V_option7"]
}, {
  id: "W",
  category: _.SYMPTOMS,
  text: "q_W_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "X",
  category: _.SYMPTOMS,
  text: "q_X_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "Y",
  category: _.SYMPTOMS,
  text: "q_Y_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "Z",
  category: _.RESPIRATORY_SYMPTOMS,
  comment: "q_Z_comment",
  text: "q_Z_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "A0",
  category: _.RESPIRATORY_SYMPTOMS,
  comment: "q_A0_comment",
  text: "q_A0_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "A1",
  category: _.SYMPTOMS,
  comment: "q_A1_comment",
  text: "q_A1_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "A2",
  category: _.RESPIRATORY_SYMPTOMS,
  text: "q_A2_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "A3",
  category: _.SYMPTOMS,
  text: "q_A3_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "B7",
  category: _.RESPIRATORY_SYMPTOMS,
  comment: "q_B7_comment",
  text: "q_B7_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"],
  scoreMap: [1, 0]
}, {
  id: "B9",
  category: _.SYMPTOMS,
  text: "q_B9_text",
  inputType: "date"/* ,
  guard: new class {
      constructor(t) {
          this.conditions = t
      }
      evaluate(t) {
          for (const e of this.conditions)
              if (e.evaluate(t)) return !0;
          return !1
      }
  }([new n(_.SYMPTOMS, 1, null), new n(_.RESPIRATORY_SYMPTOMS, 1, null)]) */
}, {
  id: "A5",
  category: _.ILLNESS,
  text: "q_A5_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no", "answer_unknown"]
}, {
  id: "A6",
  category: _.ILLNESS,
  text: "q_A6_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no", "answer_unknown"]
}, {
  id: "A7",
  category: _.ILLNESS,
  text: "q_A7_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no", "answer_unknown"]
}, {
  id: "A8",
  category: _.ILLNESS,
  text: "q_A8_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no", "answer_unknown"]
}, {
  id: "A9",
  category: _.PERSONAL,
  text: "q_A9_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no", "answer_unknown"]
}, {
  id: "B0",
  category: _.MEDICATION,
  text: "q_B0_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no", "answer_unknown"]
}, {
  id: "B1",
  category: _.MEDICATION,
  comment: "q_B1_comment",
  text: "q_B1_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no", "answer_unknown"]
}, {
  id: "B2",
  category: _.MEDICATION,
  text: "q_B2_text",
  inputType: "radio",
  options: ["answer_yes", "answer_no"]
}]