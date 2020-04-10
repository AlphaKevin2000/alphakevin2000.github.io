const sample = {
  catalog: [S_uuid1, S_uuid2],
  recommendations: [
  {
    uuid: S_uuid1,
    textTrue: "geh zum arzt",
    textFalse: "",
    conditions: [C_uuid1, C_uuid2],
    combinations: ["&&"]
  },
  {
    uuid: S_uuid2,
    textTrue: "Hello",
    textFalse: "World",
    conditions: [C_uuid3]
  }
  ],
  conditions: [
    {
      uuid: C_uuid1,
      logic: {
        operand: ">=",
        value: "5"
      }
    },
    {
      uuid: C_uuid2,
      logic: {
        operand: "!=",
        value: true
      }
    },
    {
      uuid: C_uuid3,
      logic: {
        operand: "==",
        value: "65"
      }
    }
  ]
}