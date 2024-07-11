function NotFoundHandler(app) {
    app.use((req, res, next)=>{
        res. status(404).json({
            message: "مسیر روت پیدا نشد"
        })
    })
    
}
module.exports= NotFoundHandler