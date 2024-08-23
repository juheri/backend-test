import { userDelete } from "../../modules/mutation/users/delete.js";

export const deleteUserController = async (req, res) => {
  try {
    const { user_id } = req.params;
    await userDelete(Number(user_id));
    return res.status(200).json({
      status: 200,
      success: true,
      message: "delete user success",
    });
  } catch (err) {
    console.log("error delete =>> ", err);
    return res.status(400).json({
      status: 400,
      success: false,
      message: "can't delete data",
    });
  }
};
