const {router} = require("../app")
const contactUsController = require("../controllers/contactus.controller")

router.post("/contact-us", contactUsController.contactUs);

module.exports = router
