import { verifyToken } from "../../libs/jwt/index.js";
import { userVerifyToken } from "../../modules/queries/users/single.js";

export const verifyUserController = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const bearer = authorization.split(" ")[1];
    const resultToken = await verifyToken(bearer);
    console.log("RESULT TOKEN =>>> ", resultToken);
    const dataUser = await userVerifyToken(resultToken?.id, resultToken?.email);
    req.dataUserMiddleware = dataUser;
    next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      success: false,
      message: "access denied",
    });
  }
};
