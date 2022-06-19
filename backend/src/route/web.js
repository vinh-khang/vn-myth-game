import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    res.send("Server is up and running");
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
