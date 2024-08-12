const { Router } = require("express")
const categoryControllr = require("./category.controllr")
const router = Router()

router.post("/", categoryControllr.create)
router.get("/", categoryControllr.find)
router.delete("/:id", categoryControllr.remove)


module.exports ={
    CategoryRouter: router
}