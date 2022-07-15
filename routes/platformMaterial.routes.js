const {router} = require("../app")
const { fileUpload } = require("../middleware/fileupload")
const platformMaterialController = require("../controllers/platformMaterial.controller");
const { requireSignin } = require('../middleware/authorization')
const cpUpload = fileUpload.fields([{name: 'IncidentImage', maxCount: 6},{name: 'Incidentfiles', maxCount: 1}])

router.post("/news/blog",requireSignin,cpUpload, platformMaterialController.platformMaterialUpload);


module.exports = router