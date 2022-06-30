const { router } = require("../app")
const { fileUpload } = require("../middleware/fileupload")
const ContactController = require("../controllers/contact.controller")
const { requireSignin } = require('../middleware/authorization');

const cpUpload = fileUpload.fields([{ name: 'contactPhoto', maxCount: 1 }, { name: 'contactDocuments', maxCount: 8 }])
router.post("/contact", requireSignin, cpUpload, ContactController.addContact);
router.get("/landlord/tenants", requireSignin, ContactController.getTenantsByLandlord);
router.get("/landlord/tenants/:id", requireSignin, ContactController.getTenantDetailById);
router.get("/landlord/professionals", requireSignin, ContactController.getProfessionalsByLandlord);
router.get("/landlord/professionals/:id", requireSignin, ContactController.getProfessionalDetailById);
router.put("/contact/:id", requireSignin, cpUpload, ContactController.updateContact);
router.get("/professional/contact", requireSignin, ContactController.getContactsByServicePro);

module.exports = router