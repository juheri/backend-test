import { Router } from "express";
// controllers
import { verifyUserController } from "../controllers/auth/user.js";
import { userRegisterController } from "../controllers/user/register.js";
import { userLoginController } from "../controllers/user/login.js";
import { userDetailController } from "../controllers/user/detail.js";
import { userApplyController } from "../controllers/user/apply.js";
// validators
import { registerValidator } from "../validators/user/register.js";
import { loginValidator } from "../validators/user/login.js";
import { tokenValidator } from "../validators/auth/token.js";
import { applyValidator } from "../validators/user/apply.js";

const router = Router();

router.get(
  "/detail",
  tokenValidator,
  verifyUserController,
  userDetailController,
);

router.post("/login", loginValidator, userLoginController);
router.post("/register", registerValidator, userRegisterController);

router.put(
  "/apply",
  applyValidator,
  tokenValidator,
  verifyUserController,
  userApplyController,
);

export default router;
