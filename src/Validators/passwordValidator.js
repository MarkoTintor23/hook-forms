export const passwordValidator = {
  required: true,
  validate: {
    trimCheck: (value) => value.trim() !== "" || "unesite ispravnu lozinku",
    trim2Check: (value) =>
      (value.trim().length >= 3 && value.trim().length <= 10) ||
      "lozinka mora biti izmedju 3 i 10 karaktera",
    specialCharacterCheck: (value) => {
      const characters = ["!", "@", "#", "$", "&"];
      const hasSpecial = characters.some((char) => value.includes(char));
      if (!hasSpecial) {
        return "Lozinka mora imati bar jedan specijalan karakter (!,@,#,$,&)";
      }
      return true;
    },
    blockedPw: (value) =>
      (value.trim() !== "admin" && value.trim() !== "123456") ||
      "ne moze lozinka biti admin ili 123456",
  },
};
