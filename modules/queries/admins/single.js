import { prismaConnection } from "../../../libs/connection/index.js";
import { comparePassword } from "../../../libs/bcrypt/index.js";
import { signToken } from "../../../libs/jwt/index.js";

export const adminLogin = async (email, password) => {
  try {
    const admin = await prismaConnection.admins.findUnique({
      where: { email },
    });
    const compare = comparePassword(password, admin.password);
    if (!compare) throw new Error("error admin login password");
    const dataToken = {
      id: admin.id,
      email: admin.email,
    };
    const token = signToken(dataToken);
    return token;
  } catch (err) {
    console.error("error admin login =>> ", err);
    throw new Error("error admin login");
  }
};

export const adminDetail = async (id, email) => {
  try {
    return await prismaConnection.admins.findUnique({
      where: { id, email },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  } catch (err) {
    console.error("error get detail admin =>> ", err);
    throw new Error("error get detail admin");
  }
};
