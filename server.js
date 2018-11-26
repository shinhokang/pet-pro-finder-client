const express = require("express");
const next = require("next");
const compression = require("compression");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());

    server.get('/trainer/:id', (req, res) => {
      const actualPage = '/trainer';
      const {params} = req;
      const queryParams = { trainerId: params.trainerId};
      app.render(req, res, actualPage, queryParams);
    });

    // server.get("/maker/:username/:tab", (req, res) => {
    //   const actualPage = "/maker";
    //   const { params } = req;
    //   const queryParams = { username: params.username, tab: params.tab };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
