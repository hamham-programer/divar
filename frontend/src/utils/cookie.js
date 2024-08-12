
const setCookie = (token) => {
  document.cookie = `accessToken=${token.accessToken}; max-age=${1 * 24 * 60 * 60}; path=/`;
  document.cookie = `refreshToken=${token.refreshToken}; max-age=${30 * 24 * 60 * 60}; path=/`;
  console.log(document.cookie);
};

const getCookie = (cookieName) => {
  console.log(document.cookie);
  return document.cookie
      .split(";")
      .find((token) => token.trim().split("=")[0] === cookieName)
      ?.split("=")[1];

};

export { setCookie, getCookie };
