const {router} = require("../../app")
const RequestController = require("../../controllers/request.controller")
const {fileUpload}=require("../../middleware/fileupload")
const { requireSignin } = require('../../middleware/authorization');
const cpUpload = fileUpload.fields([{name: 'requestPhoto', maxCount: 8}])

router.post("/landlord/maintenance_request",requireSignin,cpUpload, RequestController.insertRequest);
router.put("/landlord/maintenance_request/:id",requireSignin,cpUpload, RequestController.updateRequestByLandlord);
router.get("/landlord/maintenance_request",requireSignin, RequestController.getRequests);
router.delete("/landlord/maintenance_request/:id",requireSignin, RequestController.deleteRequestByLandlord);
module.exports = router
