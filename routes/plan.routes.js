const {router} = require("../app")
const planController = require("../controllers/plan.controller");

router.post("/create-plan", planController.createPlan);
router.get("/get-plans", planController.getPlans);


module.exports = router