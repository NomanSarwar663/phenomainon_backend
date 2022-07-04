const {router} = require("../app")
const { fileUpload } = require("../middleware/fileupload")
const bucketController = require("../controllers/bucket.controller");
const { requireSignin } = require('../middleware/authorization')
const cpUpload = fileUpload.fields([{name: 'IncidentImage', maxCount: 6},{name: 'phenomainon', maxCount: 1} ,{name: 'Incidentfiles', maxCount: 1}])

router.post("/upload",requireSignin,cpUpload, bucketController.uploadToBucket);

module.exports = router