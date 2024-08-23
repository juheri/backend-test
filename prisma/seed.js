import { prismaConnection } from "../libs/connection/index.js";
import { encryptPassword } from "../libs/bcrypt/index.js";

const load = async () => {
  try {
    const password = "123123";
    const encrypt = encryptPassword(password);
    await prismaConnection.admins.upsert({
      where: {
        email: "admin@gmail.com",
      },
      update: {},
      create: {
        email: "admin@gmail.com",
        name: "admin test",
        password: encrypt,
      },
    });
    console.log("create data admin success!");
  } catch (err) {
    console.error(err);
  } finally {
    await prismaConnection.$disconnect;
  }
};

load();
