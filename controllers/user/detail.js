import { userDetail } from "../../modules/queries/users/single.js";

export const userDetailController = async (req, res) => {
  try {
    const { id } = req.dataUserMiddleware;
    const user = await userDetail(id);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "success get data user",
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "can't get data user",
    });
  }
};
