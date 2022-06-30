const {router} = require("../app");
const ApplicationController = require("../controllers/application.controller")
const {fileUpload}=require("../middleware/fileupload")
const { requireSignin } = require('../middleware/authorization');

const cpUpload = fileUpload.fields([{name: 'applicantPhoto', maxCount: 1}])
router.post("/landlord/applications",requireSignin,cpUpload, ApplicationController.insertApplicationDetail);
router.get("/landlord/applications",requireSignin, ApplicationController.getApplicationDetail);
router.put("/landlord/applications/:id",requireSignin,cpUpload, ApplicationController.updateApplication);
router.delete("/landlord/applications/:id",requireSignin, ApplicationController.deleteApplication);
router.get("/landlord/applications/:id",requireSignin, ApplicationController.getApplicationDetailById);
router.get("/tenant/applications",requireSignin, ApplicationController.getApplicationByTenant);


module.exports = router