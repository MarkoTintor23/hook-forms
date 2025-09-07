export const passwordValidator = {
  required: true,
  validate: {
    trimCheck: (value) => value.trim() !== "" || "unesite ispravnu lozinku",
  },
};
