const { router } = require("../app");
const reportController = require("../controllers/report.controller");
const { fileUpload } = require("../middleware/fileupload");
const cpUpload = fileUpload.fields([{name: 'IncidentImage', maxCount: 6} ,{name: 'Incidentfiles', maxCount: 1}])
const { requireSignin } = require('../middleware/authorization')

router.post("/report-incident",requireSignin,cpUpload,reportController.reportIncident);

module.exports = router;
