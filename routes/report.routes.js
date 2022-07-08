const { router } = require("../app");
const reportController = require("../controllers/report.controller");
const { fileUpload } = require("../middleware/fileupload");

const cpUpload = fileUpload.fields([
  { name: "incidentAttachment", maxCount: 2 },
]);
router.post(
  "/report-incident",
  reportController.reportIncident
);

module.exports = router;
