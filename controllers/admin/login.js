import { adminLogin } from "../../modules/queries/admins/single.js";

export const adminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await adminLogin(email, password);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "login success",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "login failed, your data is wrong",
    });
  }
};
