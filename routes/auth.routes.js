require('../helpers/fb_google')
const {router} = require("../app")
const passport = require("passport");
const authController = require("../controllers/auth.controller")
const { requireSignin } = require('../middleware/authorization');

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/verify-email", authController.verifyEmail);
router.patch("/change-password",requireSignin, authController.changePassword);
router.post("/forgot-password", authController.forgotPassword);
router.post("/verify-reset-user", authController.verifyResetUser);
router.patch("/reset-password", authController.resetPassword);
router.get("/AuthPage",function(req,res){res.render('Auth')});
router.get('/auth/google',passport.authenticate("google", { scope: ["profile", "email"] }));
router.get('/auth/facebook', passport.authenticate("facebook", { scope: "email" })); 
router.get('/auth/google/callback',passport.authenticate('google', { failureRedirect: '/error' }),authController.googleCallback);
router.get('/auth/facebook/callback',passport.authenticate('facebook', { successRedirect : 'http://localhost:8000/AuthPage', failureRedirect: '/login' }),authController.facebookCallback);


module.exports = router
