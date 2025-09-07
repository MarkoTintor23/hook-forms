export const emailValidator = {
  required: true,
  validate: {
    trimCheck: (value) =>
      value.trim().length > 0 || "Email ne sme sadržati samo razmake",
    simpleCheck: (value) =>
      (value.includes("@") && value.includes(".")) || "Unesite ispravan email",
  },
};
