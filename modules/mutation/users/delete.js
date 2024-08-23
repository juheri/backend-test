import { prismaConnection } from "../../../libs/connection/index.js";

export const userDelete = async (id) => {
  try {
    await prismaConnection.courses.deleteMany({ where: { user_id: id } });
    await prismaConnection.educations.deleteMany({ where: { user_id: id } });
    await prismaConnection.employment_histories.deleteMany({
      where: { user_id: id },
    });
    return await prismaConnection.users.delete({ where: { id } });
  } catch (err) {
    console.error("error delete user =>> ", err);
    throw new Error("error delete user");
  }
};
