import Cookie from "js-cookie";

const logIn = (token: string) => {
  if (process.env.NODE_ENV === "production") {
    Cookie.set("X-JWT", token, {
      domain: ".dogproblem.net"
    });
  } else {
    Cookie.set("X-JWT", token, {
      domain: ".localhost"
    });
    Cookie.set("X-JWT", token, {
      domain: "127.0.0.1"
    });
  }
  setTimeout(() => (window.location.href = "/"), 2000);
};
export default logIn;
