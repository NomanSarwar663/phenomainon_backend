const { router } = require("../app");
const userController = require("../controllers/user.controller");
const { requireSignin } = require('../middleware/authorization');

router.put("/user", requireSignin, userController.updateUser);

module.exports = router;
