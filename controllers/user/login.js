import { userLogin } from "../../modules/queries/users/single.js";

export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userLogin(email, password);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "login success",
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "login failed, your data is wrong",
    });
  }
};
