const {router} = require("../app")
const IssueController = require("../controllers/issue.controller")

router.post("/insert-issues", IssueController.insertIssues);
router.get("/issues", IssueController.getIssues);

module.exports = router
