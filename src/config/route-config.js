module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const whyRoute = require("../routes/why");
      const howRoute = require("../routes/how");

      app.use(staticRoutes);
      app.use(whyRoute);
      app.use(howRoute);
    }
  }