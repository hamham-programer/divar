const { CookieNames } = require("../../common/constant/cookie.enum")
const { NodeEnv } = require("../../common/constant/env.enum")
const AuthMessage = require("./auth.message")
const authService = require("./auth.service")
const autoBind =require("auto-bind")
class AuthController{
    #service
    constructor(){
        autoBind(this)
        this.#service = authService
    }
    async SendOTP(req, res, next){
        try {
            const {mobile} = req.body
            await this.#service.sendOTP(mobile)
            return res.json({
                message: AuthMessage.SendOtoSuccessfuliy
            })

            
        } catch (error) {
            next(error)
            
        }
    }
    async CheckOTP(req, res, next){
        try {
            const {mobile, code} = req.body
            const {accessToken,refreshToken}= await this.#service.checkOTP(mobile, code)
            console.log( accessToken);
             return res.cookie(CookieNames.AccessToken, accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === NodeEnv.Production
            }).status(200).json({
                message: AuthMessage.LoginSuccessfully,
                accessToken,
                refreshToken
            })

            
        } catch (error) {
            next(error)
            
        }
    }
    async checkRefreshToken (req, res, next) {
        try {
            const {refreshToken: token} = req.body;
            const {accessToken,refreshToken} = await this.#service.checkRefreshToken(token);
            return res.status(200).json({
                message: AuthMessage.LoginSuccessfully,
                accessToken,
                refreshToken
            });
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next){
        try {
            return res.clearCookie(CookieNames.AccessToken).status(200).json({
                message: AuthMessage.LogoutSuccessfuly  
            })
            
        } catch (error) {
            next(error)
            
        }
    }


}
module.exports = new AuthController()