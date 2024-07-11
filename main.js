const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const SwaggerConfig = require("./src/config/swagger.config")
const mainRouter = require("./src/app.routes")
const NotFoundHandler = require("./src/common/exception/not-found.handler")
const AllExceptionHandler = require("./src/common/exception/all-exception.handler")
const cookieParser = require("cookie-parser")
const cors = require("cors")
async function main(){
    const app = express()
    const port = process.env.PORT
    require("./src/config/mongoose.config")  
    app.use(express.urlencoded({extended:true}))
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY))
    app.use(express.json())
    SwaggerConfig(app)
    app.use(mainRouter)
    NotFoundHandler(app)
    AllExceptionHandler(app)
    app.listen(3000, ()=>{
        console.log(`server: http://localhost:${port}`);
    })

}
main()