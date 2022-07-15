const {router} = require("../app")
const { fileUpload } = require("../middleware/fileupload")
const newsController = require("../controllers/news.controller");
const { requireSignin } = require('../middleware/authorization')
const cpUpload = fileUpload.fields([{name: 'IncidentImage', maxCount: 6},{name: 'Incidentfiles', maxCount: 1}])

router.post("/news/blog",requireSignin,cpUpload, newsController.newsUpload);
router.get("/news/blog",requireSignin, newsController.newsBlogList);
router.get("/news/blog/:id",requireSignin, newsController.newsBlogDetail);

module.exports = router