import { verifyToken } from "../../libs/jwt/index.js";
import { adminDetail } from "../../modules/queries/admins/single.js";

export const verifyAdminController = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const bearer = authorization.split(" ")[1];
    const resultToken = await verifyToken(bearer);
    const dataAdmin = await adminDetail(resultToken?.id, resultToken?.email);
    req.dataAdminMiddleware = dataAdmin;
    next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      success: false,
      message: "access denied",
    });
  }
};
