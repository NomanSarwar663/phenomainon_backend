const {router} = require("../app")
const authController = require("../controllers/auth.controller")
const { requireSignin } = require('../middleware/authorization');

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/verify-email", authController.verifyEmail);
router.patch("/change-password",requireSignin, authController.changePassword);
router.post("/forgot-password", authController.forgotPassword);
router.patch("/reset-password", authController.resetPassword);
router.patch("/user-plan",requireSignin, authController.userPlan);

module.exports = router
