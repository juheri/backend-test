import { Router } from "express";
import { verifyAdminController } from "../controllers/auth/admin.js";
import { adminLoginController } from "../controllers/admin/login.js";
import { updateUserController } from "../controllers/admin/userUpdate.js";
import { deleteUserController } from "../controllers/admin/userDelete.js";
import {
  getUserController,
  getUserDetailController,
} from "../controllers/admin/user.js";

// validators
import { tokenValidator } from "../validators/auth/token.js";
import { loginValidator } from "../validators/admin/login.js";
import {
  usersValidator,
  userValidator,
  deleteUserValidator,
} from "../validators/admin/user.js";
import { updateUserValidator } from "../validators/admin/userUpdate.js";

const router = Router();

router.get(
  "/user",
  tokenValidator,
  verifyAdminController,
  usersValidator,
  getUserController,
);
router.get(
  "/user/:user_id",
  tokenValidator,
  verifyAdminController,
  userValidator,
  getUserDetailController,
);

router.post("/login", loginValidator, adminLoginController);

router.put(
  "/user",
  tokenValidator,
  verifyAdminController,
  updateUserValidator,
  updateUserController,
);

router.delete(
  "/user/:user_id",
  tokenValidator,
  deleteUserValidator,
  verifyAdminController,
  deleteUserController,
);

export default router;
