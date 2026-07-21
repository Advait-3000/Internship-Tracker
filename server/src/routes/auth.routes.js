import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authLimiter } from "../middlewares/rateLimiter.middleware.js";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", authLimiter, AuthController.login);
router.post("/refresh-token", AuthController.refreshTokens);

// Secured routes
router.post("/logout", verifyJWT, AuthController.logout);
router.post("/logout-all", verifyJWT, AuthController.logoutAll);

export default router;