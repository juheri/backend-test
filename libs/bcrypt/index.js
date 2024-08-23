import { genSaltSync, hashSync, compareSync } from "bcrypt";

export const encryptPassword = (password) => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};

export const comparePassword = (password, dbPassword) => {
  return compareSync(password, dbPassword);
};
