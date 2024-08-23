import { userRegister } from "../../modules/mutation/users/create.js";

export const userRegisterController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userRegister(email, password);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "register success",
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "register failed, please try again",
    });
  }
};
