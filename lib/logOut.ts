import Cookie from "js-cookie";

const logOut = () => {
  if (process.env.NODE_ENV === "production") {
    Cookie.remove("X-JWT", {
      domain: ".dogproblem.net"
    });
  } else {
    Cookie.remove("X-JWT", {
      domain: ".localhost"
    });
  }
  window.location.href = "/";
};
export default logOut;
