const {router} = require("../app")
const { fileUpload } = require("../middleware/fileupload")
const leaseController = require("../controllers/lease.controller");
const { requireSignin } = require('../middleware/authorization');
const cpUpload = fileUpload.fields([{ name: 'leaseDocuments', maxCount: 8 }])

router.post("/landlord/lease",requireSignin,cpUpload, leaseController.addLease);
router.get("/landlord/lease",requireSignin, leaseController.getLeaseByLandlord);


module.exports = router