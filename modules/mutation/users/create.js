import { prismaConnection } from "../../../libs/connection/index.js";
import { encryptPassword } from "../../../libs/bcrypt/index.js";

export const userRegister = async (email, password) => {
  try {
    const encrypt = encryptPassword(password);
    return await prismaConnection.users.create({
      data: {
        email,
        password: encrypt,
      },
      select: {
        email: true,
      },
    });
  } catch (err) {
    console.error("error register user =>> ", err);
    throw new Error("error register user");
  }
};
