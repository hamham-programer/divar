const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

function SwaggerConfig(app){
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition:{
            openapi: "3.0.1",
            info:{
                title: "divar",
                description: "developer hamidreza-shafiei",
                version:"1.0.0"
            }
        },
        apis:[process.cwd() + "/src/modules/**/*.swagger.js"]
    });
    const swagger = swaggerUi.setup(swaggerDocument, {})
    app.use("/swagger", swaggerUi.serve, swagger)

}
module.exports = SwaggerConfig