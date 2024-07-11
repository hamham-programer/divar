const autoBind = require("auto-bind")
const UserModel = require("./user.model")
const dotenv = require("dotenv")
dotenv.config()
class UserService{
    #model
    constructor(){
        autoBind(this)
        this.#model = UserModel
    }


}
module.exports = new UserService()