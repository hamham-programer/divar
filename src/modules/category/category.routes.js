const { Router } = require("express")
const categoryControllr = require("./category.controllr")
const router = Router()

router.post("/", categoryControllr.create)
router.get("/", categoryControllr.find)

module.exports ={
    CategoryRouter: router
}