import { getUsers } from "../../modules/queries/users/multiple.js";
import { userDetail } from "../../modules/queries/users/single.js";

export const getUserController = async (req, res) => {
  try {
    const { page } = req.query;
    const result = await getUsers(page);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "get data users success",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "can't get data",
    });
  }
};

export const getUserDetailController = async (req, res) => {
  try {
    const { user_id } = req.params;
    const result = await userDetail(Number(user_id));
    return res.status(200).json({
      status: 200,
      success: true,
      message: "get detail user success",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "can't get data",
    });
  }
};
