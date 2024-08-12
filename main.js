const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const SwaggerConfig = require("./src/config/swagger.config")
const mainRouter = require("./src/app.routes")
const NotFoundHandler = require("./src/common/exception/not-found.handler")
const AllExceptionHandler = require("./src/common/exception/all-exception.handler")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const expressEjsLayouts = require("express-ejs-layouts")
const moment = require("jalali-moment")
async function main(){
    const app = express()
    const port = process.env.PORT
    require("./src/config/mongoose.config")  
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(express.static("public"))
    app.use(expressEjsLayouts)
    app.set("view engine", "ejs")
    app.set("layout", "./layouts/panel/main.ejs")
    app.set("layout extractScripts", true);
    app.set("layout extractStyles", true);
    app.use(cors({
        origin: "*"
    }));
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY))
    SwaggerConfig(app)
    app.use(mainRouter)
    app.locals.moment = moment
    NotFoundHandler(app)
    AllExceptionHandler(app)
    app.listen(3000, ()=>{
        console.log(`server: http://localhost:${port}`);
    })

}
main()