const {router} = require("../../app")
const checkAuth = require("../../middleware/checkAuth")
const Category = require("../../model/categories")
const CategoryController = require("../../controllers/category.controller")
const data =require("../../categories.json")

router.post("/insert-categories", CategoryController.insertCategories);
router.get("/categories", CategoryController.findRequested);

module.exports = router
