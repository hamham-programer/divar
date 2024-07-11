const setCookie = (token) =>{
    document.cookie = `accessToken=${token.tokens}; max-age=${1*24*60*60}`
/*     document.cookie = `refreshToken=${tokens.token}; max-age=${1*24*60*60}`
 */}
 const getCookie = (cookieName)=>{
/*     return document.cookie.split(";").find((token) => token.trim().split("=")[0] === cookieName)?.split("=")[1]
 */    return document.cookie.split("=").find(token => token.trim().split[0] === cookieName)?.split("=")[1]
 }
export  {setCookie, getCookie}
