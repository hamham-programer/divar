const { Router } = require("express");
const optionController = require("./option.controller");
const router = Router()

router.post("/", optionController.create)
router.get("/by-category/:categoryId", optionController.findCategoryId)
router.get("/by-category-slug/:slug", optionController.findCategoryBySlug)
router.get("/:id", optionController.findById)
router.delete("/:id", optionController.removeById)
router.put("/:id", optionController.update)
router.get("/", optionController.find)

module.exports ={
    OptionRoutes: router
}
