const productRoute = require("./productRoute");

function route(app) {
  app.use("/api", productRoute);
}

module.exports = route;
