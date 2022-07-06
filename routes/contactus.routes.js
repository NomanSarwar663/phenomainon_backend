const {router} = require("../app")
const contactUsController = require("../controllers/contactus.controller")
const { requireSignin } = require('../middleware/authorization')

router.post("/contact-us",requireSignin, contactUsController.contactUs);

module.exports = router
