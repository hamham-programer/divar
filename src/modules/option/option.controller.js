const autoBind = require("auto-bind")
const optionService = require("./option.service")
const { OptionMessage } = require("./option.message")
const HttpCodes = require("http-codes")

class OptionController{
    #service
    constructor(){
        autoBind(this)
        this.#service = optionService
     }
    async create(req, res, next) {
        try {
            const {title, key, guid, type, enum:list, category, required}= req.body
            await this.#service.create({title, key, guid, type, enum:list, category, required})
            return res.status(HttpCodes.CREATED).json({
                message: OptionMessage.CREATED
            })
            
        } catch (error) {
            next(error)            
        }

    }
    async update(req, res, next) {
        try {
            const {title, key, guid, type, enum:list, category, required}= req.body
            const {id} = req.params
            await this.#service.update(id,{title, key, guid, type, enum:list, category, required})
            return res.json({
                message: OptionMessage.Updated
            })
            
        } catch (error) {
            next(error)            
        }

    }
  
    async findCategoryId(req, res, next){
        try {
            const {categoryId} = req.params
            const options = await this.#service.findCategoryId(categoryId)
            return res.json(options)
            
        } catch (error) {
            next(error)
            
        }

    }
    async findById(req, res, next){
        try {
           const {id} = req.params
            const option = await this.#service.findById(id)
            return res.json(option)
 
        } catch (error) {
            next(error)
            
        }

    } 
    async removeById(req, res, next){
        try {

            
        } catch (error) {
            next(error)
            
        }

    }     
    async findCategoryBySlug(req, res, next){
        try {
            const {slug} = req.params
            const options = await this.#service.findByCategorySlug(slug)
            return res.json(options)            
        } catch (error) {
            next(error)
            
        }

    }    
    async find(req, res, next){
        try {
            const options = await this.#service.find()
            return res.json(options)

            
        } catch (error) {
            next(error)
            
        }

    }     

    async removeById(req, res, next){
        try {
            const {id} = req.params
            await this.#service.removeById(id)
            return res.json({
                message: OptionMessage.Deleted
            })
            
        } catch (error) {
            next(error)
            
        }


    }

}
module.exports = new OptionController()