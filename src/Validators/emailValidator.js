export const emailValidator = {
  required: true,
  validate: {
    trimCheck: (value) =>
      (value.trim().length > 0 && value.trim().length) >= 10 ||
      "Email ne sme sadržati samo razmake i mora biti minimum 10 karaktera",
    simpleCheck: (value) =>
      (value.includes("@") && value.includes(".")) || "Unesite ispravan email",
    adminCheck: (value) => {
      const blocked = ["admin@gmail.com", "test@gmail.com"];
      if (blocked.includes(value.trim())) return "Nemas pristup tom emailu";
      return true;
    },
    gmailCheck: (value) => {
      if (!value.trim().endsWith("@gmail.com"))
        return "Email mora biti @gmail.com";
      return true;
    },
  },
};
