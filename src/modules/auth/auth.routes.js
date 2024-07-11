const {Router} = require("express")
const authController = require("./auth.controller")
const Authorization = require("../../guard/authorization.guard")
const router = Router()

router.post("/send-otp", authController.SendOTP),
router.post("/check-otp", authController.CheckOTP),
router.post("/check-refresh-token", authController.checkRefreshToken);
router.get("/logout",Authorization ,authController.logout)

module.exports={
    AuthRouter: router
}