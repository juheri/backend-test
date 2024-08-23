import { prismaConnection } from "../../../libs/connection/index.js";
const DATA_PER_PAGE = 10;

export const getUsers = async (page) => {
  try {
    const total = await prismaConnection.users.count();
    const users = await prismaConnection.users.findMany({
      select: {
        id: true,
        position: true,
        name: true,
        birthday: true,
      },
      orderBy: [{ created_at: "desc" }],
      skip: (Number(page) - 1) * DATA_PER_PAGE,
      take: DATA_PER_PAGE,
    });
    return {
      total,
      users,
    };
  } catch (err) {
    console.error("error get users =>> ", err);
    throw new Error("error get users");
  }
};
